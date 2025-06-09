
import { VueCropper } from 'vue-cropper'


  
export interface CropperProps {
    src: string;
    width?: number;
    height?: number;
    outputType?: string;
    outputSize?: number;
    info?: boolean;
    fixed?: boolean;
    autoCrop?: boolean;
    centerBox?: boolean;
    mode?: string;
    limitMinSize?: number;
    fillColor?: string;
  }

export interface CropperExpose {
    exportImage: () => void;
    cropper: VueCropper;
    imgSrc: string;
  }

export interface CropperEmits {
    (e: 'realTime', data: any): void;
    (e: 'imgMoving', data: any): void;
    (e: 'cropMoving', data:any): void;
    (e: 'imgLoad', data: any): void;
  }