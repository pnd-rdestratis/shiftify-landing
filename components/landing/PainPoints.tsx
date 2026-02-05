"use client";

import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { staggerContainerVariants, fadeUpVariants } from "@/lib/animations";
import { FileX2, Clock, Database, ShieldAlert } from "lucide-react";

const icons = [FileX2, Clock, Database, ShieldAlert];

export function PainPoints() {
  const t = useTranslations("painPoints");

  const items = [
    { title: t("items.0.title"), description: t("items.0.description") },
    { title: t("items.1.title"), description: t("items.1.description") },
    { title: t("items.2.title"), description: t("items.2.description") },
    { title: t("items.3.title"), description: t("items.3.description") },
  ];

  return (
    <section className="section-padding bg-white">
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={fadeUpVariants}>
                <Card className="p-6 h-full" variant="bordered">
                  <div className="w-12 h-12 rounded-lg bg-error/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-error" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {item.description}
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
