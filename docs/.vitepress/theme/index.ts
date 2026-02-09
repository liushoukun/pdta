import DefaultTheme from 'vitepress/theme'
import { useMermaidPanZoom } from 'vitepress-plugin-mermaid-pan-zoom'
import 'vitepress-plugin-mermaid-pan-zoom/dist/style.css'
import './custom.css'

export default {
  ...DefaultTheme,
  setup() {
    // 启用 Mermaid 图表的平移和缩放功能
    useMermaidPanZoom()
  }
}
