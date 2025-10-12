<script setup lang="ts">
import hljs from 'highlight.js';
import { defineProps, withDefaults, computed, ref, onMounted} from 'vue';
import { YmRichText } from '../RichText';
import { YmIcon } from '../Icon'
import { YmMessage } from '../Message'
import { YmSelect } from '../Select'
import { addUnit } from '@ym-UI/utils';
import { isFunction } from 'lodash-es';
import { light_language_list, light_theme_list } from './constant'
import type { LightCodeEmits, LightCodeInstance, LightCodeProps } from './type'

defineOptions({
    name: 'YmLightCode'
})

const props = withDefaults(defineProps<LightCodeProps>(), {
    code: "",
    language: "javascript",
    theme: 'atom-one-dark',
    width: '500px',
    height: 'auto',
    custom: false
});

const emits  = defineEmits<LightCodeEmits>()

const codeHtml = computed(() => {
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
    emits('copy', props.code)
    return props.code
}

const activeTheme = ref(props.theme);

const isDark = computed(() => {
    return !activeTheme.value.includes('light');
})


const loadTheme = (theme: string) => {
    import(`./theme/${theme}.css`)
}


onMounted(() => {
    light_theme_list.forEach(item => {
        loadTheme(item)
    })
})

const activeLanguage = ref(props.language);

const languageListOptions = computed(() => {
    return light_language_list.map(item => {
        return {
            label: item,
            value: item
        }
    })
})

const themeListOptions = computed(() => {
    return light_theme_list.map(item => {
        return {
            label: item,
            value: item
        }
    })
})

const languageChange = (language: string) => {
    activeLanguage.value = language as typeof light_language_list[number];
    emits('languageChange', language)
}

defineExpose<LightCodeInstance>({
    copyCode:codeCopy,
    setLanguage: languageChange,
    setTheme: (theme) => {
        activeTheme.value = theme;
        emits('themeChange', theme)
    }
})
</script>

<template>
    <div
        class="ym-light-code"
        :class="{
            [`is-${isDark ? 'dark' : 'light'}`]: true,
            [`theme-${activeTheme}`]: true
        }"
        :style="containerStyle"
    >
        <div v-if="$slots.tool" class="ym-light-tool-container">
            <slot name="tool"></slot>
        </div>
        <div v-else-if="props.custom"  class="ym-light-tool">
            <div v-if="props.custom" class="tool-item">
                <YmSelect v-model="activeLanguage" :options="languageListOptions" @change="languageChange" sty></YmSelect>
            </div>
            <div v-if="props.custom" class="tool-item">
                <YmSelect v-model="activeTheme" :options="themeListOptions" @change="emits('themeChange', activeTheme)"></YmSelect>
            </div>
            <div class="tool-item">
                <div class="copy-btn" @click="codeCopy">
                    <YmIcon  icon="clone" color="#b3b3b3" size="lg"/>
                </div>
            </div>
        </div>
        <pre
            :style="{
                height: containerStyle.height
            }"
        >
            <code :class="{
                [`language-${props.language}`]: true
            }" >
                <YmRichText :content="codeHtml"></YmRichText>
            </code>
        </pre>
    </div>
</template>

<style scoped>
@import './style.css';
</style>