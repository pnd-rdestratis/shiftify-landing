"use client";

import { Logo } from "@/components/Logo";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="white" size="lg" className="mb-4" />
            <p className="text-white/70 max-w-sm">{t("tagline")}</p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("links.product")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.features")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.pricing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.integrations")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("links.company")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.about")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.careers")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("links.legal")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.imprint")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.privacy")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("links.terms")}
                </a>
              </li>
            </ul>
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
