import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main id="top">
        <Hero t={dict.hero} />
        <div className="h-[200vh] bg-dough" />
      </main>
    </>
  );
}
