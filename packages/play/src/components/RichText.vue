<template>
    <div
        class="rich-text"
        v-bind="$attrs"
        @click="emits('click', $event)"
    >
        <div
            ref="contentRef"
            class="rich-text-content"
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
import { nextTick, ref , onMounted ,watch, type Ref} from 'vue';
import dompurify from 'dompurify';
import { type ImageViewerExpose , type ImageViewerProps} from 'guyan-ym-ui';

interface RichTextProps {
    content: string;
    config?: object; 
    isClean?: boolean;
    isImgPreview?: boolean;
    previewConfig?: ImageViewerProps
}

interface RichTextEmits {
    (e: 'click', event: MouseEvent): void;
}

interface RichTextInstace {
    ref: Ref<HTMLElement | void>
    normalizationHtml: (html: string) => void;
    cleanContent: (content: string) => string;
    dompurifyIstance: typeof dompurify;
}

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
    previewConfig: () => ({}),

})

// 事件定义
const emits = defineEmits<RichTextEmits>();

// DOMPurify 实例
const dompurifyIstance = dompurify();

// 默认配置
// @ts-expect-error
const defaultConfig = dompurify?.defaults;

// 净化 HTML 内容，防止 XSS 攻击等安全问题
const cleanContent = (content:string): string => {
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
function normalizationHtml(html:string) {
    if (!html) {
        return;
    }
    nextTick(() => {
        // 渲染 HTML 内容
        contentRef.value && replaceAllChildren(contentRef.value, html);
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
.rich-text .rich-text-content{
    line-height: 1.6;
    color:#151b26;
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: normal;
    }

    ul {
        padding: 20px;
        list-style: initial;
    }
    :is(dir, menu, ol, ul) ul {
        list-style-type: circle;
    }
    ol {
        list-style:decimal;
        padding: 20px;
    }

    blockquote,
    q {
        quotes: inherit;
    }

    blockquote::before,
    blockquote::after,
    q::before,
    q::after {
        content: normal;
    }
}

</style>