import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "LogicEasy",
  description: "Documentation for LogicEasy",
  base: '/logic-easy/docs/',
  lang: 'en-US',

  themeConfig: {
    logo: '/iti-logo.png',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Try It', link: '/redirect-app' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Docs', link: '/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started/',
        items: [
          { text: 'Combinatorial Circuit', link: '/getting-started/combinatorial-circuit' },
          { text: 'State Machine', link: '/getting-started/state-machine' }
        ],
      },
      {
        text: 'Header',
        link: '/header/',
        items: [
          { text: 'Project', link: '/header/project' },
          { text: 'View', link: '/header/view' },
          { text: 'Export', link: '/header/export' }
        ],
      },
      {
        text: 'Views',
        link: '/views/',
        items: [
          { text: 'Truth Table', link: '/views/truth-table' },
          { text: 'Karnaugh-Veitch', link: '/views/karnaugh-veitch' },
          {
            text: 'Quine McCluskey',
            link: '/views/quine-mccluskey/',
            items: [
              { text: 'Grouping Table', link: '/views/quine-mccluskey/grouping-table' },
              { text: 'Prime Implicant Table', link: '/views/quine-mccluskey/prime-implicant-table' }
            ]
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wanjawischmeier/logic-easy' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You | <a href="https://github.com/wanjawischmeier/logic-easy" target="_blank" rel="noopener">GitHub</a>'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
