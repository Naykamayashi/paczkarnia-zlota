import type { Dictionary } from "@/i18n/dictionaries/pl";
import { contact } from "@/data/contact";
import Logo from "./Logo";

const icons = {
  Instagram: (
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM17.5 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
  ),
  Facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8z" />,
  TikTok: (
    <path d="M16 3c.4 2.3 1.8 3.8 4 4v3.2a7.4 7.4 0 0 1-4-1.3V15a6 6 0 1 1-6-6h.5v3.3a2.8 2.8 0 1 0 2.3 2.7V3H16z" />
  ),
};

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  const links = [
    { name: "Instagram" as const, href: contact.social.instagram },
    { name: "Facebook" as const, href: contact.social.facebook },
    { name: "TikTok" as const, href: contact.social.tiktok },
  ];

  return (
    <footer className="bg-chocolate text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <Logo />
            Pączkarnia <span className="text-glaze">Złota</span>
          </p>
          <p className="mt-2 text-cream/70">{t.tagline}</p>
        </div>
        <ul className="flex gap-3">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                aria-label={l.name}
                className="grid h-11 w-11 place-items-center rounded-full bg-cream/10 transition hover:bg-glaze hover:text-chocolate"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  {icons[l.name]}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-cream/60 sm:px-6 md:flex-row md:justify-between">
          <p>
            © Pączkarnia Złota. {t.rights}
          </p>
          <p className="font-semibold text-glaze">{t.demo}</p>
        </div>
      </div>
    </footer>
  );
}
