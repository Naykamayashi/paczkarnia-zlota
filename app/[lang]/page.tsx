import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main id="top">
        <Hero t={dict.hero} />
        <Reveal>
          <Menu lang={lang} t={dict.menu} />
        </Reveal>
        <Reveal>
          <About t={dict.about} />
        </Reveal>
        <Reveal>
          <Reviews t={dict.reviews} />
        </Reveal>
        <Reveal>
          <Contact t={dict.contact} />
        </Reveal>
      </main>
      <Footer t={dict.footer} />
    </>
  );
}
