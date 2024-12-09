interface ImageViewerProps {
    urlList: string[] // 图片列表
    zIndex?: number // 层级
    initialIndex?: number // 初始索引
    hideOnClickModal?: boolean // 点击遮罩层是否关闭
    zoomRate?: number // 缩放比例
    minScale?: number // 最小缩放比例
    maxScale?: number // 最大缩放比例
    closeOnPressEsc?: boolean // 按下esc关闭
}

interface ImageViewerEmits {
    (e: "close"): void
    (e: "switch", url: string, index: number): void
    (e: "rotate", deg: number):void
    (e: "wheel"):void
}

interface ImageViewerExpose {
    close: () => void
    open: () => void
    setActiveItem: (index: number) => void
}