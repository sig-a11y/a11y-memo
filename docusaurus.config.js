// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Game A11y Memo',
  tagline: '一些关于游戏无障碍的备忘及想法',
  favicon: 'img/favicon.ico',

  /* DOC:  https://docusaurus.io/docs/deployment#deploying-to-github-pages */
  // Set the production url of your site here
  url: 'https://sig-a11y.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/memo/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sig-a11y', // Usually your GitHub org/user name.
  projectName: 'memo', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/sig-a11y/memo/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Game A11y Memo',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        /* 顶端导航栏 */
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   label: '备忘录导航',
          //   position: 'left',
          // },
          {
            label: '备忘录导航',
            to: '/docs/intro',
            position: 'left',
          },
          {
            label: '无障碍游戏',
            to: '/docs/game',
            position: 'left',
          },
          {
            label: '无障碍补丁',
            to: '/docs/category/mod',
            position: 'left',
          },
          {
            label: '技术备忘录',
            to: '/docs/category/tech',
            position: 'left',
          },
          {
            label: '想法',
            to: '/docs/category/idea',
            position: 'left',
          },

          {
            label: 'GitHub',
            href: 'https://github.com/sig-a11y/memo',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: '外部链接',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/sig-a11y/memo',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SIG-A11y Project, Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
