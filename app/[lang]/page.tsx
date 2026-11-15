import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import Header from "@/components/Header";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main id="top">
        <h1 className="p-8 font-display text-4xl font-extrabold">{dict.hero.title}</h1>
        <div className="h-[200vh]" />
      </main>
    </>
  );
}
