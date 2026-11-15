import type { Dictionary } from "@/i18n/dictionaries/pl";
import { contact } from "@/data/contact";

export default function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <section id="kontakt" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t.title}</h2>

          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-caramel-dark">{t.addressLabel}</h3>
          <address className="mt-2 text-lg not-italic">
            {contact.address}
            <br />
            <a href={contact.phoneHref} className="font-semibold underline-offset-4 hover:underline">
              {contact.phone}
            </a>
          </address>

          <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-caramel-dark">{t.hoursLabel}</h3>
          <ul className="mt-2 max-w-sm divide-y divide-chocolate/10 text-lg">
            {t.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4 py-2">
                <span>{h.days}</span>
                <span className="font-semibold tabular-nums">{h.time}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f8f4e] px-6 py-4 font-bold text-white transition hover:bg-chocolate"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
              </svg>
              {t.whatsapp}
            </a>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-chocolate px-6 py-4 font-bold transition hover:bg-chocolate hover:text-cream"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
              </svg>
              {t.call}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex-1 overflow-hidden rounded-3xl bg-dough shadow-sm ring-1 ring-chocolate/10">
            <iframe
              src={contact.mapsEmbed}
              title={t.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] h-auto w-full border-0 lg:aspect-auto lg:h-full lg:min-h-[28rem]"
            />
          </div>
          <a
            href={contact.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start text-sm font-semibold underline underline-offset-4 hover:text-glaze-deep"
          >
            {t.openMap} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
