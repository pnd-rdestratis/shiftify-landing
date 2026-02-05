import { getRequestConfig } from "next-intl/server";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined, fallback to default
  const resolvedLocale = locale && locales.includes(locale as Locale)
    ? locale
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default,
  };
});
