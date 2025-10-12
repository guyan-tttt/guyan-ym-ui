<template>
    <div
        class="ym-light-code"
        :class="{
            [`is-${isDark ? 'dark' : 'light'}`]: true,
            [`theme-${activeTheme}`]: true
        }"
        :style="containerStyle"
    >
        <div v-if="$slots.tool && props.custom" class="ym-light-tool-container">
            <slot name="tool"></slot>
        </div>
        <div v-else  class="ym-light-tool">
            <div v-if="props.custom" class="tool-item">
                <YmSelect v-model="activeLanguage" :options="languageListOptions" @change="languageChange" sty></YmSelect>
            </div>
            <div v-if="props.custom" class="tool-item">
                <YmSelect v-model="activeTheme" :options="themeListOptions" @change="themeChange"></YmSelect>
            </div>
            <div class="tool-item">
                <div class="copy-btn" @click="codeCopy">
                    <YmIcon  icon="clone" color="#b3b3b3" size="lg"/>
                </div>
            </div>
        </div>
        <pre>
            <code :class="{
                [`language-${props.language}`]: true
            }" >
                <YmRichText :content="codeHtml"></YmRichText>
            </code>
        </pre>
    </div>
</template>

<script setup lang="ts">
import hljs from 'highlight.js';
import { defineProps, withDefaults, computed, ref, onMounted} from 'vue';
import { YmRichText, YmIcon, YmMessage, YmSelect} from '../../../../components';

import { addUnit } from '@ym-UI/utils';
import { isFunction } from 'lodash-es';

interface LightCodeProps {
    code: string;
    language?: string;
    theme?: string;
    width?: string | number;
    height?: string | number;
    custom?: boolean;
}
interface LightEmits {
    (e: 'copy', code: string): void;
    (e: 'languageChange', language: string): void;
    (e: 'themeChange', theme: string): void;
}

interface LightInstace {
    copyCode: () => string;
    setTheme: (theme: string) => void;
    setLanguage: (language: string) => void;
}

const language_list = [
    'javascript',
    'css',
    'html',
    'json',
    'markdown',
    'typescript',
    'php',
    'python',
    'java',
    'c',
    'c++',
    'c#',
    'go',
    'kotlin',
    'ruby',
    'swift',
    'rust',
    'shell',
    'sql',
    'yaml',
    'dart'
]
const props = withDefaults(defineProps<LightCodeProps>(), {
    code: "",
    language: "javascript",
    theme: 'atom-one-dark',
    width: '700px',
    height: 'auto',
    custom: true
});

const codeHtml = computed(() => {
    console.log(props.code)
    return hljs.highlight(props.code, { language: activeLanguage.value }).value;
})

const containerStyle = computed(() => {
    return {
        width: addUnit(props.width),
        height: addUnit(props.height)
    }
})

// 代码复制
const codeCopy = () => {
    // 1. navigator.clipboard.writeText
    if(isFunction(navigator.clipboard.writeText))  {
        navigator.clipboard.writeText(props.code).then(() => {
            YmMessage.success({
                message: '复制成功'
            })
        }).catch(() => {
            YmMessage.error({
                message: '复制失败'
            })
        })
    } else {
        // 2. document.execCommand('copy')
        const textarea = document.createElement('textarea');
        textarea.value = props.code;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            YmMessage.success({
                message: '复制成功'
            })
        } catch (e) {
            YmMessage.error({
                message: '复制失败'
            })
        }
        document.body.removeChild(textarea);
    }
}

const activeTheme = ref(props.theme);

const isDark = computed(() => {
    return activeTheme.value.includes('dark');
})
const themeListOptions = [
    {
        label: 'atom-one-dark',
        value: 'atom-one-dark'
    },
    {
        label: 'a11y-dark',
        value: 'a11y-dark'
    },
    {
        label: 'a11y-light',
        value: 'a11y-light'
    },
    {}
]

const loadTheme = (theme: string) => {
    import(`./styles/${theme}.css`)
}

const themeChange = (theme: string) => {
    loadTheme(theme)
}
onMounted(() => {
    loadTheme(activeTheme.value)
})

const activeLanguage = ref(props.language);

const languageListOptions = computed(() => {
    return language_list.map(item => {
        return {
            label: item,
            value: item
        }
    })
})

const languageChange = (language: string) => {
    activeLanguage.value = language;
}
</script>

<style scoped>
.ym-light-code {
    border-radius: 5px;
    position: relative;
    .ym-light-tool {
        position: absolute;
        top: 2px;
        right: 10px;
        z-index: 1;
        .tool-item {
            display: inline-block;
            margin-right: 10px;
            .copy-btn {
                display: inline-block;
                padding: 5px;
                border-radius: 5px;
                cursor: pointer;
                transition: all .3s;
                &:hover {
                    .ym-icon {
                      color: var(--ym-color-primary) !important;
                    }
                }
            }
            :deep(.ym-select) {
                width: 150px;
            }
        }
    }
    &::before {
        margin: 0;
        background: #fc625d;
        border-radius: 50%;
        box-shadow:
            20px 0 #fdbc40,
            40px 0 #35cd4b;
        content: " ";
        height: 10px;
        margin-top: 5px;
        position: absolute;
        width: 10px;
        top: 10px;
        left: 20px;
    }
    & pre {
        overflow: auto;
        margin: 0;
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
        border: 1px solid #1e1e1e;
        border-radius: 5px;
    }
    & code {
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courie;
        font-size: 14px;
        line-height: 1.45;
        display: flex;
        margin: 0 20px;
        padding-top: 10px;
        :deep(.ym-rich-text) {
            flex: 1;
        }
    }
    &.is-dark {
        background-color: #1e1e1e;
        color: #d4d4d4;
    }
}
</style>