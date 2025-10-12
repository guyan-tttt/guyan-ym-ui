<template>
  <!-- <DraggableList 
    v-model:items="list" 
    axis="vertical"
  >
    <template #item="{ item, index }">
      <div class="custom-item">
        <span class="handle">☰</span>
        {{ item.text }}
      </div>
    </template>
  </DraggableList> -->

  <!-- <Upload type="default"  v-model="fileList" @file-change="updateChange" draggable>
     <img v-if="imgSrc" :src="imgSrc" alt="" class="img" > 
  </Upload> -->
  <!-- <ImageMark
    ref="imageMarkRef"
    :utils="['rect', 'circle']"
    src="https://jeek-space-blog.top:3000/images/article/d1f2ec4df6a8ca406690312ca69b8d00.jpeg"
  ></ImageMark>
  <ym-button @click="exportData">导出数据</ym-button>
  <ym-button @click="update">渲染数据</ym-button>
  <ym-button @click="clear">清空数据</ym-button>
  <ym-button @click="hidden">隐藏数据</ym-button> -->
  <!-- <ImageCropper
    src="https://jeek-space-blog.top:3000/images/article/c286943e69f11921ebff214c3fa1e1dd.png"
  ></ImageCropper> -->
  <!-- <BarCode value="https://example.com"></BarCode> -->
   <!-- <RichText :content="strContent" :is-img-preview="true"></RichText> -->
    <Markdown width="1000px" v-model="strContent"   />
    <LightCode :code="strContent" height="100px" theme=""></LightCode>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import Upload from './components/Upload.vue'
import ImageMark from '../../components/ImageMark/ImageMark.vue';
import ImageCropper from './components/ImageCropper.vue';
import BarCode from './components/BarCode.vue';
import RichText from '../../components/RichText/RichText.vue';
import Markdown from './components/Markdown.vue';
import LightCode from '../../components/LightCode/LightCode.vue'

const strContent = ref(`
import {  withInstall } from '@ym-UI/utilsimport {  withInstall } from '@ym-UI/utils'import {  withInstall } from '@ym-UI/utils'import {  withInstall } from '@ym-UI/utils''
import Upload from './Upload.vue'

// 导出组件
export const YmUpload = withInstall(Upload)

export default YmUpload

// 导出类型
export * from "./type"
`)

// const imageMarkRef = ref<any>(null);
// const list  = []
// const exportData = () => {
//   list.value = imageMarkRef.value?.exportData();
//   console.log(list.value);
// }

// const update = () => {
//   imageMarkRef.value?.update(list.value)
//   console.log('update');
// }

// const clear = () => {
//   imageMarkRef.value?.clear()

// }

// const hidden = () => {
//   imageMarkRef.value?.hidden()
// }
</script>

<style>
.custom-item {
  display: flex;
  align-items: center;
  padding: 16px;
  transition: all 0.3s ease;
}

.handle {
  margin-right: 12px;
  cursor: grab;
}
.img {
  width: 180px;
  height: 180px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px;
}
</style>