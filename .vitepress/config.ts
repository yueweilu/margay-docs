import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Margay User Guide',
  base: '/margay-docs/',
  cleanUrls: true,

  locales: {
    root: {
      label: 'English', lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/agents' }
        ],
        sidebar: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/installation' },
          { text: 'AI Assistants', link: '/agents' },
          { text: 'Digital Employees', link: '/assistants' },
          { text: 'Skills', link: '/skills' },
          { text: 'Settings', link: '/settings' },
          { text: 'WebUI', link: '/webui' }
        ]
      }
    },
    'zh-CN': {
      label: '简体中文', lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-CN/' },
          { text: '指南', link: '/zh-CN/agents' }
        ],
        sidebar: [
          { text: '首页', link: '/zh-CN/' },
          { text: '关于', link: '/zh-CN/installation' },
          { text: 'AI 助手', link: '/zh-CN/agents' },
          { text: '数字员工', link: '/zh-CN/assistants' },
          { text: '技能', link: '/zh-CN/skills' },
          { text: '设置', link: '/zh-CN/settings' },
          { text: 'WebUI', link: '/zh-CN/webui' }
        ]
      }
    },
    ja: {
      label: '日本語', lang: 'ja-JP',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'ガイド', link: '/ja/agents' }
        ],
        sidebar: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'について', link: '/ja/installation' },
          { text: 'AIアシスタント', link: '/ja/agents' },
          { text: 'デジタル従業員', link: '/ja/assistants' },
          { text: 'スキル', link: '/ja/skills' },
          { text: '設定', link: '/ja/settings' },
          { text: 'WebUI', link: '/ja/webui' }
        ]
      }
    }
  },
  themeConfig: {
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/YW1975/Margay' }],
    footer: { message: 'Made with love by the Margay team', copyright: 'Copyright © 2026 Margay' }
  }
})
