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
  ],
};

export default sidebars;
