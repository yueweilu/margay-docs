import { defineConfig } from 'vitepress'
export default defineConfig({
  title: 'Margay User Guide', base: '/margay-docs/', cleanUrls: true,
  locales: {
    root: { label: 'English', lang: 'en-US', themeConfig: {
      nav: [{text:'Home',link:'/'},{text:'Guides',link:'/agents'}],
      sidebar: [
        {text:'Home',link:'/'},{text:'About',link:'/installation'},
        {text:'Agents',link:'/agents'},{text:'Connect',link:'/connect'},
        {text:'Plugins',link:'/plugins'},{text:'Employees',link:'/assistants'},
        {text:'Skills',link:'/skills'},{text:'Task Center',link:'/tasks'},
        {text:'System',link:'/system'},{text:'Settings',link:'/settings'},
        {text:'WebUI',link:'/webui'}
      ]
    }},
    'zh-CN': { label: '简体中文', lang: 'zh-CN', themeConfig: {
      nav: [{text:'首页',link:'/zh-CN/'},{text:'指南',link:'/zh-CN/agents'}],
      sidebar: [
        {text:'首页',link:'/zh-CN/'},{text:'关于',link:'/zh-CN/installation'},
        {text:'Agents',link:'/zh-CN/agents'},{text:'连接',link:'/zh-CN/connect'},
        {text:'插件',link:'/zh-CN/plugins'},{text:'数字员工',link:'/zh-CN/assistants'},
        {text:'技能',link:'/zh-CN/skills'},{text:'任务中心',link:'/zh-CN/tasks'},
        {text:'系统',link:'/zh-CN/system'},{text:'设置',link:'/zh-CN/settings'},
        {text:'WebUI',link:'/zh-CN/webui'}
      ]
    }},
    ja: { label: '日本語', lang: 'ja-JP', themeConfig: {
      nav: [{text:'ホーム',link:'/ja/'},{text:'ガイド',link:'/ja/agents'}],
      sidebar: [
        {text:'ホーム',link:'/ja/'},{text:'について',link:'/ja/installation'},
        {text:'Agents',link:'/ja/agents'},{text:'接続',link:'/ja/connect'},
        {text:'プラグイン',link:'/ja/plugins'},{text:'従業員',link:'/ja/assistants'},
        {text:'スキル',link:'/ja/skills'},{text:'タスク',link:'/ja/tasks'},
        {text:'システム',link:'/ja/system'},{text:'設定',link:'/ja/settings'},
        {text:'WebUI',link:'/ja/webui'}
      ]
    }}
  },
  themeConfig: { search: {provider:'local'},
    socialLinks: [{icon:'github',link:'https://github.com/YW1975/Margay'}],
    footer: {message:'Made with love by the Margay team',copyright:'Copyright © 2026 Margay'}
  }
})
