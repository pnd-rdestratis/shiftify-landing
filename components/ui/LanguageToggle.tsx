"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "de" ? "en" : "de";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
        "bg-surface border border-border hover:bg-white hover:border-primary/20",
        "transition-all duration-200",
        className
      )}
      aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
    >
      <span className={cn(locale === "de" ? "font-bold text-primary" : "text-text-muted")}>
        DE
      </span>
      <span className="text-border">/</span>
      <span className={cn(locale === "en" ? "font-bold text-primary" : "text-text-muted")}>
        EN
      </span>
    </button>
  );
}
