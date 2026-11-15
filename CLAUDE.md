@AGENTS.md

# Pączkarnia Złota — демо-лендинг пончиковой (портфолио)

Вымышленная варшавская пекарня. Одна страница на 3 языках. Цель — выглядеть как реальный коммерческий сайт.

## Стек
- Next.js 16 (App Router, `cacheComponents: true` в `next.config.ts`), React 19, TypeScript
- Tailwind CSS 4 (настройка через `@theme` в `app/globals.css`, файла tailwind.config нет)
- Шрифты через `next/font/google`: Unbounded (заголовки) + Manrope (текст), subsets latin, latin-ext, cyrillic
- Никаких i18n- и анимационных библиотек — всё своё и маленькое

## Команды
- `npm run dev` — локальный сервер на http://localhost:3000 (`/` редиректит на `/pl`)
- `npm run build` — продакшен-сборка (заодно проверка типов: пропущенный перевод = ошибка)
- `npm run lint` — ESLint

## Деплой
- Vercel, проект `paczkarnia-zlota` (команда Koshakis): https://paczkarnia-zlota.vercel.app
- Код: https://github.com/Naykamayashi/paczkarnia-zlota
- Env `NEXT_PUBLIC_SITE_URL` (Production) = адрес сайта; подставляется при сборке, после смены — передеплой.
- Ручной деплой: `npx vercel deploy --prod`

## Структура
```
app/[lang]/layout.tsx   корневой layout: <html lang>, шрифты, метаданные по языку
app/[lang]/page.tsx     собирает секции по порядку
app/[lang]/opengraph-image.tsx  OG-картинка 1200×630 для соцсетей (кодом через next/og, своя на каждый язык,
                        шрифты — .woff из @fontsource); twitter-image.tsx реэкспортирует её же
app/sitemap.ts, app/robots.ts  /sitemap.xml (страница на язык + hreflang) и /robots.txt
data/site.ts            siteUrl — адрес сайта (из NEXT_PUBLIC_SITE_URL) для мета-тегов, sitemap, robots
app/globals.css         палитра (cream, dough, caramel, chocolate, glaze, glaze-deep), анимации
components/             по файлу на секцию: Header, Hero, Menu, DonutCard, About, Reviews, Contact, Footer
                        + LanguageSwitcher, Reveal (анимация появления, только улучшение поверх видимого контента)
i18n/config.ts          список языков, подписи кнопок (uk → «UA»), hasLocale()
i18n/dictionaries/      pl.ts (эталон), uk.ts, en.ts — ВСЕ тексты сайта
data/donuts.ts          меню пончиков: картинка, цена, названия/описания на 3 языках
data/contact.ts         телефон, WhatsApp, адрес, ссылки на карту — заглушки в одном месте
public/images/          SVG-иллюстрации пончиков (заглушки под будущие фото)
next.config.ts          redirect / → /pl
```

## Языки
- `pl` (по умолчанию), `uk`, `en`. Код украинского в URL и `lang` — `uk`, на кнопке — `UA`.
- Тексты только в `i18n/dictionaries/*.ts`. Тип словаря берётся из `pl.ts`, поэтому `uk.ts`/`en.ts` обязаны иметь те же ключи.
- Новый текст: добавить ключ в `pl.ts`, затем в `uk.ts` и `en.ts`, использовать как `dict.section.key`.

## Как добавить пончик в меню
1. Положить картинку в `public/images/` (например `paczek-nowy.webp`, лучше квадрат ~1200×1200).
2. Добавить объект в массив в `data/donuts.ts`: `id`, `image`, `price` (число в zł), `name` и `desc` для pl/uk/en.
Карточка картинку обрезает под квадрат (`fill` + `object-cover`), так что размер файла не важен.
Замена SVG на фото — только поменять путь `image`.

## Правила
- Mobile-first: сначала стили для телефона, потом `sm:`/`md:`/`lg:`.
- Анимации уважают `prefers-reduced-motion`; без JS весь контент виден.
- Контакты — заглушки; не вставлять реальные номера/адреса.
- Не использовать чужие фото из интернета.
