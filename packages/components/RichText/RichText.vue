<template>
    <div
        class="ym-rich-text"
        v-bind="$attrs"
        @click="emits('click', $event)"
    >
        <div
            ref="contentRef"
            class="ym-rich-text-content"
            @click="handleRichTextClick"
        >
            <slot v-if="$slots.default && !props.content" />
        </div>
        <ym-image-viewer
            ref="imageViewerRef"
            v-bind="previewConfig"
            :url-list="[previewSrc]"
        />
    </div>
</template>

<script setup lang="ts">
import { nextTick, ref , onMounted ,watch } from 'vue';
import dompurify from 'dompurify';
import { type ImageViewerExpose, YmImageViewer } from '../ImageViewer';
import type { RichTextInstace, RichTextProps, RichTextEmits } from './type'
defineOptions({
    inheritAttrs: false,
    name: 'YmRichText',
});

function replaceAllChildren(dom:HTMLElement, html:string) {
    nextTick(() => {
        Array.from(dom.childNodes).forEach(child => {
            child.remove();
        });
        dom.insertAdjacentHTML('beforeend', html);
    });
}
const props = withDefaults(defineProps<RichTextProps>(),{
    content: '',
    config: () => ({}),
    isClean: true,
    isImgPreview: false,
    previewConfig: () => ({
        urlList:[]
    }),

})

// 事件定义
const emits = defineEmits<RichTextEmits>();

// DOMPurify 实例
const dompurifyIstance = dompurify();

// 默认配置
// @ts-expect-error
const defaultConfig = dompurify?.defaults;

// 净化 HTML 内容，防止 XSS 攻击等安全问题
const cleanContent = (content:string): TrustedHTML => {
    if (!props.isClean) {
        return content;
    }
    // 合并配置
    const config = {
        ...defaultConfig,
        ...props.config,
    };
    return dompurifyIstance.sanitize(content, config);
};

// 内容容器
const contentRef = ref<HTMLElement>();

onMounted(() => {
    // 初始化内容
    normalizationHtml(cleanContent(props.content));
});
// 监听内容变化，重新渲染 HTML 结构
watch(() => props.content, html => {
    normalizationHtml(cleanContent(html));
});


// 渲染 HTML 内容
function normalizationHtml(html:TrustedHTML) {
    if (!html) {
        return;
    }
    nextTick(() => {
        // 渲染 HTML 内容
        contentRef.value && replaceAllChildren(contentRef.value, html as string);
    });
}
const previewSrc = ref('');
const imageViewerRef = ref<ImageViewerExpose>();
const handleRichTextClick = (e: any) => {
    if (!props.isImgPreview) {
        return;
    }
    // 点击图片时，显示预览弹框 
    if (e.target?.nodeName === 'IMG') {
        const imgUrl = e.target?.src;
        previewSrc.value = imgUrl;
        imageViewerRef.value?.open();
    }
};

defineExpose<RichTextInstace>({
    ref: contentRef,
    normalizationHtml,
    cleanContent,
    dompurifyIstance,
});
</script>

<style scoped>
@import url('./style.css')
</style>