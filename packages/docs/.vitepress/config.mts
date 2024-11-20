import { defineConfig } from 'vitepress'
import { containerPreview,componentPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: './logo.ico' }]],
  title: "云墨UI",
  description: "一个个人UI组件库",
  base: "/guyan-ym-ui/",
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '快速开始', link: '/get-start' },
      { text: '组件', link: '/components/button' },
      {text: "作者" ,link: '/team'}
    ],
    logo: '/logo.svg',
    sidebar: [
      {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
        ]
      },
      {
        text: '反馈组件',
        collapsed: false,
        items: [
          { text: 'Alert 警示', link: '/components/alert' },
          {text: 'ContextMenu 右键菜单', link: "/components/contextMenu"},
          {text: 'Tooltip 提示', link: '/components/tooltip'},
          {text: "Popconfirm 气泡确认", link: "/components/popconfirm"}
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guyan-tttt/guyan-ym-ui' },
      {
        icon: {
          svg: '<svg t="1732062519827" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4253" width="200" height="200"><path d="M512 992C246.895625 992 32 777.104375 32 512S246.895625 32 512 32s480 214.895625 480 480-214.895625 480-480 480z m242.9521875-533.3278125h-272.56875a23.7121875 23.7121875 0 0 0-23.71125 23.7121875l-0.024375 59.255625c0 13.08 10.6078125 23.7121875 23.6878125 23.7121875h165.96c13.104375 0 23.7121875 10.6078125 23.7121875 23.6878125v11.855625a71.1121875 71.1121875 0 0 1-71.1121875 71.1121875h-225.215625a23.7121875 23.7121875 0 0 1-23.6878125-23.7121875V423.1278125a71.1121875 71.1121875 0 0 1 71.0878125-71.1121875h331.824375a23.7121875 23.7121875 0 0 0 23.6878125-23.71125l0.0721875-59.2565625a23.7121875 23.7121875 0 0 0-23.68875-23.7121875H423.08a177.76875 177.76875 0 0 0-177.76875 177.7921875V754.953125c0 13.1034375 10.60875 23.7121875 23.713125 23.7121875h349.63125a159.984375 159.984375 0 0 0 159.984375-159.984375V482.36a23.7121875 23.7121875 0 0 0-23.7121875-23.6878125z" fill="#C71D23" p-id="4254"></path></svg>'
        }, 
      link: "https://gitee.com/DT-guyan/yunmo-ui"
     },
     {
      icon: {
        svg: '<svg t="1732062708037" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5261" width="200" height="200"><path d="M117.149737 906.850263V117.160081h789.690182v789.690182z m148.521374-641.706667v492.533657h248.873374V367.843556h145.025293v389.906101h98.735321V265.143596z" fill="#CB3837" p-id="5262"></path></svg>',

      },
      link: "https://www.npmjs.com/package/guyan-ym-ui"
     }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  
})

