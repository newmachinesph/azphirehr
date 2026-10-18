"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
type ShapeKind = "icosahedron" | "torus" | "octahedron";

interface FloatingIconProps {
  color?: string;
  shape?: ShapeKind;
  size?: number;
  className?: string;
}

// ---------------------------------------------------------------------------
// Inner 3D shape — rotates faster on hover, wireframe + glow
// ---------------------------------------------------------------------------
function Shape({
  color = "#0F62FE",
  shape = "icosahedron",
}: {
  color: string;
  shape: ShapeKind;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const threeColor = new THREE.Color(color);

  useFrame((_, delta) => {
    const speed = hovered ? 1.8 : 0.4;
    meshRef.current.rotation.x += delta * speed * 0.5;
    meshRef.current.rotation.y += delta * speed;
  });

  const geometry = (() => {
    switch (shape) {
      case "torus":
        return <torusGeometry args={[0.6, 0.25, 12, 24]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.7, 0]} />;
      case "icosahedron":
      default:
        return <icosahedronGeometry args={[0.7, 0]} />;
    }
  })();

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      <meshStandardMaterial
        color={threeColor}
        emissive={threeColor}
        emissiveIntensity={hovered ? 0.6 : 0.3}
        wireframe
        transparent
        opacity={0.85}
        toneMapped={false}
      />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------
export default function FloatingIcon({
  color = "#0F62FE",
  shape = "icosahedron",
  size = 48,
  className = "",
}: FloatingIconProps) {
  return (
    <div
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 2.5], fov: 40 }}
          gl={{ alpha: true, antialias: true }}
          dpr={[1, 2]}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 3, 3]} intensity={0.8} />
          <Shape color={color} shape={shape} />
        </Canvas>
      </Suspense>
    </div>
  );
}
