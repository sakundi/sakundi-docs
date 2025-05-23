// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sakundi - Security and Privacy for the Blockchain age",
  tagline: "Security and Privacy for the Blockchain age",
  url: "https://docs.sakundi.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sakundi", // Usually your GitHub org/user name.
  projectName: "sakundi-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    localeConfigs: {
      en: {
        label: "EN",
      },
      es: {
        label: "ES",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/dashboardp2pstatus.png",
      navbar: {
        logo: {
          alt: "Sakundi Logo",
          src: "/img/sakundi-logo-light.png",
          srcDark: "/img/sakundi-logo.png"
        },
        items: [
          {
            type: "doc",
            docId: "user-section/welcome-to-sakundi",
            position: "left",
            label: "User Section",
          },
          {
            type: "doc",
            docId: "research/intro",
            position: "left",
            label: "Research",
          },
          {
            type: "doc",
            docId: "about/team",
            position: "left",
            label: "About Sakundi",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
        style: "primary",
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                <a href="" target="_blank" rel="" aria-label="Tikuna Logo">
                  <div class="footer__logo" ><div/>
                </a>
              `
              }
            ],
          },
          {
            title: "Docs",
            items: [
              {
                label: "User section",
                to: "docs/user-section/welcome-to-sakundi",
              },
              {
                label: "Research",
                to: "/docs/research/intro",
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "Github",
                href: "https://github.com/kuronosec",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Sakundi_io",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/sakundi/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sakundi`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
