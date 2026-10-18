"use client";

import dynamic from "next/dynamic";

// ---------------------------------------------------------------------------
// Dynamically imported Three.js components with SSR disabled.
// Import these from any page/component — they handle hydration safely.
//
// Usage:
//   import { DynamicHeroScene, DynamicFloatingIcon, DynamicPhilippinesMap }
//     from "@/components/three/dynamic-imports";
// ---------------------------------------------------------------------------

export const DynamicHeroScene = dynamic(
  () => import("@/components/three/hero-scene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-10 w-10 animate-pulse rounded-full bg-blue-100" />
      </div>
    ),
  }
);

export const DynamicFloatingIcon = dynamic(
  () => import("@/components/three/floating-icon"),
  {
    ssr: false,
    loading: () => null,
  }
);

export const DynamicPhilippinesMap = dynamic(
  () => import("@/components/three/philippines-map"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-8 w-8 animate-pulse rounded-full bg-cyan-100" />
      </div>
    ),
  }
);
