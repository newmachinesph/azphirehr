"use client";

import { lazy, Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { icons, type LucideProps } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface BentoCardProps {
  /** Lucide icon name as a string, e.g. "Brain", "Zap", "Shield" */
  icon: string;
  title: string;
  description: string;
  className?: string;
  /** Delay index for staggered entrance */
  index?: number;
}

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon {...props} />;
}

export function BentoCard({
  icon,
  title,
  description,
  className,
  index = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: EASE,
      }}
      className={cn(
        "group relative flex flex-col gap-4 p-6 sm:p-8 rounded-2xl",
        "bg-white border border-border",
        "transition-all duration-300",
        "hover:shadow-[0_8px_40px_rgba(15,98,254,0.12)] hover:-translate-y-1 hover:border-primary/20",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(300px_at_var(--mouse-x,50%)_var(--mouse-y,0%),rgba(15,98,254,0.06),transparent)]" />

      {/* Icon */}
      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
        <DynamicIcon name={icon} size={24} strokeWidth={1.8} />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-2">
        <h3 className="text-lg font-bold font-display text-dark leading-snug">
          {title}
        </h3>
        <p className="text-text-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-primary/40" />
        <div className="absolute top-3 right-8 w-1 h-1 rounded-full bg-secondary/30" />
        <div className="absolute top-8 right-3 w-1 h-1 rounded-full bg-accent/30" />
      </div>
    </motion.div>
  );
}
