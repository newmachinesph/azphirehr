"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
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
            <ShieldCheck size={36} strokeWidth={1.5} />
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
            Privacy <span className="gradient-text">Policy</span>
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-light py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl border border-border/60 p-8 md:p-12">

            <h2 className="text-xl font-bold font-display text-dark mb-3">1. Information We Collect</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized by our legal team. We are committed to transparency about the personal data we collect, including account information, usage data, and any data you choose to share with us through our platform.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">2. How We Use Your Information</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. AzphireHR uses your information to provide, improve, and personalize our services, communicate with you, and ensure the security of our platform.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">3. Data Sharing & Third Parties</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. We do not sell your personal information. Details on any third-party service providers we work with will be documented here.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">4. Data Retention</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. Information on how long we retain your data and the criteria used to determine retention periods will be described here.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">5. Your Rights</h2>
            <p className="text-text-muted leading-relaxed mb-8">
              This section is currently being finalized. Depending on your location, you may have rights including access, correction, deletion, and portability of your personal data.
            </p>

            <h2 className="text-xl font-bold font-display text-dark mb-3">6. Contact Us</h2>
            <p className="text-text-muted leading-relaxed">
              For privacy-related questions or to exercise your rights, please contact us at{" "}
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
