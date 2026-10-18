"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ScrollText } from "lucide-react";

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-dark overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.06] border border-white/10 text-primary mx-auto mb-8"
          >
            <ScrollText size={36} strokeWidth={1.5} />
          </motion.div>
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6"
          >
            Legal
          </motion.span>
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight"
          >
            Terms of <span className="gradient-text">Service</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-border/60 p-8 md:p-12">

            <h2 className="text-xl font-bold font-display text-dark mb-3">1. Acceptance of Terms</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized by our legal team. By accessing or using AzphireHR, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">2. Use of Service</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. Details on permitted and prohibited uses of the AzphireHR platform, including account responsibilities and compliance requirements, will be described here.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">3. Intellectual Property</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. AzphireHR and its licensors retain all intellectual property rights to the service, including software, design, and content.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">4. Limitation of Liability</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. Details on the limitations of AzphireHR&apos;s liability and indemnification obligations will be documented here.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">5. Termination</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. Information on account termination, suspension, and the effects thereof will be included here.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">6. Contact Us</h2>
            <p className="text-text-muted leading-relaxed">
              For questions about these Terms of Service, please contact us at{" "}
              <a
                href="mailto:privacy@azphirehr.com"
                className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-medium"
              >
                privacy@azphirehr.com
              </a>
              .
            </p>

            <div className="mt-10 pt-8 border-t border-border/60">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors"
              >
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
