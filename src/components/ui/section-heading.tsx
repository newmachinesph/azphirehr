"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  /** Portion of the heading rendered with the gradient-text effect. */
  gradientText?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

export function SectionHeading({
  eyebrow,
  heading,
  gradientText,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  // Split heading around gradientText so we can wrap it
  let headingContent: React.ReactNode = heading;
  if (gradientText && heading.includes(gradientText)) {
    const parts = heading.split(gradientText);
    headingContent = (
      <>
        {parts[0]}
        <span className="gradient-text">{gradientText}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <motion.div
      className={cn("flex flex-col gap-4 max-w-3xl", alignClass, align === "center" && "mx-auto", className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {eyebrow && (
        <>
          <motion.span
            variants={childVariants}
            className="inline-flex self-auto w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/8 text-primary border border-primary/15"
          >
            {eyebrow}
          </motion.span>
          {align === "center" && (
            <motion.div
              variants={childVariants}
              className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto -mt-2 mb-0"
            />
          )}
        </>
      )}

      <motion.h2
        variants={childVariants}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-dark"
      >
        {headingContent}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={childVariants}
          className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
