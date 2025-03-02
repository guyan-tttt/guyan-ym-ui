<template>
  <div class="ym-upload" 
    :class="{
      [`is-${type}`]: type,
    }"
  > 

  <transition-group name="ym-upload-picture-list" tag="ul" class="ym-upload-picture-list" v-if="type === 'picture-list'">
      <li 
        v-for="file in pictureList" 
        :key="file.uid"
        class="ym-upload-list__item "
      >
        <ym-icon @click="handleRemovePicture(file)" class="picture-list-item__close" icon="trash" size="xl" color="#999"></ym-icon>
        <img :src="file.url" alt="">
      </li>
      <div 
        key="upload"
        class="ym-upload__dragger-picture-list"
        :class="{ 'is-dragover': dragState }"
        @dragenter.prevent="handleDragEnter"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <div class="ym-upload__picture-list-item" v-if="type ==='picture-list'">
          <ym-icon  icon="plus" size="2xl" color="#8c939d"></ym-icon>
        </div>
      <input 
        ref="fileInput"
        type="file" 
        class="ym-upload__input"
        :multiple="multiple"
        :accept="accept"
        @change="handleFileChange"
      />
    </div>
  </transition-group>
    
    <div
      v-else
      class="ym-upload__dragger"
      :class="{ 'is-dragover': dragState }"
      @dragenter.prevent="handleDragEnter"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <div class="ym-upload__content">
        <div class="ym-upload__default" v-if="type ==='default'">
          <ym-icon :icon="uploadIcon" c />
          <div class="ym-upload__text">
            将文件拖到此处或<em>点击上传</em>
          </div>
        </div>
        <div class="ym-upload__avatar" v-else-if="type ==='avatar'">
          <ym-icon v-if="fileList.length === 0" icon="plus" size="2xl" color="#8c939d"></ym-icon>
          <slot ></slot>
        </div>
      </div>
      <input 
        ref="fileInput"
        type="file" 
        class="ym-upload__input"
        :multiple="multiple"
        :accept="accept"
        @change="handleFileChange"
      />
    </div>

    <transition-group name="ym-upload-list" tag="ul" class="ym-upload-list" v-if="type === 'default'">
      <li 
        v-for="file in fileList" 
        :key="file.uid"
        class="ym-upload-list__item"
      >
        <div class="ym-upload-list__info">
          <ym-icon :icon="getFileIcon(file)" class="ym-upload-list__icon"  />
          <span class="ym-upload-list__name">{{ file.name }}</span>
          <span class="ym-upload-list__size">({{ formatFileSize(file.size) }})</span>
        </div>
        <div class="ym-upload-list__actions">
          <ym-icon 
            v-if="file.status === 'success'"
            icon="check-circle" 
            color="#67c23a"
          />
          <ym-icon 
            v-if="file.status === 'error'"
            icon="xmark-circle" 
            color="#f56c6c"
          />
          <ym-icon 
            v-if="file.status === 'uploading'"
            icon="spinner" 
            spin 
            color="#409eff"
          />
          <ym-icon 
            icon="xmark" 
            class="ym-upload-list__delete"
            @click="handleRemove(file)"
          />
        </div>
      </li>
    </transition-group>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { YmIcon } from 'guyan-ym-ui'
import { fetchAPI } from '@ym-UI/utils'
import { isArray, isNil } from 'lodash-es';

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
interface UploadFile {
  uid: string
  name: string
  size: number
  type: string
  status: 'ready' | 'uploading' | 'success' | 'error'
  raw: File
  progress: number
}
type PropsType = "default" | "avatar" | "picture-list"

/**
 * 组件属性定义
 * @property multiple - 是否支持多选文件
 * @property accept - 接受的文件类型
 * @property maxSize - 最大文件大小（MB）
 * @property action - 上传接口地址
 * @property disabled - 是否禁用
 */
interface UploadProps {
  multiple?: boolean // 是否支持多选文件
  accept?: string // 接受的文件类型
  maxSize?: number // 最大文件大小（MB）
  action?: string // 上传接口地址
  disabled?: boolean // 是否禁用
  type?: PropsType // 上传组件类型
  draggable?: boolean // 是否支持拖拽上传
  modelValue?: UploadFile[] // 上传文件列表
}

interface PictureItem {
  url: string
  uid: string
  file: UploadFile
}

// 组件属性默认值
const props = withDefaults(defineProps<UploadProps>(), {
  multiple: false,
  accept: '*/*',
  maxSize: 5,
  disabled: false,
  type: 'default',
  draggable: false,
  modelValue: () => []
})

// 定义组件事件
const emit = defineEmits(['file-change', 'upload', 'remove', 'upload-success', 'upload-error','update:modelValue'])

// DOM引用：文件输入框
const fileInput = ref<HTMLInputElement | null>(null)
// 拖拽状态
const dragState = ref(false)
// 文件列表（响应式数组）
const fileList = reactive<UploadFile[]>(props.modelValue)
// 图片墙列表
const pictureList = reactive<PictureItem[]>([])

/**
 * 计算上传区域图标
 * 根据accept类型返回对应图标
 */
const uploadIcon = computed(() => {
  if (props.accept.startsWith('image')) return 'image'
  if (props.accept.startsWith('video')) return 'video'
  return 'upload'
})

/* 拖拽事件处理 */
const handleDragEnter = () => {
  if (!props.disabled) dragState.value = true
}

const handleDragOver = () => {
  if (!props.disabled) dragState.value = true
}

const handleDragLeave = () => {
  dragState.value = false
}

/**
 * 处理文件拖放
 * @param e - 拖放事件对象
 */
const handleDrop = (e: DragEvent) => {
  if(props.disabled || !props.draggable) return
  dragState.value = false
  if (props.disabled) return
  const files = e.dataTransfer?.files
  if (files) processFiles(Array.from(files))
}

/**
 * 处理文件选择变化
 * @param e - 输入框变化事件
 */
const handleFileChange = (e: Event) => {
  
  const input = e.target as HTMLInputElement
  const files = input.files
  if (files) processFiles(Array.from(files))
  input.value = '' // 清空输入框以便重复选择相同文件
}

/**
 * 处理文件列表
 * @param files - 待处理的File对象数组
 */
const processFiles = async (files: File[]) => {
  
  for (const file of files) {
    // 判断是否超过最大限制
    if(fileList.length >= props.maxSize) return console.error('文件数量超过最大限制')
    if (!validateFile(file)) continue
    // 判断avatar模式
    if(props.type === 'avatar' || props.type === 'picture-list') {
      // 这两种模式下必须要传递图片
      const imgTypes = ['image/jpeg', 'image/png', 'image/gif','image/jpg','image/webp']
      if(!validateType(file,imgTypes)) return console.error(`当前模式下不支持该文件类型: ${file.type}`)
    }
    const uploadFile: UploadFile = {
      uid: Math.random().toString(36),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'ready',
      raw: file,
      progress: 0
    }
    // 判断是否是avatar模式,在该模式下,只允许上传一张图片
  if(props.type === 'avatar' && fileList.length >= 1) {
      fileList.shift()
  }
    fileList.push(uploadFile)
    // 图片墙模式
    props.type === 'picture-list' && pictureList.push({
      url: URL.createObjectURL(uploadFile.raw),
      uid: uploadFile.uid,
      file: uploadFile
    })
    emit('update:modelValue', fileList)
    if (props.action) {
      try {
        uploadFile.status = 'uploading'
        
        const formData = new FormData()
        formData.append('file', file)
        
        const { response, error } = await fetchAPI(props.action, {
          method: 'POST',
          data: formData,
          timeout: 30000, // 30秒超时
          credentials: 'include'
        })
        
        if (error) {
          throw new Error(error)
        }
        
        uploadFile.status = 'success'
        emit('upload-success', {
          file: uploadFile,
          response: await response?.json()
        })
      } catch (err) {
        uploadFile.status = 'error'
        emit('upload-error', {
          file: uploadFile,
          error: err instanceof Error ? err.message : '上传失败'
        })
      }
    }
  }
  
  emit('file-change', fileList)
}

/**
 * 文件验证
 * @param file - 待验证的File对象
 * @returns 是否通过验证
 */
const validateFile = (file: File) => {
  // 类型验证
  if (props.accept !== '*/*' && !validateType(file)) {
    console.error(`不支持的文件类型: ${file.type}`)
    return false
  }
  
  // 大小验证
  if (file.size > props.maxSize * 1024 * 1024) {
    console.error(`文件大小超过限制: ${props.maxSize}MB`)
    return false
  }
  
  return true
}

/**
 * 删除文件
 * @param file - 要删除的文件对象
 */
const handleRemove = (file: UploadFile) => {
  const index = fileList.findIndex(f => f.uid === file.uid)
  if (index > -1) {
    fileList.splice(index, 1)
    emit('remove', file)
    emit("update:modelValue", fileList)
  }
}

/**
 * 格式化文件大小
 * @param bytes - 文件大小（字节）
 * @returns 格式化后的字符串（如 1.23 MB）
 */
const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * 获取文件类型图标
 * @param file - 文件对象
 * @returns 对应的图标名称
 */
const getFileIcon = (file: UploadFile) => {
  const type = file.type.split('/')[0]
  const icons: Record<string, string> = {
    image: 'image',
    video: 'video',
    audio: 'music',
    text: 'file',
    application: 'file'
  }
  return icons[type] || 'file'
}

/**
 * 触发上传操作
 * 暴露给父组件调用
 */
const upload = () => {
  emit('upload', fileList)
}

const validateType = (file: File, types?: string[]) => {
  if(isNil(types) || !isArray(types) || types?.length === 0) return true
  for(const type of types) {
    if(file.type.includes(type)) return true
  }
  return false
}

// 移除图片
const handleRemovePicture = (picture: PictureItem) => {
    const index = pictureList.findIndex(p => p.uid === picture.uid)
    if(index > -1) {
      pictureList.splice(index, 1)
      handleRemove(picture.file)
    }
}

// 暴露方法给父组件
defineExpose({ upload })
</script>

<style scoped >
.ym-upload {
  /* width: 100%; */
  &.is-default {
    width: 100%;
  }
  &.is-avatar {
    width: 180px;
    height: 180px;
  }
 
  
  
  &__dragger {
    position: relative;
    width: 100%;
    height: 180px;
    border: 2px dashed #d9d9d9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;
    cursor: pointer;
    
    &:hover,
    &.is-dragover {
      border-color: #409eff;
    }

    .ym-upload__content {
      .ym-upload__default {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .ym-upload__picture-list {
          width: 180px;
          height: 180px;
      }
    }
  }
  
  &__text {
    margin-top: 8px;
    color: #606266;
    font-size: 14px;
    
    em {
      color: #409eff;
      font-style: normal;
    }
  }
  
  &__input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .ym-upload-picture-list {
    width: 90%;
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: wrap;
    li {
      padding: 0;
      width: 180px;
      height: 180px;
      position: relative;
      img {
        width: 180px;
        height: 180px;
        overflow: hidden;
        object-fit: cover;
        border-radius: 10px;
      }
      .picture-list-item__close {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: 0;
        transition: all 0.5s;
        font-size: 12px;
        cursor: pointer;
      }
      &:hover {
        .picture-list-item__close {
          opacity: 1;
          font-size: 18px;
        }
      }
    }
    .ym-upload__dragger-picture-list {
      width: 180px;
      height: 180px;
      position: relative;
      border: 2px dashed #d9d9d9;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: border-color 0.3s;
      cursor: pointer;
      &:hover,
      &.is-dragover {
        border-color: #409eff;
      }
      .ym-upload__picture-list-item {
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
  }
}

.ym-upload-list {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
  
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
    background-color: #f5f7fa;
    transition: all 0.3s;
    
    &:hover {
      background-color: #ebeff5;
    }
  }
  
  &__info {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  &__icon {
    flex-shrink: 0;
  }
  
  &__name {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__size {
    color: #909399;
  }
  
  &__actions {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  
  &__delete:hover {
    color: #f56c6c;
    cursor: pointer;
  }
}

.ym-upload-list-enter-active,
.ym-upload-list-leave-active {
  transition: all 0.3s;
}
.ym-upload-list-enter-from,
.ym-upload-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.ym-upload-picture-list-enter-active,
.ym-upload-picture-list-leave-active {
  transition: all 0.3s;
}
.ym-upload-picture-list-enter-from,
.ym-upload-picture-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 