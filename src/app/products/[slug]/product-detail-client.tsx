"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { icons, type LucideProps } from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { products } from "@/data/site";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Product = (typeof products)[number];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon {...props} />;
}

const colorMap: Record<string, {
  bg: string;
  bgSolid: string;
  border: string;
  text: string;
  glow: string;
  gradient: string;
  heroBg: string;
  statsBg: string;
  badgeVariant: "primary" | "secondary" | "accent";
}> = {
  primary: {
    bg: "bg-primary/10",
    bgSolid: "bg-primary",
    border: "border-primary/20",
    text: "text-primary",
    glow: "rgba(15,98,254,0.12)",
    gradient: "from-primary via-primary/80 to-secondary",
    heroBg: "rgba(15,98,254,0.04)",
    statsBg: "bg-primary/[0.03]",
    badgeVariant: "primary",
  },
  secondary: {
    bg: "bg-secondary/10",
    bgSolid: "bg-secondary",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "rgba(124,58,237,0.12)",
    gradient: "from-secondary via-secondary/80 to-primary",
    heroBg: "rgba(124,58,237,0.04)",
    statsBg: "bg-secondary/[0.03]",
    badgeVariant: "secondary",
  },
  accent: {
    bg: "bg-accent/10",
    bgSolid: "bg-accent",
    border: "border-accent/20",
    text: "text-cyan-700",
    glow: "rgba(6,182,212,0.12)",
    gradient: "from-accent via-accent/80 to-primary",
    heroBg: "rgba(6,182,212,0.04)",
    statsBg: "bg-accent/[0.03]",
    badgeVariant: "accent",
  },
};

/* ------------------------------------------------------------------ */
/*  Animation Variants                                                 */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const featureCardVariant = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.08,
      ease: EASE,
    },
  }),
};

/* ------------------------------------------------------------------ */
/*  Parse Stat Value Helper                                            */
/* ------------------------------------------------------------------ */

function parseStatValue(val: string): { num: number; prefix: string; suffix: string } {
  if (val === "Real-Time") return { num: 0, prefix: "", suffix: "" };

  const match = val.match(/^([<$#]?)(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, prefix: "", suffix: val };
  return {
    prefix: match[1] || "",
    num: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

/* ================================================================== */
/*  CLIENT COMPONENT                                                   */
/* ================================================================== */

export default function ProductDetailClient({ product }: { product: Product }) {
  const colors = colorMap[product.color] || colorMap.primary;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 80% 50% at 50% 30%, ${colors.heroBg}, transparent)` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <motion.div
            className={cn("absolute top-20 right-[15%] w-72 h-72 rounded-full blur-[100px] opacity-30", colors.bg)}
            animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 left-[10%] w-48 h-48 rounded-full bg-secondary/10 blur-[80px] opacity-20"
            animate={{ scale: [1.1, 1, 1.1], x: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                All Products
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className={cn(
                "inline-flex items-center justify-center w-12 h-12 rounded-xl",
                colors.bg, colors.text
              )}>
                <DynamicIcon name={product.icon} size={24} strokeWidth={1.8} />
              </div>
              <Badge variant={colors.badgeVariant}>{product.name}</Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.08] tracking-tight text-dark mb-6"
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            >
              {product.headline}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-text-muted max-w-2xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              {product.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button href="/contact" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                    */}
      {/* ============================================================ */}
      <section className={cn("py-16 border-y border-border/60", colors.statsBg)}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {product.stats.map((stat, i) => {
              const parsed = parseStatValue(stat.value);
              const isSpecial = parsed.num === 0 && stat.value !== "0";

              return (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  className="text-center"
                >
                  {isSpecial ? (
                    <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-dark">
                      {stat.value}
                    </span>
                  ) : (
                    <AnimatedCounter
                      value={parsed.num}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      className="text-3xl sm:text-4xl lg:text-5xl"
                    />
                  )}
                  <p className="mt-2 text-sm sm:text-base text-text-muted font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES GRID                                                */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading
            eyebrow="Features"
            heading={`What makes ${product.name} powerful`}
            gradientText="powerful"
            subtitle="Every feature is designed to save you time, reduce bias, and help you make better hiring decisions."
          />

          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {product.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                variants={featureCardVariant}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col gap-4 p-7 rounded-2xl bg-white border border-border hover:border-transparent hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full",
                  colors.bg,
                  colors.text,
                  "transition-transform duration-300 group-hover:scale-110"
                )}>
                  <CheckCircle2 size={22} strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold font-display text-dark leading-snug">
                  {feature.title}
                </h3>

                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${colors.glow} 0%, transparent 60%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-light to-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="How It Works"
            heading="Three steps to smarter hiring"
            gradientText="smarter hiring"
            subtitle={`Getting started with ${product.name} takes minutes, not months.`}
          />

          <motion.div
            className="mt-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {product.steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  custom={i}
                  variants={fadeUp}
                  className="relative flex flex-col items-center text-center"
                >
                  <motion.div
                    className={cn(
                      "relative z-10 flex items-center justify-center w-16 h-16 rounded-full mb-6",
                      "bg-white border-2",
                      colors.border,
                      "shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                    )}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <span className={cn("text-2xl font-bold font-display", colors.text)}>
                      {i + 1}
                    </span>
                  </motion.div>

                  {i < product.steps.length - 1 && (
                    <div className="md:hidden w-0.5 h-8 bg-gradient-to-b from-border to-transparent -mt-3 mb-3" />
                  )}

                  <h3 className="text-xl font-bold font-display text-dark mb-3">
                    {step.title}
                  </h3>

                  <p className="text-text-muted leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SCREENSHOT / DEMO PLACEHOLDER                                */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="Product Preview"
            heading={`See ${product.name} in action`}
            gradientText="in action"
          />

          <motion.div
            className="mt-14 relative rounded-2xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className={cn(
              "absolute inset-0 bg-gradient-to-br",
              colors.gradient,
              "opacity-[0.06]"
            )} />
            <div className="absolute inset-0 bg-gradient-to-b from-light to-white" />
            <div className="absolute inset-0 rounded-2xl border border-border shadow-[0_8px_40px_rgba(0,0,0,0.06)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.025)_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <motion.div
                className={cn(
                  "w-20 h-20 rounded-2xl flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]",
                  colors.bg, colors.text
                )}
                animate={{ scale: [1, 1.05, 1], y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <DynamicIcon name={product.icon} size={36} strokeWidth={1.5} />
              </motion.div>
              <p className="text-text font-semibold font-display text-lg">
                {product.name} Product Demo
              </p>
              <p className="text-text-muted text-sm">
                Interactive preview coming soon
              </p>
            </div>

            {/* Browser chrome dots */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/40" />
              <div className="w-3 h-3 rounded-full bg-amber-400/40" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BOTTOM CTA                                                   */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="relative rounded-[2rem] overflow-hidden bg-dark px-8 py-16 sm:px-16 sm:py-20 text-center"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,98,254,0.2)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative z-10">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className={cn(
                  "inline-flex items-center justify-center w-16 h-16 rounded-2xl mx-auto",
                  "bg-white/10 text-white/80"
                )}>
                  <DynamicIcon name={product.icon} size={32} strokeWidth={1.5} />
                </div>
              </motion.div>

              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Ready to try {product.name}?
              </motion.h2>

              <motion.p
                className="text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Start your free trial today. No credit card required. Set up in under five minutes.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Button href="/contact" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="/contact" variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
