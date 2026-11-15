import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/pl";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <section id="o-nas" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="absolute inset-6 rotate-6 rounded-[3rem] bg-glaze/50" />
          <div className="relative rounded-[3rem] bg-dough p-8 shadow-sm">
            <Image src="/images/paczek-klasyczny.svg" alt="" width={800} height={800} className="h-auto w-full" />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold text-balance sm:text-5xl">{t.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-chocolate/80">{t.text}</p>
          <ul className="mt-8 grid grid-cols-3 gap-3">
            {t.facts.map((f) => (
              <li key={f.value} className="rounded-2xl bg-white/70 p-4 ring-1 ring-chocolate/5">
                <p className="font-display text-2xl font-extrabold text-caramel-dark sm:text-3xl">{f.value}</p>
                <p className="mt-1 text-xs leading-snug text-chocolate/75 sm:text-sm">{f.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
