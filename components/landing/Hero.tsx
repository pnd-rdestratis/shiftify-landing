"use client";

import { Button } from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { DashboardPreview } from "./DashboardPreview";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface to-white -z-10" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F172A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-display-sm md:text-display lg:text-display-lg font-bold text-primary mb-6"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("subheadline")}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              {t("cta")}
            </Button>
          </motion.div>
        </div>

        {/* Hero Dashboard Screenshot */}
        <div className="mt-16 md:mt-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="screenshot-frame mx-auto max-w-5xl"
          >
            <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#E2E8F0]">
              <DashboardPreview />
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -left-20 top-1/3 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute -right-20 top-1/4 w-60 h-60 bg-success/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
