import bs from "./bs.json";
import en from "./en.json";

export const citati: { quote: string; author: string }[] = Object.keys(bs).map(
  (key: string) => ({
    quote: bs[key as keyof typeof bs].citat,
    author: bs[key as keyof typeof bs].autor,
  })
);

export const quotes: { quote: string; author: string }[] = Object.keys(en).map(
  (key: string) => ({
    quote: en[key as keyof typeof en].citat,
    author: en[key as keyof typeof en].autor,
  })
);
