"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    {
      number: "1",
      title: t("steps.0.title"),
      description: t("steps.0.description"),
    },
    {
      number: "2",
      title: t("steps.1.title"),
      description: t("steps.1.description"),
    },
    {
      number: "3",
      title: t("steps.2.title"),
      description: t("steps.2.description"),
    },
  ];

  return (
    <section className="section-padding bg-surface">
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
          className="max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
              )}

              {/* Number circle */}
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 font-bold text-lg z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
