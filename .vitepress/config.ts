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
      {
        text: 'LogicEasy',
        link: () => {
          const path = window.location.pathname.replace(/\/docs(\/|$)/, '/');
          return window.location.origin + path;
        }
      },
      { text: 'Docs', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wanjawischmeier/logic-easy' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
