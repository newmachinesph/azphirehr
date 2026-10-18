"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { navLinks } from "@/data/site";

/* ------------------------------------------------------------------ */
/*  Dynamic icon resolver                                              */
/* ------------------------------------------------------------------ */
function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}

/* Shared easing */
const ease = [0.23, 1, 0.32, 1] as const;
const easeMobile = [0.32, 0.72, 0, 1] as const;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */
interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChild[];
}

/* ------------------------------------------------------------------ */
/*  Mega-menu overlay (desktop)                                        */
/* ------------------------------------------------------------------ */
const megaMenuVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    filter: "blur(4px)",
    transition: { duration: 0.18, ease },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease },
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.98,
    filter: "blur(4px)",
    transition: { duration: 0.2, ease },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * i,
      duration: 0.3,
      ease,
    },
  }),
};

function MegaMenu({ items, onClose }: { items: NavChild[]; onClose: () => void }) {
  return (
    <motion.div
      variants={megaMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
      onMouseLeave={onClose}
    >
      <div className="w-[680px] rounded-2xl border border-border/60 bg-white shadow-2xl shadow-dark/5 p-2">

        <div className="grid grid-cols-2 gap-1">
          {items.map((child, i) => (
            <motion.div key={child.href} custom={i} variants={itemVariants} initial="hidden" animate="visible">
              <Link
                href={child.href}
                onClick={onClose}
                className="group flex items-start gap-4 rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-primary/[0.04]"
              >
                {/* icon circle */}
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <DynamicIcon name={child.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <span className="flex items-center gap-1.5 font-display text-sm font-semibold text-text group-hover:text-primary transition-colors duration-200">
                    {child.label}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  </span>
                  <p className="mt-0.5 text-xs leading-relaxed text-text-muted line-clamp-2">
                    {child.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile menu                                                        */
/* ------------------------------------------------------------------ */
const mobileMenuVariants = {
  hidden: { x: "100%", transition: { duration: 0.35, ease: easeMobile } },
  visible: { x: 0, transition: { duration: 0.4, ease: easeMobile } },
};

const mobileBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 * i + 0.15, duration: 0.35, ease },
  }),
};

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            variants={mobileBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* panel */}
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 z-50 flex h-full w-[85vw] max-w-md flex-col bg-white shadow-2xl"
          >
            {/* header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border/40">
              <Link href="/" onClick={onClose} className="flex items-center gap-0.5">
                <span className="font-display text-xl font-bold text-text">Azphire</span>
                <span className="font-display text-xl font-bold gradient-text">HR</span>
              </Link>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-light text-text-muted hover:text-text transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* links */}
            <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {navLinks.map((link: NavLink, i: number) => (
                <motion.div key={link.href} custom={i} variants={mobileLinkVariants} initial="hidden" animate="visible">
                  {link.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedMenu(expandedMenu === link.label ? null : link.label)
                        }
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-display text-base font-semibold text-text hover:bg-primary/[0.04] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`h-4 w-4 text-text-muted transition-transform duration-300 ${
                            expandedMenu === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedMenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [...ease] as [number, number, number, number] }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 border-l-2 border-primary/20 pb-2 space-y-1 ml-4">
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="group flex items-start gap-3 rounded-xl px-4 py-3 hover:bg-primary/[0.04] transition-colors"
                                >
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <DynamicIcon name={child.icon} className="h-4 w-4" />
                                  </span>
                                  <div>
                                    <span className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                                      {child.label}
                                    </span>
                                    <p className="text-xs text-text-muted leading-relaxed mt-0.5">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center rounded-xl px-4 py-3.5 font-display text-base font-semibold text-text hover:bg-primary/[0.04] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-border/40 px-6 py-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [pathname]);

  const handleMegaOpen = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMega(label);
  }, []);

  const handleMegaClose = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveMega(null), 120);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          scrolled
            ? "py-2.5 bg-white border-b border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.02)]"
            : "py-4 bg-gradient-to-b from-dark/50 via-dark/25 to-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* -------- Logo -------- */}
          <Link href="/" className="group relative flex items-center gap-0.5 z-10">
            <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-text group-hover:text-text" : "text-white group-hover:text-white"}`}>
              Azphire
            </span>
            <span className="font-display text-2xl font-bold tracking-tight gradient-text">
              HR
            </span>
            {/* hover glow */}
            <span className="pointer-events-none absolute -inset-3 rounded-xl bg-primary/5 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
          </Link>

          {/* -------- Desktop nav -------- */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link: NavLink) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && handleMegaOpen(link.label)}
                onMouseLeave={handleMegaClose}
              >
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                    scrolled
                      ? (pathname === link.href ? "text-primary" : "text-text-muted hover:text-text")
                      : (pathname === link.href ? "text-white" : "text-white/80 hover:text-white")
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        activeMega === link.label ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  )}
                  {/* hover underline */}
                  {!link.children && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </Link>

                {/* Mega menu */}
                <AnimatePresence>
                  {link.children && activeMega === link.label && (
                    <MegaMenu items={link.children} onClose={() => setActiveMega(null)} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* -------- Right side -------- */}
          <div className="flex items-center gap-3 z-10">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-2.5 font-display text-sm font-semibold text-white shadow-[0_4px_20px_rgba(15,98,254,0.35)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(15,98,254,0.45)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            {/* hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl lg:hidden transition-colors ${scrolled ? "bg-light/80 text-text-muted hover:text-text" : "bg-white/10 text-white/80 hover:text-white"}`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
