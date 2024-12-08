<template>
    <Teleport to="body">
        <Transition name="viewer-fade">
            <ym-overlay overlayClass="ym-image__viewer__overlay" v-if="showVisible">
                <div class="ym-image__viewer">
                    <div class="ym-image_canvas" :style="imageViewerStyle">
                        <img class="ym-image__viewer__img" src="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg" alt="">
                    </div>
                    <div class="ym-image__toolbar">
                        <div class="ym-image__toolbar__item"  @click="handleActions('zoomOut')">
                            <ym-icon icon="fa-plus-circle" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item"  @click="handleActions('zoomIn')">
                            <ym-icon icon="fa-minus-circle" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item" @click="handleActions('clockwise')">
                            <ym-icon icon="fa-rotate-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__toolbar__item fa-flip-horizontal" @click="handleActions('anticlockwise')">
                            <ym-icon icon="fa-rotate-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                    </div>
                    <div class="ym-image__close" @click="handleClose">
                        <ym-icon icon="fa-times-circle" color="#fff" size="3x"></ym-icon>
                    </div>
                    <div class="ym-image__arrow">
                        <div class="ym-image__arrow-item">
                            <ym-icon icon="fa-chevron-left" color="#fff" size="2xl"></ym-icon>
                        </div>
                        <div class="ym-image__arrow-item">
                            <ym-icon icon="fa-chevron-right" color="#fff" size="2xl"></ym-icon>
                        </div>
                    </div>
                </div>
            </ym-overlay>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

interface ImageViewerProps {
    urlList: string[] // 图片列表
    zIndex?: number // 层级
    initialIndex?: number // 初始索引
    hideOnClickModal?: boolean // 点击遮罩层是否关闭
    zoomRate?: number // 缩放比例
    minScale?: number // 最小缩放比例
    maxScale?: number // 最大缩放比例
    closeOnPressEsc?: boolean // 按下esc关闭
}

const props = withDefaults(defineProps<ImageViewerProps>(),{
    zIndex: 3000,
    initialIndex:0,
    hideOnClickModal: false,
    zoomRate: 0.2,
    minScale: 0.1,
    maxScale: 2,
    closeOnPressEsc: false
})

const transform = reactive({
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0
})

const isLoading = ref(false)

const imageViewerStyle = computed(() => {
    return {
        transform: `translate3d(${transform.offsetX}px, ${transform.offsetY}px, 0) scale(${transform.scale}) rotate(${transform.deg}deg)`,
    }
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
        }
    ],
    [
        'anticlockwise', () => {
            transform.deg -= 90
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
}

const handleClose = () => {
    changeVisible(false)
}

defineExpose({
    open: handleOpen,
    close: handleClose
})

</script>

<style scoped>
.viewer-fade-enter-active,
.viewer-fade-leave-active {
    transition: opacity 0.3s;
}
.viewer-fade-enter-from,
.viewer-fade-leave-to {
    opacity: 0;
}

.ym-image__viewer__overlay {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden !important;
}
.ym-image__viewer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
   .ym-image__toolbar {
        position: absolute;
        bottom: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        .ym-image__toolbar__item {
            text-align: center;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
        }
   }
   .ym-image__close {
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
   }
   .ym-image__arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .ym-image__arrow-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.3);
            margin: 0 20px;
        }
   }
   .ym-image_canvas {
        transition: transform 0.3s ease-in-out;
   }
}
</style>