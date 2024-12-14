export type imageLoadingType = "eager" | "lazy"

export type fitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'


export interface ImageProps {
    src:string // 图片地址
    fit?: fitType // 图片填充方式
    hideOnClickModal?: boolean //  是否点击遮罩层后隐藏图片
    loading?: imageLoadingType // 加载中图片
    lazy?: boolean // 是否懒加载
    scrollContainer?: string | HTMLElement // 滚动容器,容器必须是一个固定的元素，且image滚动的变化不会影响容器元素
    alt?: string // 图片描述
    previewSrcList?: string[] // 预览图片列表
    zIndex?: number // 层级
    initialIndex?: number // 初始预览索引
    closeOnPressEscape?:boolean // 是否支持按下 ESC 关闭预览
    zoomRate?: number // 缩放比例
    minScale?: number // 最小缩放比例
    maxScale?: number // 最大缩放比例
}

export interface ImageEmits {
    (e:"load", event: Event): void
    (e: "error", event: Event) : void
    (e: "switch", url:string):void
    (e: "close"): void
    (e: "show", event: Event): void
}