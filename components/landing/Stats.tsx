"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";

export function Stats() {
  const t = useTranslations("stats");

  const items = [
    {
      value: 23,
      unit: t("items.0.unit"),
      prefix: t("items.0.prefix"),
      label: t("items.0.label"),
    },
    {
      value: 38,
      unit: t("items.1.unit"),
      prefix: "",
      label: t("items.1.label"),
    },
    {
      value: 100,
      unit: t("items.2.unit"),
      prefix: "",
      label: t("items.2.label"),
    },
    {
      value: 4,
      unit: t("items.3.unit"),
      prefix: t("items.3.prefix"),
      label: t("items.3.label"),
    },
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="text-display-sm md:text-display font-bold text-center mb-16">
            {t("headline")}
          </h2>
        </ScrollReveal>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              className="text-center"
            >
              <div className="mb-3">
                <span className="text-white/70 text-xl">{item.prefix}</span>
                <AnimatedCounter
                  value={item.value}
                  suffix={item.unit}
                  className="text-5xl md:text-6xl font-bold"
                />
              </div>
              <p className="text-white/80 text-lg">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <ScrollReveal delay={0.4}>
          <p className="text-center text-white/50 text-sm mt-12">
            {t("disclaimer")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
