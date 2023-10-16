// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'APITUBE',
  tagline: 'Worldwide News API for your Products',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.apitube.pub',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Custom configs
  trailingSlash: false,
  markdown: {
    mermaid: true
  },

  customFields: {
    // expose env vars etc here
    environment: process.env.NODE_ENV,
  },

  clientModules: [
    require.resolve('./src/components/crisp.js'),
  ],

  plugins: [
    async function tailwindCssPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      'docusaurus2-dotenv', {}
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          path: 'content/docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'G-TERKG9XM4F'
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/apitube-social-card.jpg',
      navbar: {
        logo: {
          alt: 'APITUBE Worldwide Live News API',
          src: 'img/logo.svg',
          width: 84,
          // height: 50,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            position: 'right',
            href: 'https://apitube.pub/sign-up',
            className: 'header-sign-up-link',
            label: "Sign Up",
            'aria-label': 'Sign Up',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'APITUBE',
            items: [
              {
                label: 'Features',
                to: 'https://apitube.pub/product/features',
              },
              {
                label: 'Blog & News',
                to: 'https://apitube.pub/blog',
              },
              {
                label: 'Privacy Policy',
                to: 'https://apitube.pub/terms/privacy_policy',
              },
              {
                label: 'Terms of Service',
                to: 'https://apitube.pub/terms/terms_of_service',
              },
            ],
          },
          {
            title: 'Integrations',
            items: [
              {
                label: 'Node.js',
                to: 'https://github.com/apitube/integrations/tree/master/Node.js',
              },
              {
                label: 'Python',
                to: 'https://github.com/apitube/integrations/tree/master/Python',
              },
              {
                label: 'PHP',
                to: 'https://github.com/apitube/integrations/tree/master/PHP',
              },
              {
                label: 'Golang',
                to: 'https://github.com/apitube/integrations/tree/master/Go',
              },
              {
                label: 'All integrations',
                to: 'https://github.com/apitube/integrations',
              },
            ],
          },
          {
            // title: '',
            items: [
              {
                label: 'Node.js',
                to: 'https://github.com/apitube/integrations/tree/master/Node.js',
              },
              {
                label: 'Python',
                to: 'https://github.com/apitube/integrations/tree/master/Python',
              },
              {
                label: 'PHP',
                to: 'https://github.com/apitube/integrations/tree/master/PHP',
              },
              {
                label: 'Golang',
                to: 'https://github.com/apitube/integrations/tree/master/Go',
              },
              {
                label: 'All integrations',
                to: 'https://github.com/apitube/integrations',
              },
            ],
          },
          {
            // title: '',
            items: [
              {
                label: 'Node.js',
                to: 'https://github.com/apitube/integrations/tree/master/Node.js',
              },
              {
                label: 'Python',
                to: 'https://github.com/apitube/integrations/tree/master/Python',
              },
              {
                label: 'PHP',
                to: 'https://github.com/apitube/integrations/tree/master/PHP',
              },
              {
                label: 'Golang',
                to: 'https://github.com/apitube/integrations/tree/master/Go',
              },
              {
                label: 'All integrations',
                to: 'https://github.com/apitube/integrations',
              },
            ],
          }
        ],
        copyright: `Worldwide Live News API for your Next project `,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
