// Эталонный словарь: uk.ts и en.ts должны иметь ровно те же ключи.
const pl = {
  meta: {
    title: "Pączkarnia Złota — ręcznie robione pączki w Warszawie",
    description:
      "Puszyste pączki smażone każdego ranka w sercu Warszawy. Róża, pistacja, słony karmel i klasyka. Świeże od 6:00.",
  },
  nav: {
    menu: "Menu",
    about: "O nas",
    reviews: "Opinie",
    contact: "Kontakt",
    order: "Zamów",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    language: "Język",
  },
  hero: {
    eyebrow: "Warszawa · od 6:00 rano",
    title: "Pączki, na które warto wstać wcześniej",
    subtitle:
      "Smażone ręcznie każdego ranka, nadziewane po brzegi i lukrowane z sercem. Jeszcze ciepłe czekają na Ciebie na Złotej.",
    order: "Zamów pączki",
    directions: "Jak dojechać",
    badge: "Świeże dziś rano",
  },
  menu: {
    title: "Nasze pączki",
    subtitle: "Osiem smaków, które znikają z lady najszybciej. Codziennie świeże, zawsze z prawdziwym nadzieniem.",
    note: "Ceny za sztukę. Zamówienia hurtowe i na imprezy — napisz do nas.",
  },
  about: {
    title: "Pieczemy ręcznie. Każdego ranka.",
    text: "Zaczynamy o czwartej, kiedy miasto jeszcze śpi. Ciasto wyrabiamy ręcznie, dajemy mu czas, by urosło, i smażymy małymi partiami. Nadzienia gotujemy sami — z owoców, prawdziwej wanilii i masła. Dlatego o 6:00 na ladzie leżą pączki, które smakują jak u babci.",
    facts: [
      { value: "6:00", label: "pierwsze pączki na ladzie" },
      { value: "100%", label: "ręczna robota, bez mrożonek" },
      { value: "8", label: "smaków każdego dnia" },
    ],
  },
  reviews: {
    title: "Co mówią nasi goście",
    items: [
      {
        name: "Kasia M.",
        text: "Najlepszy pączek z różą w Warszawie. Przychodzę przed pracą i zawsze są jeszcze ciepłe.",
      },
      {
        name: "Ołeh K.",
        text: "Pistacjowy to coś niesamowitego. Zamówiliśmy 40 sztuk do biura — zniknęły w 10 minut.",
      },
      {
        name: "Tomasz W.",
        text: "Prawdziwe nadzienie, nie żaden dżem z wiadra. Miła obsługa i świetna kawa do tego.",
      },
    ],
    stars: "Ocena 5 na 5",
  },
  contact: {
    title: "Odwiedź nas",
    addressLabel: "Adres",
    hoursLabel: "Godziny otwarcia",
    hours: [
      { days: "Pon – Pt", time: "6:00 – 19:00" },
      { days: "Sobota", time: "7:00 – 16:00" },
      { days: "Niedziela", time: "8:00 – 14:00" },
    ],
    whatsapp: "Napisz na WhatsApp",
    call: "Zadzwoń",
    openMap: "Otwórz w Mapach Google",
    mapTitle: "Mapa dojazdu do Pączkarni Złotej",
  },
  footer: {
    tagline: "Ręcznie robione pączki w Warszawie.",
    demo: "Projekt demonstracyjny — pączkarnia jest fikcyjna.",
    rights: "Wszelkie prawa zastrzeżone.",
  },
};

export default pl;
export type Dictionary = typeof pl;
