"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQItem & { isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={cn(
        "border border-border rounded-xl overflow-hidden transition-colors duration-300",
        isOpen && "border-primary/25 bg-white shadow-sm"
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center justify-between w-full gap-4 p-5 sm:p-6",
          "text-left cursor-pointer",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          "transition-colors duration-200",
          isOpen ? "bg-white" : "bg-light hover:bg-white"
        )}
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-base sm:text-lg font-semibold font-display leading-snug pr-2 transition-colors duration-200",
          isOpen ? "text-primary" : "text-dark"
        )}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cn(
            "flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg",
            "transition-colors duration-200",
            isOpen
              ? "bg-primary text-white"
              : "bg-primary/10 text-primary"
          )}
        >
          <Plus size={18} strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pt-0">
              <p className="text-text-muted leading-relaxed text-sm pb-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          {...item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
