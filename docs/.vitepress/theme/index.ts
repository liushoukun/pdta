import { h, nextTick, watch } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { createMermaidRenderer } from 'vitepress-mermaid-renderer'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData()

    const initMermaid = () => {
      const mermaidRenderer = createMermaidRenderer({
        theme: isDark.value ? "dark" : "forest",
        startOnLoad: true,
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
        },
        securityLevel: "strict",
      });
      // // 可选：自定义工具栏配置
      mermaidRenderer.setToolbar({
        showLanguageLabel: false,
        desktop: {
          copyCode: "enabled",
          toggleFullscreen: "enabled",
          resetView: "enabled",
          zoomOut: "enabled",
          zoomIn: "enabled",
          zoomLevel: "enabled",
          download: "enabled",
        },
        fullscreen: {
          copyCode: "disabled",
          toggleFullscreen: "enabled",
          resetView: "disabled",
          zoomLevel: "disabled",
        },
        downloadFormat: "svg",
      });
    }

    // 初始化 Mermaid
    nextTick(() => initMermaid())

    // 监听主题切换，重新渲染 Mermaid 图表
    watch(
      () => isDark.value,
      () => {
        initMermaid()
      }
    )

    return h(DefaultTheme.Layout)
  }
} satisfies Theme
