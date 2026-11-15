import type { Locale } from "@/i18n/config";

export type Donut = {
  id: string;
  /** Путь к картинке в /public. Чтобы поставить фото — замените на '/images/paczek-roza.webp'. */
  image: string;
  /** Цена за штуку в злотых */
  price: number;
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
};

export const donuts: Donut[] = [
  {
    id: "roza",
    image: "/images/paczek-roza.svg",
    price: 6.5,
    name: { pl: "Z różą", uk: "З трояндою", en: "Rose" },
    desc: {
      pl: "Klasyczna konfitura różana i lukier z płatkami.",
      uk: "Класичне трояндове варення і глазур з пелюстками.",
      en: "Classic rose jam under a petal-dusted glaze.",
    },
  },
  {
    id: "czekolada",
    image: "/images/paczek-czekolada.svg",
    price: 7,
    name: { pl: "Podwójna czekolada", uk: "Подвійний шоколад", en: "Double chocolate" },
    desc: {
      pl: "Krem z ciemnej czekolady i polewa 70%.",
      uk: "Крем з чорного шоколаду і глазур 70%.",
      en: "Dark chocolate cream with a 70% cocoa glaze.",
    },
  },
  {
    id: "wanilia",
    image: "/images/paczek-wanilia.svg",
    price: 7,
    name: { pl: "Waniliowy", uk: "Ванільний", en: "Vanilla" },
    desc: {
      pl: "Budyń z prawdziwej wanilii, cukier puder.",
      uk: "Заварний крем зі справжньою ваніллю, цукрова пудра.",
      en: "Real vanilla custard, dusted with icing sugar.",
    },
  },
  {
    id: "pistacja",
    image: "/images/paczek-pistacja.svg",
    price: 8.5,
    name: { pl: "Pistacjowy", uk: "Фісташковий", en: "Pistachio" },
    desc: {
      pl: "Krem pistacjowy i prażone orzechy.",
      uk: "Фісташковий крем і підсмажені горіхи.",
      en: "Pistachio cream and toasted nuts.",
    },
  },
  {
    id: "malina",
    image: "/images/paczek-malina.svg",
    price: 7.5,
    name: { pl: "Malinowy", uk: "Малиновий", en: "Raspberry" },
    desc: {
      pl: "Domowa konfitura i liofilizowane maliny.",
      uk: "Домашнє варення і сушена малина.",
      en: "Homemade jam and freeze-dried raspberries.",
    },
  },
  {
    id: "karmel",
    image: "/images/paczek-karmel.svg",
    price: 8,
    name: { pl: "Słony karmel", uk: "Солона карамель", en: "Salted caramel" },
    desc: {
      pl: "Karmel na maśle i płatki soli morskiej.",
      uk: "Карамель на вершковому маслі та пластівці морської солі.",
      en: "Butter caramel with sea salt flakes.",
    },
  },
  {
    id: "adwokat",
    image: "/images/paczek-adwokat.svg",
    price: 8,
    name: { pl: "Adwokatowy", uk: "З яєчним лікером", en: "Advocaat" },
    desc: {
      pl: "Krem z likierem jajecznym i kolorowa posypka.",
      uk: "Крем з яєчним лікером і кольорова посипка.",
      en: "Egg liqueur cream with rainbow sprinkles.",
    },
  },
  {
    id: "klasyczny",
    image: "/images/paczek-klasyczny.svg",
    price: 5.5,
    name: { pl: "Tradycyjny", uk: "Традиційний", en: "Traditional" },
    desc: {
      pl: "Lukier i kandyzowana skórka pomarańczowa.",
      uk: "Цукрова глазур і цукати з апельсинової шкірки.",
      en: "Sugar icing and candied orange peel.",
    },
  },
];
