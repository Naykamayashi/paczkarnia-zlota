"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect, type MouseEvent } from "react";
import { localeLabels, locales, type Locale } from "@/i18n/config";

// Next (cacheComponents) держит прошлые языковые версии страницы в DOM скрытыми,
// поэтому секций с одним id бывает несколько — берём только видимую.
const visible = (el: Element) => el.getClientRects().length > 0;

// Секция, которую сейчас читают: последняя видимая, чей верх поднялся выше трети экрана.
function currentSection() {
  let found: HTMLElement | null = null;
  for (const s of document.querySelectorAll<HTMLElement>("main section[id]")) {
    if (visible(s) && s.getBoundingClientRect().top <= window.innerHeight / 3) found = s;
  }
  return found;
}

// Куда вернуть прокрутку после смены языка: { id секции, сколько в неё прокручено }.
const KEY = "lang-switch-scroll";

export default function LanguageSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const router = useRouter();

  // Новая языковая версия смонтировалась → до отрисовки ставим ту же секцию с тем же отступом.
  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    if (!saved) return;
    sessionStorage.removeItem(KEY);
    const { id, offset } = JSON.parse(saved) as { id: string; offset: number };
    const el = [...document.querySelectorAll(`[id="${id}"]`)].find(visible);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset, behavior: "instant" });
  }, [lang]);

  // Без JS (и для Ctrl/⌘-клика в новую вкладку) работает обычная ссылка /{l}.
  const onClick = (e: MouseEvent<HTMLAnchorElement>, l: Locale) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (l === lang) return;
    const section = currentSection();
    // В hero — новый язык просто наверху. Иначе запоминаем секцию и насколько в неё прокручено.
    if (section) {
      sessionStorage.setItem(KEY, JSON.stringify({ id: section.id, offset: -section.getBoundingClientRect().top }));
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    router.push(`/${l}`, { scroll: false });
  };

  return (
    <nav aria-label={label} className="flex items-center rounded-full bg-dough/70 p-1 text-xs font-bold">
      {locales.map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          hrefLang={l}
          lang={l}
          onClick={(e) => onClick(e, l)}
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
