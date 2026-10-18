"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  /** Target value to count up to. */
  value: number;
  /** Optional suffix like "+", "%", "M+", "K" */
  suffix?: string;
  /** Optional prefix like "$", "#" */
  prefix?: string;
  /** Duration of the spring animation in approximate seconds. */
  duration?: number;
  /** Number of decimal places to show. */
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20 + duration * 5,
    duration: duration * 1000,
  });

  // Kick off animation when scrolled into view
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  // Update the DOM text as the spring animates
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted =
          decimals > 0
            ? latest.toFixed(decimals)
            : Math.round(latest).toLocaleString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, decimals]);

  return (
    <motion.span
      ref={ref}
      className={cn(
        "tabular-nums font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-dark",
        className
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}
