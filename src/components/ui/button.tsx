"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  /** Render as a Next.js Link when href is provided. */
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const variantStyles: Record<Variant, string> = {
  primary: [
    "relative bg-gradient-to-r from-primary to-secondary text-white",
    "shadow-[0_4px_20px_rgba(15,98,254,0.35)]",
    "hover:shadow-[0_8px_40px_rgba(15,98,254,0.5)]",
  ].join(" "),
  secondary: [
    "relative border-2 border-primary/30 text-primary bg-transparent",
    "hover:border-primary hover:bg-primary/5",
  ].join(" "),
  ghost: [
    "relative text-text-muted bg-transparent",
    "hover:text-primary hover:bg-primary/5",
  ].join(" "),
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg gap-1.5",
  md: "px-6 py-3 text-base rounded-xl gap-2",
  lg: "px-8 py-4 text-lg rounded-xl gap-2.5",
};

const springTransition = { type: "spring" as const, stiffness: 400, damping: 17 };

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold font-display",
    "cursor-pointer select-none transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const inner = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-[inherit] bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <span className="relative z-10 flex items-center gap-[inherit]">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
        className="inline-block"
      >
        <Link href={href} target={target} rel={rel} className={cn(classes, "group")}>
          {inner}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(classes, "group")}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
    >
      {inner}
    </motion.button>
  );
}
