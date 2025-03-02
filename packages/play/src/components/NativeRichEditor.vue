<template>
  <div class="native-editor">
    <!-- 工具栏 -->
    <div class="toolbar">
      <button @click="execCommand('bold')">B</button>
      <button @click="execCommand('italic')">I</button>
      <button @click="execCommand('underline')">U</button>
      
      <select @change="execCommand('fontName', $event.target.value)">
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times</option>
        <option value="Courier New">Courier</option>
      </select>
      
      <select @change="execCommand('fontSize', $event.target.value)">
        <option value="1">小</option>
        <option value="3">中</option>
        <option value="5">大</option>
      </select>
      
      <input type="color" @input="execCommand('foreColor', $event.target.value)">
      
      <button @click="execCommand('insertUnorderedList')">• 列表</button>
      <button @click="execCommand('justifyLeft')">←</button>
      <button @click="execCommand('justifyCenter')">↔</button>
      <button @click="execCommand('justifyRight')">→</button>
      
      <button @click="insertLink">链接</button>
      <button @click="insertImage">图片</button>
      <button @click="execCommand('removeFormat')">清除格式</button>
    </div>

    <!-- 编辑区域 -->
    <div 
      class="editor" 
      ref="editor"
      contenteditable="true"
      @input="handleInput"
      @paste="handlePaste"
    ></div>

    <!-- 图片上传对话框 -->
    <input 
      type="file" 
      ref="fileInput" 
      accept="image/*" 
      style="display: none"
      @change="handleImageUpload"
    >
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modelValue: String,
  imageUpload: Function
})
  // 预设样式
  const styleList = [
    { label: "标题一",value:'h1',style: "font-size: 24px; font-weight: bold; margin: 16px 0;" },
    { label: "标题二",value:'h2',style: "font-size: 20px; font-weight: bold; margin: 16px 0;"},
    {label: "标题三", value: "h3", style: "font-size: 18px; font-weight: bold; margin: 16px 0;"},
    {label: "标题四", value: "h4", style: "font-size: 16px; font-weight: bold; margin: 16px 0;"},
    {label: "标题五", value: "h5", style: "font-size: 14px; font-weight: bold; margin: 16px 0;"},
    {label: "正文", value: "p", style: "font-size: 14px; margin: 16px 0;"},
  ]
const emit = defineEmits(['update:modelValue'])

const editor = ref<HTMLElement>()
const fileInput = ref<HTMLInputElement>()

// 初始化内容
onMounted(() => {
  editor.value!.innerHTML = props.modelValue || ''
})

// 执行命令
const execCommand = (cmd: string, value?: string) => {
  document.execCommand(cmd, false, value)
  editor.value?.focus()
}

// 插入链接
const insertLink = () => {
  const url = prompt('输入链接地址:')
  if (url) {
    execCommand('createLink', url)
  }
}

// 插入图片
const insertImage = () => {
  if (props.imageUpload) {
    fileInput.value?.click()
  } else {
    const url = prompt('输入图片地址:')
    if (url) execCommand('insertImage', url)
  }
}

// 处理图片上传
const handleImageUpload = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  try {
    let url: string
    if (props.imageUpload) {
      url = await props.imageUpload(file)
    } else {
      url = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.readAsDataURL(file)
      })
    }
    
    execCommand('insertImage', url)
  } catch (error) {
    console.error('图片上传失败:', error)
  }
}

// 处理粘贴事件
const handlePaste = (e: ClipboardEvent) => {
  e.preventDefault()
  const text = e.clipboardData?.getData('text/plain') || ''
  document.execCommand('insertText', false, text)
}

// 同步内容
const handleInput = () => {
  emit('update:modelValue', editor.value?.innerHTML)
}

// 监听外部内容变化
watch(() => props.modelValue, (newVal) => {
  if (newVal !== editor.value?.innerHTML) {
    editor.value!.innerHTML = newVal || ''
  }
})
</script>

<style scoped>
.native-editor {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.toolbar {
  padding: 8px;
  background: #f5f7fa;
  border-bottom: 1px solid #ccc;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.toolbar button {
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.toolbar select, .toolbar input[type="color"] {
  height: 32px;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.editor {
  min-height: 300px;
  padding: 16px;
  outline: none;
}

.editor img {
  max-width: 100%;
  height: auto;
  margin: 8px 0;
}

.editor:focus {
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>