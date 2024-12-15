export type imageLoadingType = "eager" | "lazy";
export type fitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
export interface ImageProps {
    src: string;
    fit?: fitType;
    hideOnClickModal?: boolean;
    loading?: imageLoadingType;
    lazy?: boolean;
    scrollContainer?: string | HTMLElement;
    alt?: string;
    previewSrcList?: string[];
    zIndex?: number;
    initialIndex?: number;
    closeOnPressEscape?: boolean;
    zoomRate?: number;
    minScale?: number;
    maxScale?: number;
}
export interface ImageEmits {
    (e: "load", event: Event): void;
    (e: "error", event: Event): void;
    (e: "switch", url: string): void;
    (e: "close"): void;
    (e: "show", event: Event): void;
}
