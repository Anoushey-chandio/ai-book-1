// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Bridging the Gap: From Intelligent Algorithms to Autonomous Humanoid Robots',
  favicon: 'img/favicon.ico',

  url: 'https://ai-book-1.vercel.app',
  baseUrl: '/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {type: ['rss', 'atom'], xslt: true},
        },
        theme: {customCss: './src/css/custom.css'},
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {alt: 'Book Logo', src: 'img/logo.svg'},
      items: [
        {label: 'Home', to: '/', position: 'left'},
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Modules'},
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {label: 'Modules Overview', to: '/docs/intro'},
            {label: 'Blog', to: '/blog'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Developed by Anoushey Chandio. Built with Docusaurus.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};

export default config;
