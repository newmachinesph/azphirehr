"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/site";
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
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ------------------------------------------------------------------ */
/*  Category gradients for image placeholders                          */
/* ------------------------------------------------------------------ */

const categoryGradients: Record<string, string> = {
  "Industry Report": "from-primary to-secondary",
  Guide: "from-secondary to-accent",
  Playbook: "from-accent to-primary",
  "Case Study": "from-primary/80 to-accent",
  Research: "from-secondary/80 to-primary",
};

function getGradient(category: string) {
  return categoryGradients[category] ?? "from-primary to-secondary";
}

/* ------------------------------------------------------------------ */
/*  Categories                                                         */
/* ------------------------------------------------------------------ */

const categories = ["All", "Guide", "Case Study", "Research", "Playbook", "Industry Report"];

/* ------------------------------------------------------------------ */
/*  Badge                                                              */
/* ------------------------------------------------------------------ */

function CategoryBadge({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "transition-all duration-200 rounded-full px-5 py-2 text-sm font-medium cursor-pointer",
        active
          ? "bg-primary text-white shadow-[0_2px_8px_rgba(15,98,254,0.3)]"
          : "bg-white border border-border text-text-muted hover:border-primary/30 hover:text-primary"
      )}
    >
      {label}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Blog Card                                                          */
/* ------------------------------------------------------------------ */

function BlogCard({
  post,
  featured = false,
}: {
  post: (typeof blogPosts)[0];
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      layout
      className={cn(
        "group flex flex-col rounded-2xl border border-border bg-white overflow-hidden hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 hover:border-primary/15 transition-all duration-300",
        featured && "md:flex-row md:col-span-full"
      )}
    >
      {/* Image placeholder */}
      <div
        className={cn(
          "relative overflow-hidden",
          featured
            ? "h-60 md:h-auto md:w-1/2"
            : "h-52"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br",
            getGradient(post.category)
          )}
        />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white/20 text-7xl font-bold font-display tracking-tighter">AZ</span>
        </div>
      </div>

      {/* Content */}
      <div className={cn("flex flex-col p-6", featured && "md:p-8 md:justify-center")}>
        <span
          className={cn(
            "inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-3",
            "bg-primary/10 text-primary"
          )}
        >
          {post.category}
        </span>

        <h3
          className={cn(
            "font-bold font-display text-dark leading-tight mb-2 hover:text-primary transition-colors",
            featured ? "text-2xl lg:text-3xl" : "text-lg"
          )}
        >
          {post.title}
        </h3>

        <p className={cn("leading-relaxed mb-4", featured ? "text-base text-text-muted" : "text-sm text-text-muted line-clamp-2")}>
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 text-xs text-text-muted mt-auto">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <main className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,98,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,98,254,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
            >
              Resources
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display leading-tight tracking-tight text-white"
            >
              Resources &{" "}
              <span className="gradient-text">Insights</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-xl text-lg sm:text-xl text-white/75 leading-relaxed">
              Guides, case studies, and expert advice for modern hiring.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Category Filter + Blog Grid ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <CategoryBadge
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </motion.div>

          {/* Blog grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={stagger}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filtered.map((post, i) => (
                <BlogCard key={post.slug} post={post} featured={i === 0 && activeCategory === "All"} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-muted py-20 text-lg"
            >
              No articles found in this category yet. Check back soon.
            </motion.p>
          )}
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-warm">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center flex flex-col items-center gap-6"
          >
            <motion.div variants={fadeUp} className="inline-flex p-4 rounded-2xl bg-primary/10">
              <Send className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-dark leading-tight"
            >
              Stay ahead of the curve
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-text-muted max-w-xl">
              Get the latest hiring insights, AI trends, and Philippine talent
              market updates delivered to your inbox every week.
            </motion.p>

            <motion.form
              variants={fadeUp}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-xl border border-border bg-white text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <Button variant="primary" size="lg" type="submit">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.form>

            <motion.p variants={fadeUp} className="text-xs text-text-muted">
              No spam, ever. Unsubscribe anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
