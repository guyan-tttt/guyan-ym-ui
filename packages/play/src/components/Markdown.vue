<template>
    <div class="ym-markdown">
        <div
            :style="markdownContainerStyle"
            id="container"
            :class="{
                'is-preview': isPreview,
            }"
        >
            <textarea
                v-if="!isPreviewOnly"
                v-model="markdownContent"
                ref="editorRef" name=""
                id="ym-markdown__editor"
                :style="editorHeightStyle"
                @input="emits('update:modelValue', markdownContent)"
                />
            <div
                v-if="isPreview || isPreviewOnly"
                id="preview"
                :style="editorHeightStyle"
            >
                <YmRichText
                    :is-img-preview="props.isImgPreview"
                    :content="htmlContent"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, h,render } from 'vue';
import { Remarkable } from 'remarkable';
import { YmRichText } from 'guyan-ym-ui';
import LightCode from '../../../components/LightCode/LightCode.vue';
import { addUnit } from '@ym-UI/utils';

interface MarkdownProps {
    modelValue: string;
    isPreview?: boolean;
    isPreviewFull?: boolean;
    isPreviewOnly?: boolean;
    width?: string | number;
    height?: string | number;
    isImgPreview?:boolean;
}

interface MarkdownEmits {
    (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<MarkdownProps>(), {
    modelValue: '',
    isPreview: true,
    isPreviewFull: false,
    isPreviewOnly: false,
    width: '600px',
    height: '300px',
    isImgPreview: false,
})

const emits = defineEmits<MarkdownEmits>();

// 编辑器元素实例
const editorRef = ref<HTMLElement | null>(null);

// markdown编辑内容
const markdownContent = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
    markdownContent.value = val;
})

// 解析器对象
const  md = new Remarkable();

//解析后的mark内容
const htmlContent = computed(() => {
    const node_ast = new DOMParser().parseFromString(md.render(markdownContent.value), 'text/html')

    return node_ast.body.innerHTML;
})

const markdownContainerStyle = computed(() => {
    return {
        width: addUnit(props.width),
    }
})

const editorHeightStyle = computed(() => {
    return {
        height: addUnit(props.height),
    }
})


</script>

<style  scoped>
.ym-markdown {
    #container {
        display: flex;
        &.is-preview {
            #ym-markdown__editor {
                border-radius: 4px 0 0 4px;
                resize: none;
            }
            #preview {
                border-radius:  0  4px 4px 0;
            }
            
        }
    }
    #ym-markdown__editor {
        flex: 1;
        width: 100%;
        font-size: 16px;
        box-sizing: border-box;
        vertical-align: middle;
        border: 0;;
        background-color: var(--ym-disabled-bg-color);
        box-shadow: 0 0 0 1px var(--ym-disabled-border-color) inset;
        transition: box-shadow.3s;
        border-radius: 4px;
        padding: 10px;
        font-style: normal;
        overflow-y: scroll;
        color: var(--ym-input-text-color, var(--ym-text-color-regular));
        &:focus {
            outline: none;
            box-shadow: 0 0 0 1px var(--ym-color-primary) inset;
        }
        &.is-disabled {
            cursor: not-allowed;
        }
    }
    #preview {
        flex: 1;
        box-shadow: 0 0 1px 1px var(--ym-disabled-border-color) inset;
        border-radius: 4px;
        padding: 10px;
        overflow-y: scroll;
        box-sizing: border-box;
        :deep(.ym-rich-text) {
            blockquote {
                padding: 10px 20px;
                margin: 0 0 20px;
                font-size: 17.5px;
                border-left: 5px solid #eee;
            }
            img {
                border-radius: 10px;
                max-width: 100%;
            }
        }
    }
}
</style>