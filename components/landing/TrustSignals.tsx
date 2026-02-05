"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";
import { Shield, Flag, Lock } from "lucide-react";

const badges = [
  { key: "germany", icon: Flag },
  { key: "gdpr", icon: Lock },
  { key: "iso", icon: Shield },
];

const placeholderLogos = [
  "Industrial Co.",
  "MetalWorks AG",
  "AutoParts GmbH",
  "FoodSafe Inc.",
  "PharmaTech",
  "Precision Mfg.",
];

export function TrustSignals() {
  const t = useTranslations("trust");

  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <ScrollReveal>
          <p className="text-center text-text-muted mb-8">{t("clients")}</p>
        </ScrollReveal>

        {/* Client logos placeholder */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16"
        >
          {placeholderLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="px-6 py-3 bg-white rounded-lg shadow-soft"
            >
              <span className="text-text-muted font-medium">{logo}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.key}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft border border-border"
                >
                  <Icon className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-primary">
                    {t(`badges.${badge.key}`)}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
