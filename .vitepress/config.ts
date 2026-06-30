import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math', 'maction', 'maligngroup', 'malignmark', 'menclose', 'merror',
  'mfenced', 'mfrac', 'mi', 'mlongdiv', 'mmultiscripts', 'mn', 'mo',
  'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mscarries',
  'mscarry', 'msgroup', 'mstack', 'msline', 'msrow', 'mstyle', 'msub',
  'msup', 'msubsup', 'mtable', 'mtd', 'mtr', 'munder', 'munderover',
  'semantics', 'annotation', 'annotation-xml'
]

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
      { text: 'Try It', link: 'https://wanjawischmeier.github.io/logic-easy/' }
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
        items: [
          { text: 'Truth Table', link: '/views/truth-table' },
          { text: 'Karnaugh-Veitch', link: '/views/karnaugh-veitch' },
          {
            text: 'Quine McCluskey',
            link: '/views/quine-mccluskey/',
            items: [
              { text: 'Grouping Table', link: '/views/quine-mccluskey/grouping-table' },
              { text: 'Prime Implicants', link: '/views/quine-mccluskey/prime-implicants' }
            ]
          },
          { text: 'LogicCircuits', link: '/views/logic-circuits' },
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
  },
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
})
