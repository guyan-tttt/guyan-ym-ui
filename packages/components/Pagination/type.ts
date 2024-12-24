export type PaginationSize = 'small' | 'medium' | 'large'

export interface PaginationProps {
    size?: PaginationSize // 大小
    background?: boolean // 是否显示背景
    pageSize?: number // 每页显示条数
    total: number // 总条数
    pagerCount?: number // 显示的页码个数
    currentPage: number // 当前页
    pageSizes?: number[] // 每页显示个数选择器的选项设置
    prevText?:string // 替代图标显示的上一页文字
    nextText?: string // 替代图标显示的下一页文字
    disabled?: boolean // 是否禁用
    prevIcon?: string // 替代图标显示的上一页图标
    nextIcon?: string // 替代图标显示的下一页图标
    jumper?: boolean // 是否使用跳页
    sizeSelector?: boolean // 是否使用数据条数选择器
    totalor?: boolean // 是否显示总条数
}

export interface PaginationEmits {
    (e: "size-change",val: number):void
    (e: "current-change",val: number):void
    (e: "prev-click", val: number):void
    (e: "next-click", val: number):void
}
