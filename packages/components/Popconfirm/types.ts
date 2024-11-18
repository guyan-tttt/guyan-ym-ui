import  type { ButtonType  } from '../Button'

export interface  PopconfirmProps {
    title: string // 提示内容
    confirmButtonText?: string // 确认按钮文字
    cancelButtonText?: string // 取消按钮文字
    confirmButtonType?: ButtonType // 确认按钮类型
    cancelButtonType?: ButtonType // 取消按钮类型
    icon?: string // 提示图标
    iconColor?: string // 提示图标颜色
    hideIcon?: boolean // 是否隐藏提示图标
    hideAfter?: number // 自动隐藏时间
    width?: number | string // 弹出框宽度
}

export interface PopconfirmEmits {
    (e: "confirm",value: MouseEvent):void, // 点击确认按钮触发
    (e: "cancel",value: MouseEvent):void // 点击取消按钮触发
}