import { CSSProperties } from 'vue';

type CardShadow = "always" | "hover" | "never";
export interface CardProps {
    header?: string;
    content?: string;
    footer?: string;
    shadow?: CardShadow;
    contentStyle?: CSSProperties;
    contentClass?: string;
}
export {};
