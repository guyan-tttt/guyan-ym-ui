

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

type loadingType = "eager" | "lazy"

interface ImageProps {
    src:string // 图片地址
    fit?: string // 图片填充方式
    hideOnClickModal?: boolean //  是否点击遮罩层后隐藏图片
    loading?: loadingType // 加载中图片
    lazy?: boolean // 是否懒加载
    scrollContainer?: string | HTMLElement // 滚动容器,容器必须是一个固定的元素，且image滚动的变化不会影响容器元素
    alt?: string // 图片描述
    previewSrcList?: string[] // 预览图片列表
    zIndex?: number // 层级
    initialIndex?: number // 初始预览索引
    closeOnPressEscape?:boolean // 是否支持按下 ESC 关闭预览
    zoomRate?: number // 缩放比例
    minScale?: number // 最小缩放比例
    maxScale?: number // 最大缩放比例
}

interface ImageEmits {
    (e:"load", event: Event): void
    (e: "error", event: Event) : void
    (e: "switch", index: number):void
    (e: "close",event: Event): void
    (e: "show", event: Event): void
}

const props = withDefaults(defineProps<ImageProps>(),{
    fit: "cover",
    hideOnClickModal: false,
    loading: "eager",
    lazy: false, // 优先级高于 loading
    scrollContainer: "body",
    previewSrcList: () => [],
    zIndex:3000,
    initialIndex:0,
    closeOnPressEscape: false,
    zoomRate: 0.2,
    minScale: 0.2 ,
    maxScale: 2
})
const emits = defineEmits<ImageEmits>()

// 是否加载失败
const isLoadError = ref<boolean>(false)

// 图片链接
const imageSrc = ref<string | void>(void 0)

// 加载状态
const isLoading = ref<boolean>(true)

const isLazy = computed(() => {
    if(props.loading === 'eager') return false
    return props.loading === 'lazy' || props.lazy
})

// 加载图片
const loadImage = () => {
    isLoading.value = false // 关闭加载
    isLoadError.value = false // 关闭错误
    imageSrc.value = props.src
}

const handleLoad = (event: Event) => {
    isLoading.value = false
    isLoadError.value = false
    emits("load",event)
}

const handleError = (event:Event) => {
    isLoading.value = false
    isLoadError.value = true
    emits("error",event)
}

const handleLazyLoad = () => {
    
}

const imageObserver = new IntersectionObserver(handleLazyLoad)

const addLazyLoad = () => {
    if(!isLazy.value) return
}
onMounted(() => {
    if(!isLazy.value) {
        loadImage()
    }
})
</script>

<template>
    <div class="ym-image">
        <slot name="error" v-if="isLoadError">
            <div class="ym-image__error">加载错误</div>
        </slot>
        <template v-else>
            <img 
            class="ym-image__inner"
                v-if="!isLoading && imageSrc"
                :src="imageSrc"
                :alt="alt"
                :fit="fit"
                :loading="loading"
                @load="handleLoad"
                @error="handleError"
             >
             <div class="ym-image__loading"
                v-else
             >
                <slot name="loading">
                    <div class="ym-image__loading-text">
                        加载中...
                    </div>
                </slot>
             </div>
        </template>
    </div>
</template>


<style scoped>

</style>