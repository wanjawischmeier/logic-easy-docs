import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: "LogicEasy",
  description: "Documentation for LogicEasy",
  base: '/logic-easy/docs/',
  lang: 'en-US',

  themeConfig: {
    logo: '/le_128.png',

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
          {
            text: 'Truth Table',
            link: '/views/truth-table',
            items: [
              { text: 'Editing Output Values', link: '/views/truth-table#editing-output-values' },
              { text: 'Search Function', link: '/views/truth-table#search-function' },
              { text: 'Legend', link: '/views/truth-table#legend' },
              { text: 'Settings', link: '/views/truth-table#settings' },
              { text: 'Download Options', link: '/views/truth-table#download-options' }
            ]
          },
          { text: 'Karnaugh-Veitch', link: '/views/karnaugh-veitch' },
          {
            text: 'Quine McCluskey',
            link: '/views/quine-mccluskey/',
            items: [
              {
                text: 'Grouping Table',
                link: '/views/quine-mccluskey/grouping-table',
                items: [
                  { text: 'Editing Output Values', link: '/views/quine-mccluskey#editing-output-values' },
                  { text: 'Search Function', link: '/views/quine-mccluskey#search-function' },
                  { text: 'Legend', link: '/views/quine-mccluskey#legend' },
                  { text: 'Settings', link: '/views/quine-mccluskey#settings' },
                  { text: 'Download Options', link: '/views/quine-mccluskey#download-options' }
                ]
              },
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
