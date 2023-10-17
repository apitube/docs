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
    id: 'integrations',
    path: 'content/integrations',
    routeBasePath: '/integrations',
    sidebarPath: require.resolve('./sidebars-default.js'),
    // editUrl: 'htrtrt'
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
              label: 'Documentation',
            },
            {
              to: 'integrations',
              sidebarId: 'tutorialSidebar',
              label: 'Integrations',
              position: 'left'
            },
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
          theme: require('prism-react-renderer/themes/oceanicNext'),
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
