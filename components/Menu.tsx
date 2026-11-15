import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/pl";
import { donuts } from "@/data/donuts";

// Цены всегда в польском формате («6,50 zł»): пекарня в Варшаве, платят в злотых.
const price = new Intl.NumberFormat("pl-PL", { style: "currency", currency: "PLN" });

export default function Menu({ lang, t }: { lang: Locale; t: Dictionary["menu"] }) {
  return (
    <section id="menu" className="bg-dough py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-lg text-chocolate/80">{t.subtitle}</p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {donuts.map((d) => (
            <li
              key={d.id}
              className="group flex flex-col rounded-3xl bg-cream p-4 shadow-sm ring-1 ring-chocolate/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-caramel/15"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/60">
                <Image
                  src={d.image}
                  alt={d.name[lang]}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-bold leading-tight">{d.name[lang]}</h3>
                <p className="shrink-0 rounded-full bg-glaze/50 px-3 py-1 text-sm font-extrabold">
                  {price.format(d.price)}
                </p>
              </div>
              <p className="mt-1.5 line-clamp-1 text-sm text-chocolate/70" title={d.desc[lang]}>
                {d.desc[lang]}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-chocolate/70">{t.note}</p>
      </div>
    </section>
  );
}
