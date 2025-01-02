

<script setup lang="ts">
import { addUnit } from '@ym-UI/utils';
import { delay, isFunction } from 'lodash-es';
import { computed, ref, watch } from 'vue';
import type { DialogEmits, DialogInstance, DialogProps, DialogSlot } from './type'
import YmIcon from '../Icon/Icon.vue'
import YmOverlay from '../Overlay/Overlay.vue';
defineOptions({
    name: "YmDialog"
})


const props = withDefaults(defineProps<DialogProps>(),{
    width: '40%',
    fullscreen: false,
    top: "15vh",
    modal: true,
    lockScroll: true,
    openDelay: 0,
    closeDelay: 0,
    closeOnClickModal: true,
    closeOnPressEscape: true,
    showClose: true,
    center: false,
    closeIcon: "xmark",
    zIndex: 2000,
    appendTo: "body",
    header: true,
    footer: true
})

const emits = defineEmits<DialogEmits>()

const visible = ref<boolean>(props.modelValue)

const slots = defineSlots<DialogSlot>()

// 关闭操作
const closeDialog = () => {

    // 判断关闭前的回调是否需要执行，如果需要则将关闭操作封装为回调函数传出去由用户决定是否执行
    if(props.beforeClose && isFunction(props.beforeClose)) {
        props.beforeClose(() => {
            visible.value = false
            emits("update:modelValue", false)
        })
    } else {
        visible.value = false
        emits("update:modelValue", false)
    }
}

// 打开操作
const openDialog = () => {
    visible.value = true
    emits("update:modelValue", true)
}

// 点击关闭按钮
const clickClose = () =>   {
    delay(closeDialog, props.closeDelay)
}

// 点击遮罩层
const clickModal = () => {
    // 判断当前是否是开启遮罩层且是否需要点击遮罩层关闭
    if(!props.modal || !props.closeOnClickModal) return 
    delay(closeDialog, props.closeDelay)
}

// 计算dialog宽度
const dialogWidth = computed(() => {
    if(props.fullscreen) return '100%'
    if(props.width.toString().includes('%')) return props.width
    return addUnit(props.width)
})

watch(() => props.modelValue, (val) =>  {

    if(val)  {
        // 监听打开，做延迟处理
        delay(openDialog, props.openDelay)
        registerKeyDownEventListener(keyDown)
    } else {
        // 这里是监听当前dialog状态，主要为了监听到父组件的状态改变，这里对应的执行关闭处理，但如果是dialog内部的关闭操作则不需要处理
        removeKeyDownEventListener(keyDown)
        if(!visible.value) return 
        // 监听关闭（主要是父组件修改v-model状态时触发）
        delay(closeDialog, props.closeDelay)
        
    }
}
)


// 监听键盘按下事件
const keyDown = (e: KeyboardEvent) => {
    console.log('keyDown');
    
    // 触发键盘事件
    if(!props.closeOnPressEscape) return
    if(e.key === "Escape") {
        if(e.target instanceof HTMLInputElement) return
        if(e.target instanceof HTMLTextAreaElement) return
        delay(closeDialog, props.closeDelay)
    }
}
const registerKeyDownEventListener = (keyDown: (event: KeyboardEvent) => void ) => {
    window.addEventListener("keydown", keyDown)
}

const removeKeyDownEventListener = (keyDown: (event: KeyboardEvent) => void ) => {
    window.removeEventListener("keydown", keyDown)
}




defineExpose<DialogInstance>({
    visible: visible,
    open: openDialog,
    close: closeDialog
})

</script>

<template>
    <teleport :to="appendTo">
        <transition 
        name="dialog-fade"
        @beforeEnter="$emit('opened')"
        @after-enter="$emit('open')"
        @after-leave="$emit('closed')"
        @beforeLeave="$emit('close')"
        >
            <ym-overlay
            class="ym-dialog-overlay"
                v-if="visible"
                :mask="modal"
                :zIndex="zIndex"
                :overClass="modalClass"
                @click="clickModal"
            >
                <div 
                    class="ym-dialog"
                    @click.stop="() => {}"
                    :style="{
                        width: dialogWidth,
                        marginTop: top,
                    }"
                    >
                    <header 
                        v-if="header"
                        class="ym-dialog__header"
                        :style="{
                            justifyContent: center ? 'center' : 'space-between'
                        }"
                    >
                        <slot name="header">
                            <span class="ym-dialog__header__title">
                                {{ title }}
                            </span>
                        </slot>
                        <button 
                        class="ym-dialog__header__close" 
                        @click="clickClose"
                        v-if="showClose"
                        >
                            <ym-icon color="#909399"  :icon="props.closeIcon"></ym-icon>
                        </button>
                    </header>
                    <div class="ym-dialog__body">
                        <slot></slot>
                    </div>
                    <footer
                        v-if="footer"
                        class="ym-dialog__footer" 
                        :style="{
                            textAlign: center ? 'center' : 'right'
                        }"
                    >
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </ym-overlay>
        </transition>
    </teleport>
</template>

<style scoped>
@import './style';
</style>