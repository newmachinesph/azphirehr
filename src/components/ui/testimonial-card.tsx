"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  /** Optional avatar URL. Falls back to an initials circle. */
  avatarUrl?: string;
  className?: string;
  index?: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/** Deterministic color from initials for the avatar fallback. */
const avatarColors = [
  "from-primary to-secondary",
  "from-secondary to-accent",
  "from-accent to-primary",
  "from-primary to-accent",
  "from-secondary to-primary",
];

function getAvatarColor(name: string): string {
  const charSum = name.split("").reduce((s, c) => s + c.charCodeAt(0), 0);
  return avatarColors[charSum % avatarColors.length];
}

export function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  avatarUrl,
  className,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: EASE,
      }}
      className={cn(
        "relative flex flex-col gap-6 p-6 sm:p-8 rounded-2xl",
        "bg-white border border-border/60",
        "transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:border-primary/15 hover:-translate-y-1",
        className
      )}
    >
      {/* Quote icon */}
      <Quote
        size={32}
        strokeWidth={1.2}
        className="text-primary/20 flex-shrink-0"
      />

      {/* Quote body */}
      <p className="text-text leading-relaxed text-base sm:text-lg italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={authorName}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
          />
        ) : (
          <div
            className={cn(
              "flex items-center justify-center w-11 h-11 rounded-full",
              "text-white text-sm font-bold bg-gradient-to-br",
              getAvatarColor(authorName)
            )}
          >
            {getInitials(authorName)}
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-dark">{authorName}</span>
          <span className="text-xs text-text-muted">{authorTitle}</span>
        </div>
      </div>
    </motion.div>
  );
}
