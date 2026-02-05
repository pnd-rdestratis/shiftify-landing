"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-soft"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Logo size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-text-muted hover:text-primary transition-colors"
            >
              {t("features")}
            </a>
            <a
              href="#contact"
              className="text-text-muted hover:text-primary transition-colors"
            >
              {t("contact")}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Button variant="primary" size="sm" onClick={scrollToContact}>
              {t("demo")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-text-muted hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("features")}
              </a>
              <a
                href="#contact"
                className="text-text-muted hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("contact")}
              </a>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <LanguageToggle />
                <Button variant="primary" size="sm" className="flex-1" onClick={scrollToContact}>
                  {t("demo")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
