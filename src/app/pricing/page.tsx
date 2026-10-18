"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans, faqItems } from "@/data/site";
import { cn } from "@/lib/utils";

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
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ------------------------------------------------------------------ */
/*  Feature comparison data                                            */
/* ------------------------------------------------------------------ */

const comparisonFeatures = [
  { feature: "Active Job Posts", starter: "3", growth: "Unlimited", enterprise: "Unlimited" },
  { feature: "AI Searches / Month", starter: "50", growth: "500", enterprise: "Unlimited" },
  { feature: "Video Interviews", starter: "Basic", growth: "Advanced + AI Scoring", enterprise: "Custom AI Models" },
  { feature: "PipelineCRM", starter: false, growth: true, enterprise: true },
  { feature: "Outreach Sequencing", starter: false, growth: true, enterprise: true },
  { feature: "SkillAssess Templates", starter: false, growth: "500+", enterprise: "Custom + 500+" },
  { feature: "DiversityLens", starter: false, growth: true, enterprise: true },
  { feature: "InsightHub Analytics", starter: "Basic", growth: "Full", enterprise: "Predictive AI" },
  { feature: "Team Members", starter: "5", growth: "25", enterprise: "Unlimited" },
  { feature: "SSO & Advanced Security", starter: false, growth: false, enterprise: true },
  { feature: "Custom Integrations", starter: false, growth: false, enterprise: true },
  { feature: "Dedicated Success Manager", starter: false, growth: false, enterprise: true },
  { feature: "SLA Guarantee", starter: false, growth: false, enterprise: true },
  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "24/7 Dedicated" },
];

/* ------------------------------------------------------------------ */
/*  FAQ Accordion (inline, since shared component may not exist yet)   */
/* ------------------------------------------------------------------ */

function FaqSection({ items }: { items: typeof faqItems }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-4"
    >
      {items.map((item) => (
        <motion.details
          key={item.question}
          variants={fadeUp}
          className="group rounded-2xl border border-border bg-white overflow-hidden"
        >
          <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-lg font-semibold font-display text-dark hover:text-primary transition-colors list-none">
            {item.question}
            <span className="ml-4 flex-shrink-0 text-text-muted group-open:rotate-45 transition-transform duration-300 text-xl">
              +
            </span>
          </summary>
          <div className="px-6 pb-5 text-text-muted leading-relaxed">{item.answer}</div>
        </motion.details>
      ))}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cell renderer for comparison table                                 */
/* ------------------------------------------------------------------ */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-text-muted/30 mx-auto" />;
  return <span className="text-sm text-text font-medium">{value}</span>;
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  return (
    <main className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
            >
              Pricing
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-white"
            >
              Simple, <span className="gradient-text">transparent</span> pricing
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed">
              Start free. Scale as you grow. No hidden fees, no surprises.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                transition={{ delay: plan.highlighted ? 0.2 : 0 }}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 lg:p-10 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary/30 bg-white shadow-[0_8px_60px_rgba(15,98,254,0.15),0_2px_12px_rgba(0,0,0,0.04)] scale-[1.03] z-10"
                    : "border-border bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-primary/15 hover:-translate-y-1"
                )}
              >
                {/* Most Popular badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold font-display text-dark mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl lg:text-5xl font-bold font-display text-dark">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-text-muted text-lg">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-text-muted">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  href={plan.name === "Enterprise" ? "/contact" : "/contact"}
                  variant={plan.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Feature Comparison Table ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            eyebrow="Compare Plans"
            heading="Everything you get with each plan"
            subtitle="A detailed feature-by-feature comparison to help you choose the right plan."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mt-16 overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 pr-6 text-sm font-semibold text-text-muted uppercase tracking-wider">
                    Feature
                  </th>
                  {["Starter", "Growth", "Enterprise"].map((name) => (
                    <th
                      key={name}
                      className={cn(
                        "py-4 px-4 text-center text-sm font-bold font-display uppercase tracking-wider",
                        name === "Growth" ? "text-primary" : "text-dark"
                      )}
                    >
                      {name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-border transition-colors duration-200 hover:bg-primary/[0.02]",
                      i % 2 === 0 ? "bg-light/50" : "bg-white"
                    )}
                  >
                    <td className="py-4 pr-6 text-sm font-medium text-text">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      <CellValue value={row.starter} />
                    </td>
                    <td className="py-4 px-4 text-center bg-primary/[0.03]">
                      <CellValue value={row.growth} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CellValue value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            eyebrow="FAQ"
            heading="Frequently asked questions"
            subtitle="Everything you need to know about AzphireHR pricing and features."
          />
          <div className="mt-12">
            <FaqSection items={faqItems} />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 bg-dark overflow-hidden">
        {/* Dark section depth */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex p-4 rounded-2xl bg-primary/10">
              <MessageCircle className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white leading-tight"
            >
              Still have questions?{" "}
              <span className="gradient-text">Talk to our team.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-white/75 max-w-xl">
              Our team is ready to help you find the perfect plan for your hiring needs.
              Book a free consultation today.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
