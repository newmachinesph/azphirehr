"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/data/site";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const footerLinks = {
  Product: [
    { label: "TalentSearch AI", href: "/products/talentsearch" },
    { label: "SmartScreen", href: "/products/smartscreen" },
    { label: "PipelineCRM", href: "/products/pipelinecrm" },
    { label: "SkillAssess", href: "/products/skillassess" },
    { label: "DiversityLens", href: "/products/diversitylens" },
    { label: "InsightHub", href: "/products/insighthub" },
  ],
  Solutions: [
    { label: "For SMEs & Startups", href: "/solutions/sme" },
    { label: "For BPO & Contact Centers", href: "/solutions/bpo" },
    { label: "For Tech Companies", href: "/solutions/tech" },
    { label: "For Global Teams", href: "/solutions/global" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Press Kit", href: "/press" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "API Reference", href: "/api-reference" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Status", href: "/status" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "X (Twitter)" },
  { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */
const ease = [0.23, 1, 0.32, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

/* ------------------------------------------------------------------ */
/*  Footer component                                                   */
/* ------------------------------------------------------------------ */
export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-80 w-80 rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-secondary/[0.05] blur-[100px]" />
        {/* Grid pattern for texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================ TOP SECTION ================ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-10 border-b border-white/[0.06] py-16 lg:grid-cols-2 lg:items-center"
        >
          {/* Left: Logo + tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-0.5">
              <span className="font-display text-3xl font-bold text-white">
                Azphire
              </span>
              <span className="font-display text-3xl font-bold gradient-text">
                HR
              </span>
            </Link>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
            {/* contact info */}
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-white/80 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 text-primary/60" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="group inline-flex items-center gap-2.5 text-sm text-white/60 hover:text-white/80 transition-colors duration-200"
              >
                <Phone className="h-4 w-4 text-primary/60" />
                {siteConfig.phone}
              </a>
              <span className="inline-flex items-center gap-2.5 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-primary/60" />
                {siteConfig.address}
              </span>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="lg:justify-self-end lg:max-w-md w-full">
            <h3 className="font-display text-lg font-semibold text-white">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Get the latest on AI hiring, product updates, and Philippine talent
              market insights.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/[0.08] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-all duration-300 focus:border-primary/40 focus:bg-white/[0.08] focus:ring-2 focus:ring-primary/10"
                />
              </div>
              <button
                type="submit"
                className="group flex shrink-0 items-center gap-2 rounded-xl bg-primary hover:bg-primary/90 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>

        {/* ================ MIDDLE SECTION — Link grid ================ */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-8 border-b border-white/[0.06] py-14 sm:grid-cols-4"
        >
          {Object.entries(footerLinks).map(([heading, links]) => (
            <motion.div key={heading} variants={linkVariants}>
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                {heading}
              </h4>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center text-sm text-white/60 transition-colors duration-200 hover:text-white/90"
                    >
                      <span className="mr-2 h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ================ BOTTOM SECTION ================ */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row"
        >
          {/* Copyright */}
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-white/50 transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:-translate-y-0.5"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
