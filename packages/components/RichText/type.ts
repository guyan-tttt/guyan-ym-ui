import {  type ImageViewerProps } from '../ImageViewer';
import { type Ref } from 'vue';
import  dompurify  from 'dompurify';

export interface RichTextProps {
    content: string;
    config?: object; 
    isClean?: boolean;
    isImgPreview?: boolean;
    previewConfig?: ImageViewerProps
}

export interface RichTextEmits {
    (e: 'click', event: MouseEvent): void;
}

export interface RichTextInstace {
    ref: Ref<HTMLElement | void>
    normalizationHtml: (html: string) => void;
    cleanContent: (content: string) => TrustedHTML;
    dompurifyIstance: typeof dompurify;
}