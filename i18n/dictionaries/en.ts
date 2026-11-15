import type { Dictionary } from "./pl";

const en: Dictionary = {
  meta: {
    title: "Pączkarnia Złota — handmade Polish doughnuts in Warsaw",
    description:
      "Fluffy pączki fried fresh every morning in the heart of Warsaw. Rose, pistachio, salted caramel and the classics. Fresh from 6 am.",
  },
  nav: {
    menu: "Menu",
    about: "About",
    reviews: "Reviews",
    contact: "Contact",
    order: "Order",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Warsaw · from 6 am",
    title: "Doughnuts worth waking up early for",
    subtitle:
      "Hand-fried every morning, filled to the brim and glazed with love. Still warm and waiting for you on Złota Street.",
    order: "Order doughnuts",
    directions: "Get directions",
    badge: "Fresh this morning",
  },
  menu: {
    title: "Our doughnuts",
    subtitle: "Eight flavours that leave the counter fastest. Fresh every day, always with a real filling.",
    note: "Prices per piece. Bulk and party orders — just message us.",
  },
  about: {
    title: "Made by hand. Every morning.",
    text: "We start at 4 am while the city is still asleep. We knead the dough by hand, give it time to rise and fry in small batches. We cook our own fillings from fruit, real vanilla and butter. That's why at 6 am the counter is full of doughnuts that taste just like grandma's.",
    facts: [
      { value: "6:00", label: "first doughnuts on the counter" },
      { value: "100%", label: "handmade, nothing frozen" },
      { value: "8", label: "flavours every day" },
    ],
  },
  reviews: {
    title: "What our guests say",
    items: [
      {
        name: "Kasia M.",
        text: "The best rose pączek in Warsaw. I drop by before work and they're always still warm.",
      },
      {
        name: "Oleh K.",
        text: "The pistachio one is unreal. We ordered 40 for the office — gone in 10 minutes.",
      },
      {
        name: "Tomasz W.",
        text: "A real filling, not jam from a bucket. Friendly staff and great coffee to go with it.",
      },
    ],
    stars: "Rated 5 out of 5",
  },
  contact: {
    title: "Come visit us",
    addressLabel: "Address",
    hoursLabel: "Opening hours",
    hours: [
      { days: "Mon – Fri", time: "6:00 – 19:00" },
      { days: "Saturday", time: "7:00 – 16:00" },
      { days: "Sunday", time: "8:00 – 14:00" },
    ],
    whatsapp: "Message on WhatsApp",
    call: "Call us",
    openMap: "Open in Google Maps",
    mapTitle: "Map to Pączkarnia Złota",
  },
  footer: {
    tagline: "Handmade Polish doughnuts in Warsaw.",
    demo: "Demo project — this bakery is fictional.",
    rights: "All rights reserved.",
  },
};

export default en;
