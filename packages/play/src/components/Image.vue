

<script setup lang="ts">
import { isString } from 'lodash-es';
import { computed,  onMounted, onUnmounted, ref, useAttrs,nextTick } from 'vue';
import ImageViewer from '../../../components/ImageViewer/ImageViewer.vue';

type loadingType = "eager" | "lazy"

type fitType = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'


interface ImageProps {
    src:string // 图片地址
    fit?: fitType // 图片填充方式
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
    (e: "switch", url:string):void
    (e: "close"): void
    (e: "show", event: Event): void
}

const props = withDefaults(defineProps<ImageProps>(),{
    fit: "fill",
    hideOnClickModal: false,
    loading: "eager",
    lazy: false, // 优先级高于 loading
    previewSrcList: () => [],
    zIndex:3000,
    initialIndex:0,
    closeOnPressEscape: false,
    zoomRate: 0.2,
    minScale: 0.2 ,
    maxScale: 2
})
const emits = defineEmits<ImageEmits>()

const attrs = useAttrs()

// 是否加载失败
const isLoadError = ref<boolean>(false)

// 图片链接
const imageSrc = ref<string | void>(void 0)

// 加载状态
const isLoading = ref<boolean>(true)

const isLazy = computed(() => {
    if(props.lazy) return true
    return props.loading === 'lazy' 
})

// 加载图片
const loadImage = () => {
    isLoading.value = false // 关闭加载
    isLoadError.value = false // 关闭错误
    imageSrc.value = props.src
}

// 图片加载完成
const handleLoad = (event: Event) => {
    isLoading.value = false
    isLoadError.value = false
    emits("load",event)
}

// 图片加载失败
const handleError = (event:Event) => {
    isLoading.value = false
    isLoadError.value = true
    emits("error",event)
}

// 监听图片是否进入视窗
const handleLazyLoad = (entries: IntersectionObserverEntry[]) => {
    if(!isLazy.value || entries.length === 0) return
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        imageSrc.value || loadImage()
      // 在此处理进入视窗后的逻辑
    } else {
      console.log('目标元素离开视窗');
      // 在此处理离开视窗后的逻辑
    }
})
}

// 滚动容器
const scrollContainer  = computed(() => {
    if(!props.scrollContainer) return null
    if(isString(props.scrollContainer)){
        return document.querySelector(props.scrollContainer)
    }
    return props.scrollContainer
})

// 元素实例
const imageRef = ref<HTMLImageElement>()

// 图片监听器
const imageObserver = new IntersectionObserver(handleLazyLoad, {
  root: scrollContainer.value as Element || null, // 默认为视窗
  rootMargin: '0px', // 视窗的外边距
  threshold: 0.1 // 目标元素可见比例达到10%时触发回调
})

// 添加懒加载
const addLazyLoad = () => {
    if(!isLazy.value) return
    imageObserver.observe(imageRef.value!)
}



const previewRef = ref<any>()

const previewUrlList = computed(() => {
    if(props.previewSrcList.length) return props.previewSrcList
    return [props.src]
})

const handleClick = async(e: Event) => {
    if(!previewUrlList.value.length) return
    await nextTick()
    if(!previewRef.value) return
    previewRef.value?.open()
    emits("show",e)
}

const closePreview = () => {
    emits("close")
}

const switchPreview = (url: string) => {
    emits("switch",url)
}
onMounted(() => {
    if(!isLazy.value) {
        loadImage()
    } else {
        addLazyLoad()
    }
})
onUnmounted(() => {
    imageObserver.unobserve(imageRef.value!)
})
</script>

<template>
    <div class="ym-image" ref="imageRef" v-bind="attrs">
        <div class="ym-image__error" v-if="isLoadError">
            <slot name="error">
                加载错误
            </slot>
        </div>
        <template v-else>
            <img 
                class="ym-image__inner"
                v-if="isLoading && imageSrc"
                :src="imageSrc"
                :alt="alt"
                :fit="fit"
                :loading="loading"
                :style="{
                    ['object-fit']:  fit
                }"
                @load="handleLoad"
                @error="handleError"
                @click="handleClick"
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
        <div class="ym-image__preview">
            <ImageViewer
             ref="previewRef"
             :url-list="previewUrlList"
             :initial-index="initialIndex"
             :close-on-press-esc="closeOnPressEscape"
             :hide-on-click-modal="hideOnClickModal"
             @switch="switchPreview"
             @close="closePreview"
             ></ImageViewer>
        </div>
    </div>
</template>


<style scoped>
.ym-image {
    position: relative;
    display: inline-block;
    overflow: hidden;
    .ym-image__inner {
        object-fit: fill;
        width: 100%;
        height: 100%;
    }
    .ym-image__error {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a8abb2;
        background-color: #f5f7fa;
        font-size: 14px;
        width: 100%;
        height: 100%;
        font-weight: 700;
    }
    .ym-image__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #a8abb2;
        background-color: #f5f7fa;
        font-size: 14px;
        width: 100%;
        height: 100%;
        font-weight: 700;
    }

}
</style>