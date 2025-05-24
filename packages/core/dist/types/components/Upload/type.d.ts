/**
 * 上传文件对象接口
 * @property uid - 唯一标识符
 * @property name - 文件名
 * @property size - 文件大小（字节）
 * @property type - MIME类型
 * @property status - 上传状态：准备/上传中/成功/失败
 * @property raw - 原始File对象
 * @property progress - 上传进度（0-100）
 */
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    type: string;
    status: 'ready' | 'uploading' | 'success' | 'error';
    raw: File;
    progress: number;
    url?: string;
}
export type PropsType = "default" | "avatar" | "picture-list";
/**
 * 组件属性定义
 * @property multiple - 是否支持多选文件
 * @property accept - 接受的文件类型
 * @property maxSize - 最大文件大小（MB）
 * @property action - 上传接口地址
 * @property disabled - 是否禁用
 */
export interface UploadProps {
    multiple?: boolean;
    accept?: string;
    maxSize?: number;
    action?: string;
    disabled?: boolean;
    type?: PropsType;
    draggable?: boolean;
    modelValue?: UploadFile[];
}
export interface PictureItem {
    url: string;
    uid: string;
    file: UploadFile | null;
}
export interface UploadEmits {
    (e: 'file-change', files: UploadFile[]): void;
    (e: 'upload', files: UploadFile[]): void;
    (e: 'remove', files: UploadFile): void;
    (e: 'upload-success', arg: UploadArgs): void;
    (e: 'upload-error', arg: UploadArgs): void;
    (e: 'update:modelValue', files: UploadFile[]): void;
}
export interface UploadArgs {
    file: UploadFile;
    response?: any;
    error?: any;
}
