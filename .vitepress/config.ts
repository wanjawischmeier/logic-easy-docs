import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "LogicEasy - Documentation",
  description: "Documentation for LogicEasy",
  base: '/logic-easy/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
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
    ]
  }
})
