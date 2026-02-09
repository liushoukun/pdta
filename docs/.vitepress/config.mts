import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar({
  title: "PDTA Protocol - 产研测AI同频协议",
  description: "Product-Development-Test-AI Alignment Protocol | 产研测AI同频协议规范体系",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '产品文档', link: '/product/' },
      { text: '用户手册', link: '/user/' },
      { text: '需求管理', link: '/requirement/' },
      { text: '技术文档', link: '/technical/' },
      { 
        text: '更多', 
        items: [
          { text: '运维手册', link: '/operations/' },
          { text: '培训资料', link: '/training/' },
          { text: '项目管理', link: '/project/' },
          { text: '知识库', link: '/knowledge/' },
          { text: '更新日志', link: '/CHANGELOG' }
        ]
      }
    ],
    // 自定义侧边栏
    sidebar: [
      
    ],
    // 自定义社交链接
    socialLinks: [
    ],
  
  },
  vite: {
    optimizeDeps: {
      include: [
        "mermaid",
        "dayjs",
        "debug",
        "@braintree/sanitize-url",
        "cytoscape",
        "cytoscape-cose-bilkent",
      ],
      exclude: ["vitepress"],
    },
  }
},{

    documentRootPath: 'docs',
    collapsed: false,
    capitalizeFirst: true,
    useFolderTitleFromIndexFile: true,
    useTitleFromFrontmatter: true,
    useFolderLinkFromIndexFile: true,      // ⭐ 关键：让文件夹可点击
    sortMenusByFrontmatterOrder: true

}))
