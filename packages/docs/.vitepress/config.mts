import { defineConfig } from 'vitepress'
import { containerPreview,componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: 'public/logo.ico' }]],
  title: "云墨UI",
  description: "一个个人UI组件库",
  base: "/ym-UI/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '快速开始', link: '/get-start' },
      { text: '组件', link: '/components/button' }
    ],
    logo: '/public/logo.svg',
    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Alert 警示', link: '/components/alert' },
          {text: 'ContextMenu 右键菜单', link: "/components/contextMenu"},
          {text: 'Tooltip 提示', link: '/components/tooltip'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  
})

