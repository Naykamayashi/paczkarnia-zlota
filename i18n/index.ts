import type { Locale } from "./config";
import pl from "./dictionaries/pl";
import uk from "./dictionaries/uk";
import en from "./dictionaries/en";

const dictionaries = { pl, uk, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
