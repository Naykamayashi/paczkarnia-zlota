import type { Dictionary } from "@/i18n/dictionaries/pl";

function Stars({ label }: { label: string }) {
  return (
    <div role="img" aria-label={label} className="flex gap-0.5 text-caramel">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ t }: { t: Dictionary["reviews"] }) {
  return (
    <section id="opinie" className="bg-glaze/25 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t.title}</h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {t.items.map((r, i) => (
            <li key={r.name}>
              <figure
                className={`flex h-full flex-col rounded-3xl bg-cream p-6 shadow-sm ring-1 ring-chocolate/5 sm:p-8 ${
                  i === 1 ? "md:-rotate-1" : i === 2 ? "md:rotate-1" : ""
                }`}
              >
                <Stars label={t.stars} />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">„{r.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 font-bold">
                  <span
                    aria-hidden="true"
                    className="grid h-10 w-10 place-items-center rounded-full bg-dough font-display text-sm"
                  >
                    {r.name[0]}
                  </span>
                  {r.name}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
