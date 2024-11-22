import type { CSSProperties } from 'vue'

type CardShadow = "always" | "hover" | "never"

export interface CardProps {
    header?: string; // 标题
    content?: string; // 内容
    footer?: string; // 底部
    shadow?: CardShadow; // 阴影显示时机
    contentStyle?:CSSProperties; // 内容自定义样式
    contentClass?: string; // 内容自定义类名
}
