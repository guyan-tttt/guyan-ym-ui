<template>
    <Teleport to="body">
        <Transition name="viewer-fade">
            <ym-overlay overlayClass="ym-image__viewer__overlay" v-if="showVisible" :zIndex="zIndex" @click="handleHideOnClickModal">
                <div class="ym-image__viewer" @click.stop="" ref="overlayRef">
                    <div class="ym-image_canvas" :style="imageViewerStyle">
                        <img  class="ym-image__viewer__img" :src="currentImage" alt="">
                    </div>
                    <div class="ym-image__toolbar">
                        <div class="ym-image__toolbar__item image-viewer-zoom-out"  @click="handleActions('zoomOut')">
                            <ym-icon icon="fa-plus-circle" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item image-viewer-zoom-in"  @click="handleActions('zoomIn')">
                            <ym-icon icon="fa-minus-circle" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item image-viewer-clockwise" @click="handleActions('clockwise')">
                            <ym-icon icon="fa-rotate-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item fa-flip-horizontal image-viewer-anticlockwise" @click="handleActions('anticlockwise')">
                            <ym-icon icon="fa-rotate-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                    </div>
                    <div class="ym-image__close" @click="handleClose">
                        <ym-icon icon="fa-times-circle" color="#fff" size="3x"></ym-icon>
                    </div>
                    <div class="ym-image__arrow">
                        <div class="ym-image__arrow-item ym-image__arrow-prev" @click="prev">
                            <ym-icon icon="fa-chevron-left" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__arrow-item ym-image__arrow-next" @click="next">
                            <ym-icon icon="fa-chevron-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                    </div>
                </div>
            </ym-overlay>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, reactive, ref, onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash-es'
import type { ImageViewerProps, ImageViewerEmits,ImageViewerExpose } from './type'
import YmOverlay from '../Overlay';
import YmIcon from '../Icon';


defineOptions({
    name: 'YmImageViewer'
})

const props = withDefaults(defineProps<ImageViewerProps>(),{
    zIndex: 3000,
    initialIndex:0,
    hideOnClickModal: false,
    zoomRate: 0.2,
    minScale: 0.1,
    maxScale: 2,
    closeOnPressEsc: false
})

const emits = defineEmits<ImageViewerEmits>()

const transform = reactive({
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0
})

const overlayRef = ref(null)


const imageViewerStyle = computed(() => {
    return {
        transform: `translate3d(${transform.offsetX}px, ${transform.offsetY}px, 0) scale(${transform.scale}) rotate(${transform.deg}deg)`,
    }
})

const currentIndex = ref<number>(props.initialIndex)

const currentImage = computed(() => {
    if(props.urlList.length === 0) return ''
    return props.urlList[currentIndex.value]
})

const handleActionsMap = new Map<string, () => void>([
    [
        'zoomIn', () => {
            transform.scale -= props.zoomRate
            if(transform.scale < props.minScale) {
                transform.scale = props.minScale
            }
        }
    ],
    [
        'zoomOut', () => {
            transform.scale += props.zoomRate
            if(transform.scale > props.maxScale) {
                transform.scale = props.maxScale
            }
        }
    ],
    [
        'clockwise', () => {
            transform.deg += 90
            emits("rotate", transform.deg)
        }
    ],
    [
        'anticlockwise', () => {
            transform.deg -= 90
            emits("rotate", transform.deg)
        }
    ],
])

const handleActions = (action: string) => {
    handleActionsMap.get(action)?.call(null)
}

const showVisible = ref(false)

const changeVisible = (visible: boolean) => {
    showVisible.value = visible
}

const handleOpen = () => {
    changeVisible(true)
    registerEventListener()
}

const handleClose = () => {
    changeVisible(false)
    unregisterEventListener()
    emits("close")
}

const setActiveItem = (index: number) => {
    if(index < 0) {
        currentIndex.value = props.urlList.length - 1
        return
    }
    if(index > props.urlList.length - 1) {
        currentIndex.value = 0
        return
    }
    currentIndex.value = index
    emits("switch",currentImage.value, currentIndex.value)
}


defineExpose<ImageViewerExpose>({
    open: handleOpen,
    close: handleClose,
    setActiveItem
})

// 上一页
const prev = () => {
    currentIndex.value -= 1
    setActiveItem(currentIndex.value)
}

// 下一页
const next = () => {

    currentIndex.value += 1
    setActiveItem(currentIndex.value)
}

const handleHideOnClickModal = () => {
    if(!props.hideOnClickModal) return 
    handleClose()
}

const handlePressEsc = (e: Event) => {
    if(!props.closeOnPressEsc) return ;
    e.preventDefault()
    console.log(2);
    
    e.stopPropagation()
    const event = e as KeyboardEvent
    let  code = event.code 
    if(code === 'Escape') {
        handleClose()
    }
}

const handleWheel = (e: WheelEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const delta = e.deltaY || e.deltaX
    console.log(delta);
    
    if(delta > 0) {
        transform.scale -= props.zoomRate
        if(transform.scale < props.minScale) {
            transform.scale = props.minScale
        }
    } else {
        transform.scale += props.zoomRate
        if(transform.scale > props.maxScale) {
            transform.scale = props.maxScale
        }
    }
    emits("wheel")
}


const registerEventListener = () => {
    const keyEvent = throttle(handlePressEsc, 300)
    const wheelEvent = handleWheel
    window.addEventListener('keydown', keyEvent)
    window.addEventListener('wheel', wheelEvent,{ passive: false })

}
const unregisterEventListener = () => {
    window.removeEventListener('keydown', handlePressEsc)
    window.removeEventListener('wheel', handleWheel)
}
onMounted(() => {
    // registerEventListener()
})

onUnmounted(() => {
    // unregisterEventListener()
})
</script>

<style scoped>
@import './style';
</style>