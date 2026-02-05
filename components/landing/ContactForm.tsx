"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslations, useLocale } from "next-intl";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      locale: locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="text-display-sm md:text-display font-bold text-center text-primary mb-6">
            {t("headline")}
          </h2>
        </ScrollReveal>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-surface rounded-2xl p-8 shadow-soft">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-success" />
                </div>
                <p className="text-lg font-medium text-primary">
                  {t("form.success")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border",
                      "bg-white focus:border-accent focus:ring-2 focus:ring-accent/20",
                      "transition-all duration-200 outline-none"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border",
                      "bg-white focus:border-accent focus:ring-2 focus:ring-accent/20",
                      "transition-all duration-200 outline-none"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border",
                      "bg-white focus:border-accent focus:ring-2 focus:ring-accent/20",
                      "transition-all duration-200 outline-none"
                    )}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-border",
                      "bg-white focus:border-accent focus:ring-2 focus:ring-accent/20",
                      "transition-all duration-200 outline-none resize-none"
                    )}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-error">
                    <AlertCircle className="w-5 h-5" />
                    <p className="text-sm">{t("form.error")}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t("form.submit")}
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
