import type { Ref } from "vue"

export interface DialogProps {
    modelValue: boolean // 是否显示
    title?: string // 标题
    width?: string | number // 宽度
    fullscreen?: boolean // 是否全屏
    top?: string // 距离顶部距离
    modal?: boolean // 是否显示遮罩
    modalClass?: string // 遮罩样式
    lockScroll?: boolean // 是否锁定滚动
    openDelay?: number // 打开延时
    closeDelay?: number // 关闭延时
    closeOnClickModal?: boolean // 点击遮罩是否关闭
    closeOnPressEscape?: boolean // 按下ESC是否关闭
    showClose?: boolean // 是否显示关闭按钮
    beforeClose?: (done: () => void) => void // 关闭前的回调
    center?: boolean // 是否居中
    closeIcon?: string // 关闭图标
    zIndex?: number // 层级
    customClass?: string // 自定义类名
    appendTo?: string // 挂载节点
    header?: boolean // 是否显示头部
    footer?: boolean // 是否显示底部
    alginCenter?: boolean // 是否居中
}

export interface DialogEmits {
    (e: 'open'): void
    (e: 'close'): void
    (e: "opened"): void
    (e: "closed"): void
    (e: "update:modelValue", value: boolean): void
}

export interface DialogSlot {
    header: () => any
    footer: () => any
    default: () => any
}

export interface DialogInstance {
    visible: Ref<boolean>
    close: () => void
    open: () => void
}