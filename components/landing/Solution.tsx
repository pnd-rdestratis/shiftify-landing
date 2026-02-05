"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";
import { Tablet, Plug, BarChart3 } from "lucide-react";

const icons = [Tablet, Plug, BarChart3];

function ScreenPreview({ type }: { type: "tablet" | "integration" | "analytics" }) {
  if (type === "tablet") {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-4 flex flex-col">
        <div className="bg-white rounded-lg p-3 mb-3 border border-[#E2E8F0] shadow-sm">
          <div className="h-2 w-24 bg-[#E2E8F0] rounded mb-2" />
          <div className="h-10 bg-[#F8FAFC] rounded border border-[#E2E8F0]" />
        </div>
        <div className="flex gap-2 mb-3">
          {["#10B981", "#F59E0B", "#64748B"].map((color, i) => (
            <div key={i} className={`flex-1 bg-white rounded-lg p-3 text-center border-2 ${i === 0 ? 'border-[#10B981]' : 'border-[#E2E8F0]'}`}>
              <div className="w-8 h-8 rounded-full mx-auto mb-2" style={{ backgroundColor: `${color}15` }} />
              <div className="h-2 w-12 bg-[#E2E8F0] rounded mx-auto" />
            </div>
          ))}
        </div>
        <div className="mt-auto bg-[#3B82F6] rounded-lg p-3 text-center shadow-sm">
          <div className="h-3 w-20 bg-white/40 rounded mx-auto" />
        </div>
      </div>
    );
  }

  if (type === "integration") {
    return (
      <div className="w-full h-full bg-[#F8FAFC] p-4 flex items-center justify-center">
        <div className="flex items-center gap-6">
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-8 bg-white rounded-lg border border-[#E2E8F0] shadow-sm" />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <div className="w-1 h-8 bg-[#E2E8F0]" />
            <div className="w-14 h-14 rounded-xl bg-[#3B82F6] flex items-center justify-center shadow-md">
              <div className="w-7 h-7 bg-white/30 rounded" />
            </div>
            <div className="w-1 h-8 bg-[#E2E8F0]" />
          </div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-16 h-8 bg-white rounded-lg border border-[#E2E8F0] shadow-sm" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#F8FAFC] p-4">
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg p-3 border border-[#E2E8F0] shadow-sm">
            <div className="h-2 w-10 bg-[#E2E8F0] rounded mb-2" />
            <div className="h-5 w-14 bg-[#10B981]/20 rounded text-[#10B981]" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-3 border border-[#E2E8F0] shadow-sm h-24">
        <svg viewBox="0 0 100 50" className="w-full h-full">
          <defs>
            <linearGradient id="areaGradSol" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 L20,35 L40,38 L60,28 L80,22 L100,18 L100,50 L0,50 Z" fill="url(#areaGradSol)" />
          <path d="M0,40 L20,35 L40,38 L60,28 L80,22 L100,18" fill="none" stroke="#10B981" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

export function Solution() {
  const t = useTranslations("solution");

  const pillars = [
    { title: t("pillars.0.title"), description: t("pillars.0.description"), preview: "tablet" as const },
    { title: t("pillars.1.title"), description: t("pillars.1.description"), preview: "integration" as const },
    { title: t("pillars.2.title"), description: t("pillars.2.description"), preview: "analytics" as const },
  ];

  return (
    <section id="features" className="section-padding bg-surface">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="text-display-sm md:text-display font-bold text-center text-primary mb-16">
            {t("headline")}
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <div className="rounded-xl overflow-hidden shadow-card border border-[#E2E8F0]">
                  <div className="aspect-[4/3]">
                    <ScreenPreview type={pillar.preview} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
