"use client";

import { Logo } from "@/components/Logo";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Logo variant="white" size="md" className="mb-3" />
            <p className="text-white/70 text-sm max-w-sm">{t("tagline")}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a
              href="#contact"
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("links.contact")}
            </a>
            <a
              href="https://www.pandata.de/imprint-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("links.imprint")}
            </a>
            <a
              href="https://www.pandata.de/imprint-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              {t("links.privacy")}
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <p className="text-white/50 text-sm text-center">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
