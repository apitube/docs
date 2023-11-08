const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'APITUBE Docs',
  tagline: 'Worldwide News API for your Products',
  favicon: 'img/favicon.ico',
  url: process.env.URL,
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
    id: 'integrations',
    path: 'content/integrations',
    routeBasePath: '/integrations',
    sidebarPath: require.resolve('./sidebars')
  },
  {
    id: 'use-cases',
    path: 'content/use-cases',
    routeBasePath: '/use-cases',
    sidebarPath: require.resolve('./sidebars'),
    sidebarCollapsible: false,
  }
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  // editUrl: 'https://github.com/apitube/docs/tree/master/',
  showLastUpdateTime: false,
  sidebarCollapsible: true,
  sidebarPath: require.resolve('./sidebars.js'),
};

/**
 * Create a section
 * @param sidebarPath
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const tailwindPlugin = require('./src/plugins/tailwind-plugin.cjs');
// const variablesPlugin = require('./src/plugins/variables-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));
// console.log(docs_plugins)

const plugins = [
  tailwindPlugin,
  ...docs_plugins,
  [
    'docusaurus2-dotenv', {}
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
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: "./openapi.yaml",
          routeBasePath: "/api-reference",
        },
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
      },
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/apitube-social-card.jpg',
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
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
            src: 'img/logo2.svg',
            width: 154,
            // height: 50,
            srcDark: 'img/logo2-dark.svg',
          },
          items: [
            {
              type: 'docSidebar',
              sidebarId: 'docs',
              position: 'left',
              label: 'Guide',
            },
            {
              to: 'integrations',
              label: 'Integrations',
              position: 'left'
            },
            {
              to: 'api-reference',
              position: 'left',
              label: 'API Reference',
            },
            {
              to: 'use-cases',
              // sidebarId: 'useCases',
              label: 'Examples',
              position: 'left'
            },
            {
              position: 'right',
              href: 'https://apitube.pub/sign-up',
              className: 'header-sign-up-link',
              label: "Sign Up",
              'aria-label': 'Sign Up',
            },
            {
              position: 'right',
              type: 'search',
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
              title: 'JavaScript integrations',
              items: [
                {
                  label: 'Axios',
                  to: '/integrations/javascript/XMLHttpRequest',
                },
                {
                  label: 'jQuery',
                  to: '/integrations/javascript/jQuery',
                },
                {
                  label: 'Fetch',
                  to: '/integrations/javascript/Fetch',
                },
                {
                  label: 'XMLHttpRequest',
                  to: '/integrations/javascript/XMLHttpRequest',
                },
              ],
            },
            {
              title: 'PHP integrations',
              items: [
                {
                  label: 'Laravel',
                  to: '/integrations/php/Laravel',
                },
                {
                  label: 'Symfony',
                  to: '/integrations/php/Symfony',
                },
                {
                  label: 'Yii',
                  to: '/integrations/php/Yii',
                },
                {
                  label: 'HTTP',
                  to: '/integrations/php/http_1',
                }
              ],
            },
            {
              title: 'Python integrations',
              items: [
                {
                  label: 'Flask',
                  to: '/integrations/python/Flask',
                },
                {
                  label: 'Django',
                  to: '/integrations/python/Django',
                },
                {
                  label: 'Requests',
                  to: '/integrations/python/Requests',
                },
                {
                  label: 'HTTP',
                  to: '/integrations/python/HTTP_Client',
                }
              ],
            },
            {
              title: 'Other integrations',
              items: [
                {
                  label: 'Golang',
                  to: '/integrations/go/NewRequest',
                },
                {
                  label: 'Ruby',
                  to: '/integrations/ruby/Unirest',
                },
                {
                  label: 'R',
                  to: '/integrations/r/httr',
                },
                {
                  label: 'Swift',
                  to: '/integrations/swift/NSURLSession',
                },
                {
                  label: 'All integrations',
                  to: '/integrations',
                },
              ],
            }
          ],
          copyright: `Worldwide Live News API for your Next project `,
        },
        prism: {
          theme: require('prism-react-renderer/themes/palenight'),
          additionalLanguages: [
            'csharp',
            'dart',
            'http',
            'java',
            'kotlin',
            'php',
            'ruby',
            'rust',
            'swift',
              'ocaml',
              'go',
              'clojure',
          ],
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
