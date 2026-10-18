"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Rocket,
  Headphones,
  Code,
  Globe,
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface Solution {
  slug: string;
  name: string;
  headline: string;
  description: string;
  icon: string;
  color: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

interface Props {
  solution: Solution;
}

/* ------------------------------------------------------------------ */
/*  Icon / color maps                                                  */
/* ------------------------------------------------------------------ */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Headphones,
  Code,
  Globe,
};

const colorMap: Record<
  string,
  {
    text: string;
    bg: string;
    border: string;
    badge: "primary" | "secondary" | "accent";
  }
> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    badge: "primary",
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    badge: "secondary",
  },
  accent: {
    text: "text-cyan-700",
    bg: "bg-accent/10",
    border: "border-accent/20",
    badge: "accent",
  },
};

/* ------------------------------------------------------------------ */
/*  Framer variants                                                    */
/* ------------------------------------------------------------------ */
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function parseStatValue(raw: string): {
  numeric: number;
  suffix: string;
  prefix: string;
} {
  const match = raw.match(/^([^\d]*?)([\d,.]+)(.*?)$/);
  if (!match) return { numeric: 0, suffix: raw, prefix: "" };
  return {
    prefix: match[1],
    numeric: parseFloat(match[2].replace(/,/g, "")),
    suffix: match[3],
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function SolutionDetailClient({ solution }: Props) {
  const Icon = iconMap[solution.icon] ?? Rocket;
  const colors = colorMap[solution.color] ?? colorMap.primary;

  return (
    <main className="relative overflow-hidden">
      {/* ---- decorative blobs ---- */}
      <div
        className={cn(
          "pointer-events-none absolute -top-60 -right-60 h-[700px] w-[700px] rounded-full blur-[140px]",
          colors.bg
        )}
      />
      <div className="pointer-events-none absolute top-[60%] -left-40 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px]" />

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/solutions"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              All Solutions
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-start"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* eyebrow badge */}
            <motion.div variants={fadeUp}>
              <Badge variant={colors.badge} className="mb-6 gap-2">
                <Icon className="h-3.5 w-3.5" />
                {solution.name}
              </Badge>
            </motion.div>

            {/* headline */}
            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold font-display leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-6xl"
            >
              {solution.headline}
            </motion.h1>

            {/* description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl"
            >
              {solution.description}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                <Sparkles className="h-5 w-5" />
                Book a Demo
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View Pricing
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CHALLENGES                                                  */}
      {/* ============================================================ */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* left -- heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-red-600"
              >
                <AlertTriangle className="h-3.5 w-3.5" />
                Pain Points
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-5 text-3xl font-bold font-display leading-tight tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]"
              >
                The challenges{" "}
                <span className="gradient-text">you face</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 max-w-md text-text-muted leading-relaxed"
              >
                Sound familiar? These are the exact pain points our customers
                faced before switching to AzphireHR.
              </motion.p>
            </motion.div>

            {/* right -- challenge list */}
            <motion.ul
              className="flex flex-col gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              {solution.challenges.map((challenge, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-red-200 hover:shadow-lg hover:shadow-red-500/5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-500 transition-colors group-hover:bg-red-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <p className="pt-1 text-text leading-relaxed">{challenge}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SOLUTIONS -- 2x2 grid                                       */}
      {/* ============================================================ */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-light to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Our Solutions
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl text-3xl font-bold font-display leading-tight tracking-tight text-dark sm:text-4xl lg:text-[2.75rem]"
            >
              How AzphireHR{" "}
              <span className="gradient-text">solves them</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {solution.solutions.map((sol, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 lg:p-10"
              >
                {/* top accent bar */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-emerald-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600 transition-colors group-hover:bg-emerald-100">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mb-2 text-xl font-bold font-display text-dark">
                  {sol.title}
                </h3>

                <p className="text-text-muted leading-relaxed">
                  {sol.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS                                                       */}
      {/* ============================================================ */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid gap-8 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {solution.stats.map((stat, i) => {
              const { numeric, suffix, prefix } = parseStatValue(stat.value);

              return (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group flex flex-col items-center rounded-2xl border border-border bg-white p-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                >
                  {numeric > 0 ? (
                    <AnimatedCounter
                      value={numeric}
                      prefix={prefix}
                      suffix={suffix}
                      className={cn("text-5xl lg:text-6xl", colors.text)}
                    />
                  ) : (
                    <motion.span
                      className={cn(
                        "font-display font-bold text-5xl lg:text-6xl",
                        colors.text
                      )}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {stat.value}
                    </motion.span>
                  )}
                  <span className="mt-3 text-sm font-semibold uppercase tracking-wide text-text-muted">
                    {stat.label}
                  </span>
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
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* decorative glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 right-0 h-48 w-[400px] rounded-full bg-secondary/15 blur-[80px]" />
            {/* Grid pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] rounded-2xl" />

            <div className="relative z-10 flex flex-col items-center">
              <h2 className="max-w-2xl text-3xl font-bold font-display leading-tight text-white sm:text-4xl lg:text-5xl">
                Start solving{" "}
                <span className="gradient-text">
                  {solution.name.toLowerCase().replace("for ", "")}
                </span>{" "}
                hiring today
              </h2>

              <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">
                See how AzphireHR transforms your hiring process in a
                personalized demo -- tailored to your exact challenges.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" size="lg">
                  <Sparkles className="h-5 w-5" />
                  Book a Demo
                </Button>
                <Button
                  href="/solutions"
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:text-white hover:bg-white/10"
                >
                  Explore Other Solutions
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
