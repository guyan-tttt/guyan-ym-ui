<template>
    <div
      class="ym-image-cropper"
      >
      <div
        class="ym-image-cropper__content-cropper"
        :style="{
        width: imageSize.width + 'px',
        height: imageSize.height + 'px'
        }"
        >
        <vue-cropper
          :style="{
          width: imageSize.width + 'px',
          height: imageSize.height + 'px'
          }"
          ref="cropperRef"
          :outputType="props.outputType"
          :outputSize="props.outputSize"
          :fixed="props.fixed"
          :info="props.info"
          :autoCrop="true"
          autoCropWidth="80%"
          autoCropHeight="80%"
          :centerBox="props.centerBox"
          :mode="props.mode"
          :limitMinSize="props.limitMinSize"
          :fillColor="props.fillColor"
          v-bind="attrs"
          :img="props.src"
          @realTime="realTime"
          @imgMoving="imgMoving"
          @cropMoving="cropMoving"
          @imgLoad="imgLoad"
          ></vue-cropper>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { VueCropper }  from "vue-cropper";
    import {  ref, withDefaults, useAttrs } from 'vue';
    import 'vue-cropper/dist/index.css'
    import type { CropperEmits, CropperExpose, CropperProps } from './type'
  
    defineOptions({
      name: 'YmImageCropper',
      inheritAttrs: false,
    })
    
    const props = withDefaults(defineProps<CropperProps>(), {
      src: '',
      width: 600,
      height: 300,
      outputType: 'png',
      outputSize: 1,
      info: true,
      fixed: false,
      autoCrop: true,
      centerBox: true,
      mode: 'cover',
      limitMinSize: 0,
      fillColor: '#000'
    })
  
    const emits = defineEmits<CropperEmits>();
  
    const attrs = useAttrs()
    const imageSize = ref({
      width: props.width || 600,
      height: props.height || 300
    })
  
    const cropperRef = ref<typeof VueCropper>(null);
  
    const realTime = (data:any) => {
      emits('realTime', data);
    }
    const imgMoving = (data:any) => {
      emits('imgMoving', data);
    }
    const cropMoving = (data:any) => {
      emits('cropMoving', data);
    }
    const imgLoad = (data:any) => {
      emits('imgLoad', data);
    }
  
    const exportImage = () => {
      return new Promise((resolve) => {
        cropperRef.value.getCropData((data: string) => {
          resolve(data);
          })
      })
  }
  
  defineExpose<CropperExpose>({
      exportImage,
      cropper: cropperRef.value!,
      imgSrc: props.src
  })
  </script>
  
  <style scoped>
 @import './style.css';
  </style>