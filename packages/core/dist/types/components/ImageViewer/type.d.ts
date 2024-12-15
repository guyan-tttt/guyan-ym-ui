export interface ImageViewerProps {
    urlList: string[];
    zIndex?: number;
    initialIndex?: number;
    hideOnClickModal?: boolean;
    zoomRate?: number;
    minScale?: number;
    maxScale?: number;
    closeOnPressEsc?: boolean;
}
export interface ImageViewerEmits {
    (e: "close"): void;
    (e: "switch", url: string, index: number): void;
    (e: "rotate", deg: number): void;
    (e: "wheel"): void;
}
export interface ImageViewerExpose {
    close: () => void;
    open: () => void;
    setActiveItem: (index: number) => void;
}
