import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Margay User Guide', base: '/margay-docs/', cleanUrls: true,
  locales: {
    root: { label: 'English', lang: 'en-US', title: 'Margay User Guide', description: 'Your AI assistant — beginner guides for Margay', themeConfig: {
      nav: [{text:'Home',link:'/'},
        {text:'Account',link:'/account'},{text:'Guides',link:'/agents'}],
      sidebar: [
        {text:'Home',link:'/'},{text:'About',link:'/installation'},
        {text:'Agents',link:'/agents'},{text:'Connect',link:'/connect'},
        {text:'Plugins',link:'/plugins'},{text:'Employees',link:'/assistants'},
        {text:'Skills',link:'/skills'},{text:'Task Center',link:'/tasks'},
        {text:'System',link:'/system'},{text:'Settings',link:'/settings'},
      ]
    }},
    'zh-CN': { label: '简体中文', lang: 'zh-CN', title: 'Margay 用户指南', description: '你的 AI 助手 — Margay 新手指南', themeConfig: {
        search: { provider: 'local', options: { translations: { button: { buttonText: '搜索文档' }, modal: { displayDetails: '显示详情', resetButtonTitle: '重置', noResultsText: '无结果', footer: { selectText: '选择', navigateText: '切换' } } } } },
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        outlineTitle: '本页目录',
        footer: { message: 'Margay 团队用心打造', copyright: 'Copyright © 2026 Margay' },
      nav: [{text:'首页',link:'/zh-CN/'},
        {text:'账户',link:'/zh-CN/account'},{text:'指南',link:'/zh-CN/agents'}],
      sidebar: [
        {text:'首页',link:'/zh-CN/'},{text:'关于',link:'/zh-CN/installation'},
        {text:'Agents',link:'/zh-CN/agents'},{text:'连接',link:'/zh-CN/connect'},
        {text:'插件',link:'/zh-CN/plugins'},{text:'数字员工',link:'/zh-CN/assistants'},
        {text:'技能',link:'/zh-CN/skills'},{text:'任务中心',link:'/zh-CN/tasks'},
        {text:'系统',link:'/zh-CN/system'},{text:'设置',link:'/zh-CN/settings'},
      ]
    }},
    ja: { label: '日本語', lang: 'ja-JP', title: 'Margay ユーザーガイド', description: 'あなたのAIアシスタント — Margay 初心者ガイド', themeConfig: {
        search: { provider: 'local', options: { translations: { button: { buttonText: '検索' }, modal: { displayDetails: '詳細', resetButtonTitle: 'リセット', noResultsText: '結果なし', footer: { selectText: '選択', navigateText: '移動' } } } } },
        docFooter: { prev: '前のページ', next: '次のページ' },
        darkModeSwitchLabel: '外観',
        sidebarMenuLabel: 'メニュー',
        returnToTopLabel: 'トップへ',
        outlineTitle: '目次',
        footer: { message: 'Margayチームが心を込めて作成', copyright: 'Copyright © 2026 Margay' },
      nav: [{text:'ホーム',link:'/ja/'},
        {text:'アカウント',link:'/ja/account'},{text:'ガイド',link:'/ja/agents'}],
      sidebar: [
        {text:'ホーム',link:'/ja/'},{text:'について',link:'/ja/installation'},
        {text:'Agents',link:'/ja/agents'},{text:'接続',link:'/ja/connect'},
        {text:'プラグイン',link:'/ja/plugins'},{text:'従業員',link:'/ja/assistants'},
        {text:'スキル',link:'/ja/skills'},{text:'タスク',link:'/ja/tasks'},
        {text:'システム',link:'/ja/system'},{text:'設定',link:'/ja/settings'},
      ]
    }}
  },
  themeConfig: { search: {provider:'local'},
    socialLinks: [{icon:'github',link:'https://github.com/YW1975/Margay'}],
    footer: {message:'Made with love by the Margay team',copyright:'Copyright © 2026 Margay'}
  }
})
