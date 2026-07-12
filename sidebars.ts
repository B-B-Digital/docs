import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Per-category icon + accent color. Consumed by the swizzled
// src/theme/DocSidebarItem/Category component (colored icon square, count badge,
// sub-list accent border, active-item dot). Same palette as the homepage cards
// in docs/start.mdx — keep the two in sync when adding a category.
const sidebars: SidebarsConfig = {
  docs: [
    'start',
    {
      type: 'category',
      label: 'Najczęstsze pytania',
      collapsed: true,
      customProps: {icon: '❓', color: '#0c7e93'},
      items: [
        'faq/czym-jest-domena',
        'faq/czym-jest-hosting-i-ssl',
        'faq/czym-jest-cms',
        'faq/rodo-i-cookies',
      ],
    },
    {
      type: 'category',
      label: 'Współpraca z nami',
      collapsed: true,
      customProps: {icon: '🤝', color: '#3b6fd4'},
      items: [
        'wspolpraca/jak-wyglada-wspolpraca',
        'wspolpraca/co-przygotowac-przed-startem',
      ],
    },
    {
      type: 'category',
      label: 'Pierwsze kroki po starcie',
      collapsed: true,
      customProps: {icon: '🚀', color: '#8a5cd1'},
      items: [
        'po-starcie/pierwsze-kroki-po-starcie',
        'po-starcie/dostep-do-panelu',
        'po-starcie/logowanie-do-panelu',
        'po-starcie/pierwsza-publikacja',
        'po-starcie/co-dalej-po-starcie',
      ],
    },
    {
      type: 'category',
      label: 'Edycja treści w CMS',
      collapsed: true,
      customProps: {icon: '🛠️', color: '#d9603f'},
      items: [
        'cms/jak-poruszac-sie-po-panelu',
        'cms/jedna-strona-czy-lista-wpisow',
        'cms/jak-zapisac-i-opublikowac',
        'cms/jak-wypelnic-zakladke-seo',
        'cms/jak-korzystac-z-edytora-tekstu',
        'cms/jak-wgrywac-i-kadrowac-zdjecia',
        'cms/ustawienia-strony',
        'cms/strona-glowna',
        'cms/strona-o-nas',
        'cms/dane-kontaktowe',
        'cms/usluga',
        'cms/czlonek-zespolu',
        'cms/wpis-na-blogu',
        'cms/aktualnosc',
        'cms/opinia-klienta',
      ],
    },
    {
      type: 'category',
      label: 'Wsparcie i utrzymanie',
      collapsed: true,
      customProps: {icon: '🎧', color: '#2f9e6f'},
      items: [
        'wsparcie/blad-czy-nowa-funkcja',
        'wsparcie/co-wchodzi-w-opieke',
        'wsparcie/kopie-zapasowe',
        'wsparcie/strona-nie-dziala',
      ],
    },
    {
      type: 'category',
      label: 'Marketing i rozwój strony',
      collapsed: true,
      customProps: {icon: '📈', color: '#b57f10'},
      items: [
        'marketing-i-rozwoj/zmiany-w-domenie',
        'marketing-i-rozwoj/google-analytics-i-search-console',
        'marketing-i-rozwoj/wizytowka-google-i-opinie',
        'marketing-i-rozwoj/wspolpraca-z-agencja-seo',
        'marketing-i-rozwoj/zgloszenie-nowej-funkcji',
      ],
    },
  ],
};

export default sidebars;
