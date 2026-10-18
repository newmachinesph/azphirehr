"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Headphones,
  Code,
  Globe,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { solutions } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Icon mapping                                                       */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Headphones,
  Code,
  Globe,
};

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string; gradient: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "group-hover:shadow-[0_8px_40px_rgba(15,98,254,0.18)]",
    gradient: "from-primary/10 to-primary/5",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_8px_40px_rgba(124,58,237,0.18)]",
    gradient: "from-secondary/10 to-secondary/5",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-cyan-700",
    glow: "group-hover:shadow-[0_8px_40px_rgba(6,182,212,0.18)]",
    gradient: "from-accent/10 to-accent/5",
  },
};

/* ------------------------------------------------------------------ */
/*  Framer Motion variants                                             */
/* ------------------------------------------------------------------ */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function SolutionsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ---- decorative blobs ---- */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-60 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[100px]" />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Industry Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold font-display leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl"
            >
              Built for how{" "}
              <span className="gradient-text">you hire</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
            >
              Whether you are a scrappy startup or a 10,000-seat BPO, AzphireHR
              adapts to your industry, your scale, and your hiring challenges
              with purpose-built solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTION CARDS — 2x2 grid                                   */}
      {/* ============================================================ */}
      <section className="relative pb-28 lg:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {solutions.map((sol) => {
              const Icon = iconMap[sol.icon] ?? Rocket;
              const colors = colorMap[sol.color] ?? colorMap.primary;

              return (
                <motion.div key={sol.slug} variants={cardVariants}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className={cn(
                      "group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-white p-8 lg:p-10",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl",
                      colors.glow
                    )}
                  >
                    {/* subtle gradient overlay on hover */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        colors.gradient
                      )}
                    />

                    <div className="relative z-10">
                      {/* icon */}
                      <div
                        className={cn(
                          "mb-6 flex h-14 w-14 items-center justify-center rounded-xl border transition-colors duration-300",
                          colors.bg,
                          colors.border,
                          "group-hover:scale-110 transform"
                        )}
                      >
                        <Icon className={cn("h-6 w-6", colors.text)} />
                      </div>

                      {/* name */}
                      <p
                        className={cn(
                          "mb-1 text-sm font-semibold uppercase tracking-wide",
                          colors.text
                        )}
                      >
                        {sol.name}
                      </p>

                      {/* headline */}
                      <h3 className="mb-3 text-2xl font-bold font-display leading-snug text-dark lg:text-[1.65rem]">
                        {sol.headline}
                      </h3>

                      {/* description */}
                      <p className="text-text-muted leading-relaxed line-clamp-3">
                        {sol.description}
                      </p>
                    </div>

                    {/* learn more */}
                    <div className="relative z-10 mt-8 flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors duration-300 group-hover:text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                  */}
      {/* ============================================================ */}
      <section className="relative pb-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl bg-dark px-8 py-16 text-center sm:px-16 lg:py-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* decorative glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 right-0 h-40 w-[400px] rounded-full bg-secondary/15 blur-[80px]" />
            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="max-w-xl text-3xl font-bold font-display leading-tight text-white sm:text-4xl lg:text-5xl">
                Not sure which plan fits?
              </h2>

              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
                Talk to our team and we will map the right solution to your
                hiring goals -- no pressure, no commitment.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Talk to Us
                </Button>
                <Button href="/pricing" variant="secondary" size="lg" className="border-white/20 text-white hover:border-white/40 hover:bg-white/5">
                  View Pricing
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
