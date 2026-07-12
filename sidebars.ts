import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  docs: [
    'start',
    {
      type: 'category',
      label: 'Najczęstsze pytania',
      collapsed: false,
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
      collapsed: false,
      items: [
        'wspolpraca/jak-wyglada-wspolpraca',
        'wspolpraca/co-przygotowac-przed-startem',
      ],
    },
    {
      type: 'category',
      label: 'Pierwsze kroki po starcie',
      collapsed: false,
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
      collapsed: false,
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
      collapsed: false,
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
      collapsed: false,
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
