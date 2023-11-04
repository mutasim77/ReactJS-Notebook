const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ReactJS Notebook 📔',
  tagline: `If you are not taking notes, you are not learning!`,
  favicon: 'img/logo.png',

  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'mutasim77',
  projectName: 'ReactJS-Notebook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ReactJs',
        logo: {
          alt: 'Notebook Logo',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/mutasim77/ReactJS-Notebook',
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
                label: 'Notes',
                to: '/docs/introduction',
              },
              {
                label: 'Hooks',
                to: '/docs/Hooks/react-hooks',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/users/mvtasim',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mvtasim77',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mutasim77/ReactJS-Notebook',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 - ${new Date().getFullYear()} Mutasim`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
