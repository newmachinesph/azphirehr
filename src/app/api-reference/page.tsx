"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";

export default function ApiReferencePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-dark overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/10 text-primary mx-auto mb-8"
          >
            <Code2 size={36} strokeWidth={1.5} />
          </motion.div>
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Coming Soon
          </motion.span>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6"
          >
            API Reference is on <span className="gradient-text">its way</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/75 max-w-xl mx-auto mb-10"
          >
            We&apos;re building something great here. Check back soon.
          </motion.p>
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-dark font-semibold font-display text-sm hover:bg-white/95 transition-colors shadow-lg"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
