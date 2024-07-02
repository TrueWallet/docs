// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TrueWallet Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.true-wallet.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TrueWallet', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
        pages: false,
      }),
    ],
  ],

  scripts: [{src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.true-wallet.io'}],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo_truewallet.png',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'truewallet',
        logo: {
          alt: 'TrueWallet Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://dashboard.true-wallet.io',
            label: 'Dashboard',
            position: 'right',
          },
          {
            href: 'https://github.com/TrueWallet/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'SDK',
                to: '/category/sdk',
              },
              {
                label: 'Smart Account',
                to: '/smart-account',
              },
              {
                label: 'Bundler',
                to: '/category/bundler',
              },
              {
                label: 'Blockchain',
                to: '/category/blockchain',
              },
              {
                label: 'Private Key Storage',
                to: '/private-key-storage',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/TrueWallet4337',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/truewallet4337',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/truewallet/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                href: 'https://true-wallet.io',
              },
              {
                label: 'Dashboard',
                href: 'https://dashboard.true-wallet.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TrueWallet',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TrueWallet. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
          appId: 'RDQ04QOJNT',
          apiKey: 'df669f02081b8da74c2b7e85960f94eb',
          indexName: 'docs',
          contextualSearch: false,
      },
    }),
};

export default config;
