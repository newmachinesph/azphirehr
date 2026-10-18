"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Heart,
  Flag,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { DynamicPhilippinesMap } from "@/components/three/dynamic-imports";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: Cpu,
    title: "AI-First",
    description:
      "We build AI into the core of every product, not as an afterthought. Intelligent automation powers every step of the hiring journey.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description:
      "Technology should amplify human judgment, not replace it. Every feature is designed with recruiters and candidates in mind.",
    gradient: "from-secondary to-secondary/60",
  },
  {
    icon: Flag,
    title: "Filipino Pride",
    description:
      "Rooted in the Philippines, we celebrate Filipino talent and build tools that understand the local hiring landscape.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Globe,
    title: "Global Ambition",
    description:
      "Filipino professionals compete on the world stage. Our platform is built to connect local talent with global opportunity.",
    gradient: "from-primary to-secondary",
  },
];

const team = [
  { initials: "CE", name: "Chief Executive", role: "CEO & Co-Founder", color: "bg-gradient-to-br from-primary to-primary-dark" },
  { initials: "CT", name: "Chief Technology", role: "CTO & Co-Founder", color: "bg-gradient-to-br from-secondary to-primary" },
  { initials: "VE", name: "VP Engineering", role: "VP Engineering", color: "bg-gradient-to-br from-accent to-primary" },
  { initials: "HP", name: "Head of Product", role: "Head of Product", color: "bg-gradient-to-br from-primary to-secondary" },
  { initials: "AI", name: "Head of AI", role: "Head of AI Research", color: "bg-gradient-to-br from-secondary to-accent" },
  { initials: "DX", name: "Head of Design", role: "Head of Design", color: "bg-gradient-to-br from-accent to-secondary" },
];

const milestones = [
  { year: "2026", title: "Founded", description: "AzphireHR was founded with a mission to transform how companies discover, screen, and hire talent." },
  { year: "2026", title: "Product Launch", description: "Launched our beta platform, onboarding early adopters and processing thousands of AI-powered interviews." },
  { year: "2026", title: "Growing Fast", description: "Expanding our platform capabilities and building toward a Southeast Asian footprint." },
];

const partners = ["Strategic Partner", "Technology Partner", "Investment Partner", "Innovation Partner"];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 lg:py-44 bg-dark overflow-hidden">
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
            >
              Our Story
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-white"
            >
              Born in the Philippines.{" "}
              <span className="gradient-text">Built for the world.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg sm:text-xl text-white/75 leading-relaxed"
            >
              AzphireHR is the Philippines&apos; first AI-native hiring platform.
              We combine talent intelligence, AI interviews, skills assessment,
              and talent CRM so every company — from startups to enterprises —
              can hire smarter, faster, and fairer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Philippines Map + Story ──────────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Map */}
            <motion.div
              variants={fadeUp}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-dark/5 border border-border"
            >
              <DynamicPhilippinesMap />
            </motion.div>

            {/* Story */}
            <div className="flex flex-col gap-6">
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent/10 text-cyan-700 border border-accent/20"
              >
                Why We Exist
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-tight tracking-tight text-dark"
              >
                Filipino talent deserves{" "}
                <span className="gradient-text">world-class hiring tools.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-text-muted leading-relaxed">
                We started AzphireHR because Filipino talent deserves world-class
                hiring tools. The Philippines produces some of the most dedicated,
                skilled, and English-fluent professionals in the world — yet
                recruiters still rely on outdated job boards and manual screening.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-text-muted leading-relaxed">
                Our AI-native platform was designed from day one for the
                Philippine hiring landscape: understanding local roles, salary
                benchmarks, regional talent pools, and the unique needs of
                industries from BPO to tech startups.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values Grid ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Values"
            heading="What drives everything we build"
            subtitle="Four principles that guide every product decision, every hire, and every line of code."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                className="group relative p-8 rounded-2xl border border-border bg-white hover:border-primary/20 hover:shadow-[0_8px_40px_rgba(15,98,254,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${v.gradient} text-white mb-5`}
                >
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-dark mb-2">{v.title}</h3>
                <p className="text-text-muted leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Team"
            heading="The humans behind the AI"
            subtitle="A small but mighty founding team of engineers, designers, and hiring experts — and we're growing. Join us."
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center gap-4 group"
              >
                <div
                  className={`w-24 h-24 lg:w-28 lg:h-28 rounded-full ${member.color} flex items-center justify-center text-white text-2xl lg:text-3xl font-bold font-display shadow-lg group-hover:scale-105 transition-transform duration-300`}
                >
                  {member.initials}
                </div>
                <div>
                  <p className="text-base font-semibold font-display text-dark">{member.role}</p>
                  <p className="text-xs text-text-muted mt-0.5">Founding Team</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            eyebrow="Milestones"
            heading="Our journey so far"
            subtitle="We're just getting started — here's where we've been and where we're headed."
          />

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-16 relative"
          >
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"
            />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: i * 0.15 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg z-10"
                />

                {/* Content */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary mb-3">
                    {m.year}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-dark mb-2">{m.title}</h3>
                  <p className="text-text-muted leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Partners / Backed By ─────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
        {/* Dark section depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/60">
              Partners & Supporters
            </span>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
          >
            {partners.map((name, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="px-6 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300"
              >
                <span className="text-lg lg:text-xl font-display font-bold text-white/75 hover:text-white transition-colors duration-300">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
