import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/pl";
import { contact } from "@/data/contact";
import heroImage from "@/public/images/hero-paczki.svg";

export default function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      {/* мягкие «глазурные» пятна на фоне */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-glaze/40 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-dough blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:pb-20 lg:pt-14">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-caramel-dark shadow-sm ring-1 ring-chocolate/5">
            <span className="h-2 w-2 rounded-full bg-glaze-deep" aria-hidden="true" />
            {t.eyebrow}
          </p>
          <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-chocolate/80 sm:text-xl">{t.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-glaze-deep px-7 py-4 text-center font-bold text-white shadow-lg shadow-glaze-deep/25 transition hover:-translate-y-0.5 hover:bg-chocolate"
            >
              {t.order}
            </a>
            <a
              href="#kontakt"
              className="rounded-full border-2 border-chocolate px-7 py-4 text-center font-bold transition hover:bg-chocolate hover:text-cream"
            >
              {t.directions}
            </a>
          </div>
        </div>

        <div className="relative">
          <Image src={heroImage} alt="" preload sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full" />
          <p className="absolute right-2 top-0 rotate-6 rounded-2xl bg-caramel px-4 py-2 font-display text-sm font-bold text-cream shadow-md sm:right-6 sm:text-base">
            {t.badge}
          </p>
        </div>
      </div>

      {/* волна глазури — переход к следующей секции */}
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-8 w-full text-dough sm:h-12">
        <path d="M0,30 C120,60 240,0 360,30 C480,60 600,0 720,30 C840,60 960,0 1080,30 C1200,60 1320,0 1440,30 L1440,60 L0,60Z" fill="currentColor" />
      </svg>
    </section>
  );
}
