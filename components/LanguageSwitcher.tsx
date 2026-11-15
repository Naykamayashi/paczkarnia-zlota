import Link from "next/link";
import { localeLabels, locales, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full bg-dough/70 p-1 text-xs font-bold">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          aria-label={localeLabels[l].full}
          aria-current={l === lang ? "page" : undefined}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${
            l === lang ? "bg-chocolate text-cream" : "text-chocolate/70 hover:text-chocolate"
          }`}
        >
          {localeLabels[l].short}
        </Link>
      ))}
    </nav>
  );
}
