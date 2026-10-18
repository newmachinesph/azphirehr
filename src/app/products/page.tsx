"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { icons, type LucideProps } from "lucide-react";
import { Check, X, Minus, ArrowRight, Sparkles } from "lucide-react";
import { products, integrations } from "@/data/site";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = icons[name as keyof typeof icons];
  if (!Icon) return null;
  return <Icon {...props} />;
}

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string; gradient: string }> = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "rgba(15,98,254,0.15)",
    gradient: "from-primary to-primary/70",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "rgba(124,58,237,0.15)",
    gradient: "from-secondary to-secondary/70",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-cyan-700",
    glow: "rgba(6,182,212,0.15)",
    gradient: "from-accent to-accent/70",
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
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.06, ease: EASE },
  }),
};

/* ------------------------------------------------------------------ */
/*  Product Card Sizes for Bento Grid                                  */
/* ------------------------------------------------------------------ */

const cardSizes = [
  "md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-2",   // TalentSearch - large on lg
  "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2",   // SmartScreen - tall on lg
  "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",   // PipelineCRM - small
  "md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",   // SkillAssess - wide
  "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",   // DiversityLens - small
  "md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",   // InsightHub - small
];

/* ------------------------------------------------------------------ */
/*  Comparison Data                                                    */
/* ------------------------------------------------------------------ */

type ComparisonStatus = "check" | "x" | "partial";

interface ComparisonRow {
  feature: string;
  azphire: ComparisonStatus;
  traditional: ComparisonStatus;
  otherAI: ComparisonStatus;
}

const comparisonData: ComparisonRow[] = [
  { feature: "AI-Powered Talent Search (800M+ profiles)", azphire: "check", traditional: "x", otherAI: "partial" },
  { feature: "AI Video Interviews with Personality Scoring", azphire: "check", traditional: "x", otherAI: "partial" },
  { feature: "Built-in Talent CRM & Outreach Sequencing", azphire: "check", traditional: "partial", otherAI: "x" },
  { feature: "Skill Assessments with AI Gap Analysis", azphire: "check", traditional: "x", otherAI: "partial" },
  { feature: "Diversity Analytics & Bias Detection", azphire: "check", traditional: "x", otherAI: "x" },
  { feature: "Philippine Labor Law Compliance", azphire: "check", traditional: "partial", otherAI: "x" },
  { feature: "Unified Platform (no tool-switching)", azphire: "check", traditional: "x", otherAI: "partial" },
  { feature: "Free tier with generous limits", azphire: "check", traditional: "x", otherAI: "x" },
];

function StatusIcon({ status }: { status: ComparisonStatus }) {
  if (status === "check") return <Check className="w-5 h-5 text-emerald-500" strokeWidth={3} />;
  if (status === "x") return <X className="w-5 h-5 text-red-400" strokeWidth={3} />;
  return <Minus className="w-5 h-5 text-amber-400" strokeWidth={2.5} />;
}

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */

export default function ProductsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(15,98,254,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-8">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              6 Products. One Platform.
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.08] tracking-tight text-dark mb-6"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            The{" "}
            <span className="gradient-text">AzphireHR</span>
            <br />
            Platform
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            A unified AI hiring ecosystem that replaces your sourcing tools, screening software, CRM, assessments, diversity analytics, and hiring dashboards -- all in one beautiful experience.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button href="/contact" size="lg">
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              View Pricing
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  PRODUCT ECOSYSTEM (BENTO GRID)                               */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Product Ecosystem"
            heading="Everything you need to hire smarter"
            gradientText="hire smarter"
            subtitle="Six AI-powered products working together as one unified platform. No more juggling tools."
          />

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(200px,auto)]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {products.map((product, i) => {
              const colors = colorMap[product.color] || colorMap.primary;
              return (
                <motion.div
                  key={product.slug}
                  custom={i}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 20px 60px ${colors.glow}`,
                    transition: { duration: 0.3 },
                  }}
                  className={cn(
                    "group relative flex flex-col justify-between p-8 rounded-2xl",
                    "bg-white border border-border",
                    "transition-colors duration-300",
                    "hover:border-transparent cursor-pointer overflow-hidden",
                    cardSizes[i]
                  )}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      "bg-gradient-to-br",
                      colors.gradient,
                      "pointer-events-none"
                    )}
                    style={{ opacity: 0 }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.97] to-white/[0.92] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={cn(
                      "inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5",
                      "bg-gradient-to-br",
                      colors.bg,
                      colors.text,
                      "transition-transform duration-300 group-hover:scale-110"
                    )}>
                      <DynamicIcon name={product.icon} size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-display text-dark mb-3 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-base text-text-muted leading-relaxed mb-6 line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className={cn(
                      "relative z-10 inline-flex items-center gap-2 text-sm font-semibold",
                      colors.text,
                      "group/link"
                    )}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>

                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={cn("w-1.5 h-1.5 rounded-full", colors.bg)} />
                    <div className={cn("w-1 h-1 rounded-full", colors.bg)} />
                    <div className={cn("w-0.5 h-0.5 rounded-full", colors.bg)} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMPARISON SECTION                                           */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-light to-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="Why AzphireHR"
            heading="AzphireHR vs. the rest"
            gradientText="vs. the rest"
            subtitle="Stop stitching together five different tools. Get everything in one AI-native platform built for Philippine hiring."
          />

          <motion.div
            className="mt-16 rounded-2xl border border-border bg-white overflow-hidden shadow-[0_4px_40px_rgba(0,0,0,0.04)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_100px_100px_100px] sm:grid-cols-[1fr_140px_140px_140px] border-b border-border">
              <div className="p-5 sm:p-6 font-semibold text-sm text-text-muted uppercase tracking-wider">
                Feature
              </div>
              <div className="p-5 sm:p-6 text-center">
                <span className="font-bold text-sm gradient-text">AzphireHR</span>
              </div>
              <div className="p-5 sm:p-6 text-center font-semibold text-sm text-text-muted">
                Traditional
              </div>
              <div className="p-5 sm:p-6 text-center font-semibold text-sm text-text-muted">
                Other AI
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, i) => (
              <motion.div
                key={row.feature}
                className={cn(
                  "grid grid-cols-[1fr_100px_100px_100px] sm:grid-cols-[1fr_140px_140px_140px]",
                  i !== comparisonData.length - 1 && "border-b border-border/60",
                  "hover:bg-primary/[0.02] transition-colors duration-200"
                )}
                custom={i}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
              >
                <div className="p-4 sm:p-5 text-sm sm:text-base text-text leading-snug flex items-center">
                  {row.feature}
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <StatusIcon status={row.azphire} />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <StatusIcon status={row.traditional} />
                </div>
                <div className="p-4 sm:p-5 flex items-center justify-center">
                  <StatusIcon status={row.otherAI} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  INTEGRATIONS                                                 */}
      {/* ============================================================ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="Integrations"
            heading="Connects with your stack"
            gradientText="your stack"
            subtitle="AzphireHR plugs into the tools you already use -- job boards, communication platforms, HRIS, and payroll."
          />

          <motion.div
            className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                custom={i}
                variants={scaleIn}
                whileHover={{ scale: 1.08, y: -2 }}
                className={cn(
                  "px-5 py-2.5 rounded-full border border-border bg-white",
                  "text-sm font-medium text-text",
                  "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
                  "hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(15,98,254,0.08)]",
                  "transition-all duration-300 cursor-default"
                )}
              >
                {name}
              </motion.div>
            ))}
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
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,98,254,0.2)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Floating orbs */}
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
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white mb-5 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                See it in action
              </motion.h2>

              <motion.p
                className="text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Book a personalized demo and discover how AzphireHR can transform your hiring process in minutes.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <Button href="/contact" size="lg">
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button href="/pricing" variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/10">
                  See Pricing
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
