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
    uid: string
    name: string
    size: number
    type: string
    status: 'ready' | 'uploading' | 'success' | 'error'
    raw: File
    progress: number,
    url?: string // 图片模式下的url
  }
  export type PropsType = "default" | "avatar" | "picture-list"
  
  /**
   * 组件属性定义
   * @property multiple - 是否支持多选文件
   * @property accept - 接受的文件类型
   * @property maxSize - 最大文件大小（MB）
   * @property action - 上传接口地址
   * @property disabled - 是否禁用
   */
  export interface UploadProps {
    multiple?: boolean // 是否支持多选文件
    accept?: string // 接受的文件类型
    maxSize?: number // 最大文件大小（MB）
    action?: string // 上传接口地址
    disabled?: boolean // 是否禁用
    type?: PropsType // 上传组件类型
    draggable?: boolean // 是否支持拖拽上传
    modelValue?: UploadFile[] // 上传文件列表
  }
//   图片模式图片列表项接口
  export interface PictureItem {
    url: string
    uid: string
    file: UploadFile | null
  }
  // 组件事件定义
  export interface UploadEmits {
    (e: 'file-change', files: UploadFile[]): void // 文件改变事件
    (e: 'upload', files: UploadFile[]): void // 上传事件
    (e: 'remove', files: UploadFile): void // 删除事件
    (e: 'upload-success', arg: UploadArgs): void // 上传成功事件
    (e: 'upload-error', arg:UploadArgs): void // 上传失败事件
    (e: 'update:modelValue', files: UploadFile[]): void // 上传文件列表更新事件
  }

  export interface UploadArgs {
    file: UploadFile
    response?: any
    error?: any
  }
  