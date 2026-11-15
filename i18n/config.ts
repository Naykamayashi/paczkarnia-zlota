export const locales = ["pl", "uk", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pl";

// Код uk — по стандарту ISO, но на кнопке пишем UA (UK читается как Великобритания).
export const localeLabels: Record<Locale, { short: string; full: string }> = {
  pl: { short: "PL", full: "Polski" },
  uk: { short: "UA", full: "Українська" },
  en: { short: "EN", full: "English" },
};

export const ogLocales: Record<Locale, string> = {
  pl: "pl_PL",
  uk: "uk_UA",
  en: "en_US",
};

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);
