

<script setup lang="ts">
import { isString } from 'lodash-es';
import { computed,  onMounted, onUnmounted, ref, useAttrs,nextTick, watch } from 'vue';
import ImageViewer from '../ImageViewer/ImageViewer.vue';
import type { ImageEmits, ImageProps } from './type'



defineOptions({
    name:"YmImage"
})
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

    console.log(entries);
    
    if(!isLazy.value || entries.length === 0) return
    if (entries[0].isIntersecting) {
        if (imageSrc.value) return
        loadImage()
      // 在此处理进入视窗后的逻辑
      console.log('目标元素进入视窗',imageSrc.value);
      
    } else {
      console.log('目标元素离开视窗');
      // 在此处理离开视窗后的逻辑
      
    }
  
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
//@ts-ignore
const imageObserver = ref<IntersectionObserver | null>(null)

// 初始化监听器
const initObserver = () => {
    // console.log(scrollContainer.value);
    
    if(!IntersectionObserver) return
    imageObserver.value = new IntersectionObserver(handleLazyLoad,{
        root: scrollContainer.value,
        rootMargin: "0px",
        threshold: 0.01
    })
}


// 添加懒加载
const addLazyLoad = () => {
    if(!isLazy.value) return
    imageObserver.value?.observe(imageRef.value!)
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
onMounted(async() => {
    console.log(isLazy.value);
    
    if(!isLazy.value) {
        loadImage()
    } else {
        await nextTick()
        console.log(scrollContainer.value);
        
        await initObserver()
        addLazyLoad()
    }
})
onUnmounted(() => {
    imageObserver.value?.unobserve(imageRef.value!)
})

watch(() => props.src, () => {
    if(!isLazy.value) {
        loadImage()
    } else {
        addLazyLoad()
    }
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
                v-if="!isLoading && imageSrc"
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
             :z-index="zIndex"
             :zoom-rate="zoomRate"
             :max-scale="maxScale"
             :min-scale="minScale"
             @switch="switchPreview"
             @close="closePreview"
             ></ImageViewer>
        </div>
    </div>
</template>


<style scoped>
@import url(./style.css);
</style>