const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'APITUBE',
  tagline: 'Worldwide News API for your Products',
  favicon: 'img/favicon.ico',
  url: 'https://docs.apitube.pub',
  baseUrl: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  markdown: {
    mermaid: true
  },
  customFields: {
    environment: process.env.NODE_ENV,
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'cli',
    path: 'docs/cli',
    routeBasePath: '/cli',
  },
  {
    id: 'plugin-sdk',
    path: 'docs/plugin-sdk',
    routeBasePath: '/plugin-sdk',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Community packages
  {
    id: 'community-packages',
    path: 'docs/community-packages',
    routeBasePath: '/community-packages',
  },

  // Web UI Kits
  {
    id: 'ui-kit',
    path: 'docs/ui-kit',
    routeBasePath: '/ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'react-ui-kit',
    path: 'docs/react-ui-kit',
    routeBasePath: '/react-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'angular-ui-kit',
    path: 'docs/angular-ui-kit',
    routeBasePath: '/angular-ui-kit',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Web Core
  {
    id: 'web-core',
    path: 'docs/web-core',
    routeBasePath: '/web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  // React Web Core
  {
    id: 'react-web-core',
    path: 'docs/react-web-core',
    routeBasePath: '/react-web-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },

  // Mobile Core
  {
    id: 'android-core',
    path: 'docs/android-core',
    routeBasePath: '/android-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'flutter-core',
    path: 'docs/flutter-core',
    routeBasePath: '/flutter-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'ios-core',
    path: 'docs/ios-core',
    routeBasePath: '/ios-core',
    versions: {
      current: {
        label: '1.x.x',
      },
    },
  },
  {
    id: 'rn-core',
    path: 'docs/rn-core',
    routeBasePath: '/rn-core',
    versions: {
      current: {
        label: '0.5.x',
      },
    },
  },

  // Mobile UI Kits
  {
    id: 'android',
    path: 'docs/android',
    routeBasePath: '/android',
    versions: {
      current: {
        label: '0.14.x',
      },
    },
  },
  {
    id: 'flutter',
    path: 'docs/flutter',
    routeBasePath: '/flutter',
    versions: {
      current: {
        label: '0.7.x',
      },
    },
  },
  {
    id: 'ios',
    path: 'docs/ios',
    routeBasePath: '/ios',
    versions: {
      current: {
        label: '1.33.x',
      },
    },
  },
  {
    id: 'react-native',
    path: 'docs/rn-ui-kit',
    routeBasePath: '/react-native',
    versions: {
      current: {
        label: '1.4.x',
      },
    },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  // editUrl: 'https://github.com/apitube/docs/tree/master/',
  showLastUpdateTime: false,
  sidebarCollapsible: false,
  sidebarPath: require.resolve('./sidebars.js'),
};

const tailwindPlugin = require('./src/plugins/tailwind-plugin.cjs');

const plugins = [
  tailwindPlugin,
  [
    'docusaurus2-dotenv', {}
  ],
  [
    '@docusaurus/plugin-content-pages',
    {
      id: 'integrations',
      path: 'content/integrations',
      routeBasePath: '/integrations',
    },
  ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // indexDocs: true,
        // indexBlog: true,
        // indexPages: true,
        docsRouteBasePath: '/',
        docsDir: 'content',
        blogDir: 'content',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarPosition: 'right'
      }),
    ],
  ],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],
  scripts: [
    {
      src: '/js/crisp.js',
      async: false,
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'content/docs',
          routeBasePath: '/',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ],
        },
        sitemap: {
          ignorePatterns: ['/tags/**'],
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
        image: 'img/apitube-social-card.jpg',
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,
          respectPrefersColorScheme: false,
        },
        docs: {
          sidebar: {
            autoCollapseCategories: true,
            hideable: true,
          },
        },
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




            // {to: 'integrations', label: 'Integrations', position: 'left'},



            {
              position: 'right',
              type: 'search',
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
        prism: {
          theme: code_themes.light,
          darkTheme: code_themes.dark,
          additionalLanguages: [
            'dart',
            'ruby',
            'groovy',
            'kotlin',
            'java',
            'swift',
            'objectivec',
          ],
          magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: { start: 'highlight-start', end: 'highlight-end' },
            },
            {
              className: 'code-block-error-line',
              line: 'highlight-next-line-error',
            },
          ],
        },
        algolia: {
          appId: 'HL0HSV62RK',
          apiKey: '72ebf02146698733b7114c7b36da0945',
          indexName: 'docs',
          contextualSearch: true,
          searchParameters: {},
        },
      }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;
