"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";
import { Factory, Car, Pill } from "lucide-react";

const icons = [Factory, Car, Pill];

export function UseCases() {
  const t = useTranslations("useCases");

  const industries = [
    { title: t("industries.0.title"), description: t("industries.0.description") },
    { title: t("industries.1.title"), description: t("industries.1.description") },
    { title: t("industries.2.title"), description: t("industries.2.description") },
  ];

  return (
    <section id="use-cases" className="section-padding bg-white">
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
          className="grid md:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="p-8 h-full text-center" variant="bordered">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {industry.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
