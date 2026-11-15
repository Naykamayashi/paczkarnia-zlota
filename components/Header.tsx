"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pl";
import { contact } from "@/data/contact";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header({ lang, nav }: { lang: Locale; nav: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);

  // Esc закрывает мобильное меню
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#menu", label: nav.menu },
    { href: "#o-nas", label: nav.about },
    { href: "#opinie", label: nav.reviews },
    { href: "#kontakt", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-chocolate/10 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-base font-bold leading-none sm:text-lg">
          <Logo />
          <span>
            Pączkarnia <span className="text-caramel">Złota</span>
          </span>
        </a>

        <nav aria-label={nav.menu} className="ml-auto hidden lg:block">
          <ul className="flex gap-7 text-sm font-semibold">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-glaze-deep">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-6">
          <div className="hidden sm:block">
            <LanguageSwitcher lang={lang} label={nav.language} />
          </div>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-glaze-deep px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-chocolate sm:inline-block"
          >
            {nav.order}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            className="grid h-11 w-11 place-items-center rounded-full bg-dough/70 lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-chocolate transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-chocolate transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-chocolate transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-chocolate/10 bg-cream px-4 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-chocolate/10 py-4 font-display text-xl font-bold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center justify-between gap-3">
          <LanguageSwitcher lang={lang} label={nav.language} />
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-glaze-deep px-6 py-3 font-bold text-white"
          >
            {nav.order}
          </a>
        </div>
      </div>
    </header>
  );
}
