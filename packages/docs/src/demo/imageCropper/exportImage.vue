<template>
    <div>
        <ym-image-cropper
            ref="cropperRef"
            src="https://jeek-space-blog.top:3000/images/article/c286943e69f11921ebff214c3fa1e1dd.png"
        ></ym-image-cropper>
        <div style="margin-top: 20px">
            <ym-button @click="preview" type="primary" round >预览</ym-button>
            <ym-button @click="download" type="primary" round >下载</ym-button>
        </div>
        <ym-image-viewer hideOnClickModal ref="imageViewRef"  :urlList="[viewUrl]"></ym-image-viewer>
    </div>
</template>

<script setup lang="ts">
import { YmImageCropper , type CropperExpose, YmImageViewer, type ImageViewerExpose} from 'guyan-ym-ui'
import { ref } from 'vue';

const cropperRef = ref<CropperExpose>()
const imageViewRef = ref<ImageViewerExpose>()

const viewUrl = ref('');

const preview = async() => {
    const url = await cropperRef.value?.exportImage();
    if(!url) return;
    viewUrl.value = url as string
    imageViewRef.value?.open();
}

const download = async() => {
    const url = await cropperRef.value?.exportImage();
    if(!url) return;
    const a = document.createElement('a');
    a.href = url as string;
    a.download = 'image';
    a.click();
}
</script>
 
<style scoped>

</style>