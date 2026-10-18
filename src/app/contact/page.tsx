"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  CalendarDays,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, faqItems } from "@/data/site";
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
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ------------------------------------------------------------------ */
/*  FAQ (inline)                                                       */
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
/*  Social icon map                                                    */
/* ------------------------------------------------------------------ */

const socialIcons = [
  { name: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
  { name: "Twitter", icon: Twitter, href: siteConfig.social.twitter },
  { name: "Facebook", icon: Facebook, href: siteConfig.social.facebook },
  { name: "Instagram", icon: Instagram, href: siteConfig.social.instagram },
];

/* ------------------------------------------------------------------ */
/*  Role options                                                       */
/* ------------------------------------------------------------------ */

const roleOptions = [
  "HR Manager",
  "Talent Acquisition Lead",
  "Recruiter",
  "CHRO / VP People",
  "Founder / CEO",
  "Engineering Manager",
  "Operations Manager",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Form submission logic would go here
  }

  const inputClasses =
    "w-full px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 text-base";

  return (
    <main className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
            >
              Get in Touch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-white"
            >
              Let&apos;s talk{" "}
              <span className="gradient-text">hiring</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed">
              Whether you want a demo, have a question, or just want to chat about
              AI hiring — we&apos;d love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form + Book Demo ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          >
            {/* ── Left: Contact Form ──────────────────────────── */}
            <motion.div variants={fadeUp}>
              <div className="bg-white rounded-2xl border border-border/60 p-8 lg:p-10 shadow-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h2 className="text-2xl font-bold font-display text-dark mb-2">
                  Send us a message
                </h2>
                <p className="text-text-muted mb-8">
                  Fill out the form below and our team will get back to you within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Juan Dela Cruz"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                        Work Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="juan@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your Company, Inc."
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-text mb-2">
                        Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={cn(inputClasses, !formData.role && "text-text-muted/60")}
                      >
                        <option value="" disabled>
                          Select your role
                        </option>
                        {roleOptions.map((role) => (
                          <option key={role} value={role}>
                            {role}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your hiring challenges..."
                      value={formData.message}
                      onChange={handleChange}
                      className={cn(inputClasses, "resize-none")}
                    />
                  </div>

                  <Button variant="primary" size="lg" type="submit" className="w-full">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* ── Right: Book Demo + Info ──────────────────────── */}
            <motion.div variants={fadeUp} className="flex flex-col gap-8">
              {/* Book a Demo card */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl border border-border/60 p-8 text-white shadow-[0_8px_40px_rgba(15,98,254,0.3)] hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-white/15 mb-5">
                  <CalendarDays className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-3">Book a Demo</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  See AzphireHR in action. Our team will walk you through the
                  platform and show you how AI can transform your hiring process.
                </p>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Contact info */}
              <div className="bg-white rounded-2xl border border-border/60 p-8 shadow-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold font-display text-dark mb-6">Get in touch</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">Office</p>
                      <p className="text-sm text-text-muted">{siteConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm font-semibold text-dark mb-4">Follow us</p>
                  <div className="flex gap-3">
                    {socialIcons.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="p-2.5 rounded-xl border border-border bg-light text-text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                      >
                        <s.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Map Placeholder ──────────────────────────────────── */}
      <section className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="h-64 md:h-80 bg-gradient-to-br from-dark via-dark-lighter to-dark flex items-center justify-center relative overflow-hidden"
        >
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] rounded-full bg-secondary/10 blur-[80px]" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="relative z-10 text-center">
            <MapPin className="w-10 h-10 text-white/80 mx-auto mb-3" />
            <p className="text-2xl sm:text-3xl font-bold font-display text-white">
              BGC, Taguig City
            </p>
            <p className="text-white/75 mt-1">Metro Manila, Philippines</p>
          </div>
        </motion.div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            eyebrow="FAQ"
            heading="Common questions"
            subtitle="Quick answers to the questions we hear most often."
          />
          <div className="mt-12">
            <FaqSection items={faqItems.slice(0, 3)} />
          </div>
        </div>
      </section>
    </main>
  );
}
