"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Approximate Philippine island outlines as polygons (lat/lng simplified and
// projected to a flat 2D plane). Coordinates are rough bounding shapes for
// the three major island groups, scaled to fit ~[-3,3] range.
// ---------------------------------------------------------------------------

// Luzon (top)
const LUZON: [number, number][] = [
  [0.4, 4.5], [0.9, 4.3], [1.2, 3.8], [1.4, 3.3], [1.3, 2.8],
  [1.5, 2.4], [1.6, 2.0], [1.4, 1.6], [1.1, 1.3], [0.8, 1.1],
  [0.5, 1.0], [0.2, 1.1], [-0.2, 1.3], [-0.5, 1.6], [-0.6, 2.0],
  [-0.5, 2.4], [-0.3, 2.8], [-0.1, 3.2], [0.0, 3.6], [0.1, 4.0],
  [0.2, 4.3],
];

// Visayas (middle)
const VISAYAS_WEST: [number, number][] = [
  [-0.6, 0.8], [-0.3, 0.5], [0.0, 0.3], [0.3, 0.1], [0.5, -0.2],
  [0.3, -0.5], [0.0, -0.6], [-0.3, -0.5], [-0.6, -0.3], [-0.8, 0.0],
  [-0.8, 0.4],
];

const VISAYAS_EAST: [number, number][] = [
  [0.7, 0.9], [1.0, 0.6], [1.3, 0.3], [1.4, 0.0], [1.3, -0.3],
  [1.1, -0.6], [0.8, -0.7], [0.5, -0.5], [0.5, -0.1], [0.5, 0.3],
  [0.6, 0.6],
];

// Mindanao (bottom)
const MINDANAO: [number, number][] = [
  [0.0, -1.0], [0.5, -1.2], [1.0, -1.3], [1.4, -1.5], [1.6, -1.9],
  [1.5, -2.3], [1.3, -2.7], [1.0, -3.0], [0.7, -3.2], [0.3, -3.3],
  [-0.1, -3.2], [-0.5, -3.0], [-0.8, -2.7], [-1.0, -2.3], [-0.9, -1.9],
  [-0.7, -1.5], [-0.4, -1.2],
];

// Palawan (long thin island on the west)
const PALAWAN: [number, number][] = [
  [-1.2, 1.8], [-1.0, 1.5], [-0.9, 1.2], [-1.0, 0.8], [-1.1, 0.4],
  [-1.3, 0.0], [-1.5, -0.4], [-1.7, -0.7], [-1.9, -0.5], [-1.7, -0.1],
  [-1.5, 0.3], [-1.4, 0.7], [-1.3, 1.1], [-1.2, 1.5],
];

const ALL_ISLANDS = [LUZON, VISAYAS_WEST, VISAYAS_EAST, MINDANAO, PALAWAN];
const PARTICLE_COUNT = 2500;

// ---------------------------------------------------------------------------
// Point-in-polygon test (ray casting)
// ---------------------------------------------------------------------------
function pointInPolygon(x: number, y: number, poly: [number, number][]) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0],
      yi = poly[i][1];
    const xj = poly[j][0],
      yj = poly[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

// ---------------------------------------------------------------------------
// Bounding box for a polygon
// ---------------------------------------------------------------------------
function polyBounds(poly: [number, number][]) {
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  for (const [x, y] of poly) {
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return { minX, maxX, minY, maxY };
}

// ---------------------------------------------------------------------------
// Total area estimate for weighted particle distribution
// ---------------------------------------------------------------------------
function polyArea(poly: [number, number][]) {
  const b = polyBounds(poly);
  return (b.maxX - b.minX) * (b.maxY - b.minY);
}

// ---------------------------------------------------------------------------
// Generate particle positions scattered inside the island polygons
// ---------------------------------------------------------------------------
function generateParticles(total: number): Float32Array {
  const positions = new Float32Array(total * 3);

  // Distribute particles proportionally to each island's bounding area
  const areas = ALL_ISLANDS.map(polyArea);
  const totalArea = areas.reduce((s, a) => s + a, 0);
  const counts = areas.map((a) => Math.round((a / totalArea) * total));
  // Adjust rounding
  const diff = total - counts.reduce((s, c) => s + c, 0);
  counts[0] += diff;

  let idx = 0;
  for (let g = 0; g < ALL_ISLANDS.length; g++) {
    const poly = ALL_ISLANDS[g];
    const { minX, maxX, minY, maxY } = polyBounds(poly);
    let placed = 0;
    let attempts = 0;
    while (placed < counts[g] && attempts < counts[g] * 50) {
      attempts++;
      const x = minX + Math.random() * (maxX - minX);
      const y = minY + Math.random() * (maxY - minY);
      if (pointInPolygon(x, y, poly)) {
        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = (Math.random() - 0.5) * 0.15; // slight depth
        idx++;
        placed++;
      }
    }
  }
  return positions;
}

// ---------------------------------------------------------------------------
// Particle field component
// ---------------------------------------------------------------------------
function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const basePositions = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  // Pre-compute random phase offsets for each particle
  const phases = useMemo(() => {
    const p = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) p[i] = Math.random() * Math.PI * 2;
    return p;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Color gradient from primary blue to accent cyan
  const colorA = useMemo(() => new THREE.Color("#0F62FE"), []);
  const colorB = useMemo(() => new THREE.Color("#00D4FF"), []);
  const tempColor = useMemo(() => new THREE.Color(), []);

  // Set initial per-instance colors
  useMemo(() => {
    // Will be set in first frame
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const bx = basePositions[i * 3];
      const by = basePositions[i * 3 + 1];
      const bz = basePositions[i * 3 + 2];
      const phase = phases[i];

      // Gentle drift
      const ox = Math.sin(t * 0.2 + phase) * 0.03;
      const oy = Math.cos(t * 0.15 + phase * 1.3) * 0.03;

      // Pulsing scale
      const scale = 0.018 + Math.sin(t * 0.8 + phase) * 0.006;

      dummy.position.set(bx + ox, by + oy, bz);
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color gradient based on Y position (top = blue, bottom = cyan)
      const normalizedY = (by + 3.3) / 7.8; // approx range -3.3 to 4.5
      tempColor.copy(colorA).lerp(colorB, 1 - normalizedY);
      meshRef.current.setColorAt(i, tempColor);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true;

    // Slow Y-axis rotation
    groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.3;
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[1, 6, 6]} />
        <meshStandardMaterial
          color="#0F62FE"
          emissive="#0F62FE"
          emissiveIntensity={0.5}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

// ---------------------------------------------------------------------------
// Loading fallback
// ---------------------------------------------------------------------------
function MapFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-8 w-8 animate-pulse rounded-full bg-cyan-200" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
export default function PhilippinesMap({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`h-full w-full ${className}`} aria-hidden="true">
      <Suspense fallback={<MapFallback />}>
        <Canvas
          camera={{ position: [0, 0, 9], fov: 40 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 4, 6]} intensity={0.7} />
          <ParticleField />
        </Canvas>
      </Suspense>
    </div>
  );
}
