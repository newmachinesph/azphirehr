"use client";

import { useRef, useMemo, useCallback, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const NODE_COUNT = 70;
const EDGE_MAX_DIST = 2.4;
const PRIMARY_BLUE = new THREE.Color("#0F62FE");
const EDGE_COLOR = new THREE.Color("#7EB0FF");

// ---------------------------------------------------------------------------
// Generate initial node positions in an organic cloud shape
// ---------------------------------------------------------------------------
function generateNodes(count: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = 2.2 + (Math.random() - 0.5) * 1.8;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6;
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.8;
  }
  return positions;
}

// ---------------------------------------------------------------------------
// Build edge index pairs for nodes within max distance
// ---------------------------------------------------------------------------
function buildEdges(positions: Float32Array, count: number, maxDist: number) {
  const pairs: number[] = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < maxDist) {
        pairs.push(i, j);
      }
    }
  }
  return pairs;
}

// ---------------------------------------------------------------------------
// Network mesh (nodes + edges)
// ---------------------------------------------------------------------------
function NetworkMesh() {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);

  const basePositions = useMemo(() => generateNodes(NODE_COUNT), []);
  const edgePairs = useMemo(
    () => buildEdges(basePositions, NODE_COUNT, EDGE_MAX_DIST),
    [basePositions]
  );

  // Dummy object for instanced matrix updates
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Mouse tracking for parallax
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const handlePointerMove = useCallback(
    (state: { pointer: THREE.Vector2 }) => {
      mouse.current.x = state.pointer.x;
      mouse.current.y = state.pointer.y;
    },
    []
  );

  // Line geometry buffer
  const linePositions = useMemo(
    () => new Float32Array(edgePairs.length * 3),
    [edgePairs]
  );

  useFrame((state, delta) => {
    handlePointerMove(state);
    const t = state.clock.elapsedTime;

    // Update node positions with sine-wave drift
    for (let i = 0; i < NODE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];

      const ox = Math.sin(t * 0.3 + i * 0.8) * 0.08;
      const oy = Math.cos(t * 0.25 + i * 1.1) * 0.1;
      const oz = Math.sin(t * 0.35 + i * 0.6) * 0.06;

      dummy.position.set(bx + ox, by + oy, bz + oz);
      dummy.scale.setScalar(0.06);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Also write into the line buffer for connected edges
      // (we need current positions for edge endpoints)
      basePositions[i * 3] = bx; // keep base stable
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update edge line positions using current dummy transforms
    const mat = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const currentPositions: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      meshRef.current.getMatrixAt(i, mat);
      pos.setFromMatrixPosition(mat);
      currentPositions.push(pos.clone());
    }

    for (let e = 0; e < edgePairs.length; e += 2) {
      const a = currentPositions[edgePairs[e]];
      const b = currentPositions[edgePairs[e + 1]];
      const idx = e * 3;
      linePositions[idx] = a.x;
      linePositions[idx + 1] = a.y;
      linePositions[idx + 2] = a.z;
      linePositions[idx + 3] = b.x;
      linePositions[idx + 4] = b.y;
      linePositions[idx + 5] = b.z;
    }
    if (lineRef.current) {
      lineRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Slow rotation + mouse parallax tilt
    groupRef.current.rotation.y += delta * 0.06;
    const targetRotX = mouse.current.y * 0.15;
    const targetRotY = mouse.current.x * 0.15;
    groupRef.current.rotation.x +=
      (targetRotX - groupRef.current.rotation.x) * 0.03;
    groupRef.current.rotation.z +=
      (-targetRotY * 0.3 - groupRef.current.rotation.z) * 0.03;
  });

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      <instancedMesh ref={meshRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial
          color={PRIMARY_BLUE}
          emissive={PRIMARY_BLUE}
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </instancedMesh>

      {/* Edges */}
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={EDGE_COLOR}
          transparent
          opacity={0.25}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Loading fallback shown inside the Suspense boundary
// ---------------------------------------------------------------------------
function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-10 w-10 animate-pulse rounded-full bg-blue-200" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Public component — renders the Canvas with Suspense
// ---------------------------------------------------------------------------
export default function HeroScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <NetworkMesh />
        </Canvas>
      </Suspense>
    </div>
  );
}
