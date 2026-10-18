"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity, Globe, Brain, Video, RefreshCw, Bell } from "lucide-react";

const services = [
  { name: "API", icon: Activity },
  { name: "Web App", icon: Globe },
  { name: "AI Processing", icon: Brain },
  { name: "Video Interviews", icon: Video },
  { name: "Data Sync", icon: RefreshCw },
  { name: "Notifications", icon: Bell },
];

export default function StatusPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-dark overflow-hidden">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/[0.06] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
          {/* Pulsing dot badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center mx-auto mb-8"
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-semibold tracking-wider">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              All Systems Operational
            </span>
          </motion.div>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-6"
          >
            System <span className="gradient-text">Status</span>
          </motion.h1>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-lg text-white/75 max-w-xl mx-auto mb-10"
          >
            All AzphireHR services are running normally.
          </motion.p>

          {/* Services list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.03] divide-y divide-white/[0.06] text-left overflow-hidden mb-10"
          >
            {services.map(({ name, icon: Icon }, i) => (
              <div
                key={name}
                className="flex items-center justify-between px-6 py-4"
              >
                <span className="flex items-center gap-3 text-sm font-medium text-white/80">
                  <Icon size={16} strokeWidth={1.8} className="text-white/40" />
                  {name}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  Operational
                </span>
              </div>
            ))}
          </motion.div>

          {/* Last checked */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-xs text-white/35 mb-8"
          >
            Last checked: March 2025
          </motion.p>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
