"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  MessageSquareText,
  Brain,
  UserCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BentoCard } from "@/components/ui/bento-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { LogoTicker } from "@/components/ui/logo-ticker";
import { DynamicHeroScene } from "@/components/three/dynamic-imports";

import {
  stats,
  testimonials,
  products,
  trustedLogos,
  siteConfig,
} from "@/data/site";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: EASE,
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerChild = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE },
  },
};

/* ------------------------------------------------------------------ */
/*  Helpers: parse stats strings into numbers + suffixes               */
/* ------------------------------------------------------------------ */

function parseStatValue(raw: string): {
  numeric: number;
  suffix: string;
  prefix: string;
} {
  const match = raw.match(/^([<>$#]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { numeric: 0, suffix: raw, prefix: "" };
  return {
    prefix: match[1] || "",
    numeric: parseFloat(match[2]),
    suffix: match[3] || "",
  };
}

/* ------------------------------------------------------------------ */
/*  How-it-works step data                                             */
/* ------------------------------------------------------------------ */

const howItWorksSteps = [
  {
    number: "01",
    title: "Describe",
    description:
      "Tell us who you need in plain English. No filters, no Boolean strings — just describe your ideal candidate.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "AI Matches",
    description:
      "Our AI searches 800M+ profiles, scores candidates on fit, and surfaces the best matches in seconds.",
    icon: Brain,
  },
  {
    number: "03",
    title: "Hire",
    description:
      "Review AI-scored shortlists, run video interviews, and make confident, data-backed hiring decisions.",
    icon: UserCheck,
  },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
        {/* Ambient background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[140px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left — copy */}
            <motion.div
              className="flex flex-col gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Eyebrow badge */}
              <motion.div variants={staggerChild}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-primary backdrop-blur-sm">
                  <Sparkles size={14} className="text-accent" />
                  AI-Native Hiring Platform
                </span>
              </motion.div>

              {/* Headline */}
              <div className="flex flex-col gap-1">
                {["Hire smarter.", "Hire faster.", "Hire human."].map(
                  (line, i) => (
                    <motion.h1
                      key={line}
                      custom={i + 1}
                      variants={fadeUp}
                      initial="hidden"
                      animate="visible"
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold font-display leading-[1.05] tracking-tight text-white"
                    >
                      {i === 2 ? (
                        <>
                          Hire{" "}
                          <span className="gradient-text">human.</span>
                        </>
                      ) : (
                        line
                      )}
                    </motion.h1>
                  )
                )}
              </div>

              {/* Subtitle */}
              <motion.p
                variants={staggerChild}
                className="max-w-lg text-lg sm:text-xl leading-relaxed text-white/75"
              >
                {siteConfig.description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={staggerChild}
                className="flex flex-wrap gap-4"
              >
                <Button href="/pricing" size="lg">
                  Start Free
                  <ArrowRight size={18} />
                </Button>
                <Button href="/demo" variant="secondary" size="lg" className="border-white/20 text-white hover:border-white/40 hover:bg-white/5">
                  <Play size={16} className="fill-current" />
                  Watch Demo
                </Button>
              </motion.div>

              {/* Social proof micro-stat */}
              <motion.div
                variants={staggerChild}
                className="flex items-center gap-3 pt-2"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      className="w-8 h-8 rounded-full border-2 border-dark bg-gradient-to-br from-primary/60 to-secondary/60 flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {String.fromCharCode(64 + n)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/75">
                  <span className="font-semibold text-white/90">200+</span>{" "}
                  companies already hiring smarter
                </p>
              </motion.div>
            </motion.div>

            {/* Right — Three.js scene */}
            <motion.div
              className="relative h-[400px] sm:h-[500px] lg:h-[600px]"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              <DynamicHeroScene />
            </motion.div>
          </div>
        </div>

        {/* Bottom fade to light */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent" />
      </section>

      {/* ============================================================ */}
      {/*  TRUSTED BY                                                   */}
      {/* ============================================================ */}
      <section className="relative bg-light py-16 sm:py-20 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            className="text-center text-sm font-semibold tracking-[0.2em] uppercase text-text-muted/70 mb-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by forward-thinking teams worldwide
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LogoTicker logos={trustedLogos} speed={35} />
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PLATFORM OVERVIEW — Bento Grid                               */}
      {/* ============================================================ */}
      <section className="relative bg-light py-24 sm:py-32">
        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-primary/[0.03] blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform"
            heading="One platform. Six superpowers."
            gradientText="Six superpowers."
            subtitle="Everything you need to find, evaluate, and hire the best talent — powered by AI, designed for humans."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, i) => {
              // First and last cards span 2 columns on desktop for visual interest
              const isWide = i === 0 || i === products.length - 1;
              return (
                <BentoCard
                  key={product.slug}
                  icon={product.icon}
                  title={product.name}
                  description={product.description}
                  index={i}
                  className={
                    isWide ? "sm:col-span-2 lg:col-span-2" : ""
                  }
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS                                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-primary via-[#4338CA] to-secondary">
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map((stat, i) => {
              const parsed = parseStatValue(stat.value);
              return (
                <motion.div
                  key={stat.label}
                  variants={staggerChild}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <AnimatedCounter
                    value={parsed.numeric}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                    className="text-white"
                  />
                  <span className="text-sm sm:text-base font-medium text-white/85">
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-light py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            heading="Three steps to your next great hire."
            gradientText="next great hire."
            subtitle="No complex setup. No learning curve. Just describe, match, and hire."
          />

          <motion.div
            className="relative mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {howItWorksSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={staggerChild}
                  className="relative flex flex-col items-center text-center lg:px-8"
                >
                  {/* Number + icon circle */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-28 h-28 rounded-2xl bg-white border border-border shadow-[0_4px_24px_rgba(15,98,254,0.08)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(15,98,254,0.15)] hover:-translate-y-1">
                      <Icon size={36} strokeWidth={1.5} className="text-primary" />
                    </div>
                    <span className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xs font-bold shadow-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Copy */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TESTIMONIALS                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-warm py-24 sm:py-32 overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/[0.04] blur-[60px]" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-secondary/[0.04] blur-[60px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            heading="Don't take our word for it."
            gradientText="our word"
            subtitle="Hear from the teams who transformed their hiring with AzphireHR."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.author}
                quote={t.quote}
                authorName={t.author}
                authorTitle={t.title}
                avatarUrl={t.avatar}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CTA BANNER                                                   */}
      {/* ============================================================ */}
      <section className="relative bg-light py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-2xl animated-gradient px-8 py-16 sm:px-16 sm:py-24 text-center"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Noise texture overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

            {/* Floating decorative circles */}
            <div className="pointer-events-none absolute top-8 left-8 w-20 h-20 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute bottom-8 right-8 w-32 h-32 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-16 w-4 h-4 rounded-full bg-white/20" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight tracking-tight max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                Ready to transform your hiring?
              </motion.h2>

              <motion.p
                className="text-lg text-white/85 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Join 200+ Philippine companies using AI to hire smarter, faster,
                and more fairly. Start free today.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <Button
                  href="/pricing"
                  size="lg"
                  className="bg-white text-dark hover:bg-white/95 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] from-transparent to-transparent"
                >
                  Start Free
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/40 text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
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
