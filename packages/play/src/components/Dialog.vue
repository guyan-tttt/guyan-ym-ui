

<script setup lang="ts">
import { addUnit } from '@ym-UI/utils';
import { delay, isFunction } from 'lodash-es';
import { computed, ref, watch } from 'vue';


defineOptions({
    name: "YmDialog"
})
interface DialogProps {
    modelValue: boolean // 是否显示
    title?: string // 标题
    width?: string | number // 宽度
    fullscreen?: boolean // 是否全屏
    top?: string // 距离顶部距离
    modal?: boolean // 是否显示遮罩
    modalClass?: string // 遮罩样式
    lockScroll?: boolean // 是否锁定滚动
    openDelay?: number // 打开延时
    closeDelay?: number // 关闭延时
    closeOnClickModal?: boolean // 点击遮罩是否关闭
    closeOnPressEscape?: boolean // 按下ESC是否关闭
    showClose?: boolean // 是否显示关闭按钮
    beforeClose?: (done: () => void) => void // 关闭前的回调
    center?: boolean // 是否居中
    closeIcon?: string // 关闭图标
    zIndex?: number // 层级
    customClass?: string // 自定义类名
    appendTo?: string // 挂载节点
    header?: boolean // 是否显示头部
    footer?: boolean // 是否显示底部
    alginCenter?: boolean // 是否居中
}

interface DialogEmits {
    (e: 'open'): void
    (e: 'close'): void
    (e: "opened"): void
    (e: "closed"): void
    (e: "update:modelValue", value: boolean): void
}

interface DialogSlot {
    header: () => any
    footer: () => any
    default: () => any
}

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
    closeIcon: "el-icon-close",
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
    } else {
        // 这里是监听当前dialog状态，主要为了监听到父组件的状态改变，这里对应的执行关闭处理，但如果是dialog内部的关闭操作则不需要处理
        if(!visible.value) return 
        // 监听关闭（主要是父组件修改v-model状态时触发）
        delay(closeDialog, props.closeDelay)
    }
}
)

</script>

<template>
    <teleport :to="appendTo">
        <transition 
        name="dialog-fade"
        @beforeEnter="emits('open')"
        @after-enter="emits('opened')"
        @after-leave="emits('closed')"
        @beforeLeave="emits('close')"
        >
            <ym-overlay
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
                            <ym-icon color="#909399"  icon="xmark"></ym-icon>
                        </button>
                    </header>
                    <div class="ym-dialog__body">
                        <slot></slot>
                    </div>
                    <footer class="ym-dialog__footer" :style="{
                        textAlign: center ? 'center' : 'right'
                    }">
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </ym-overlay>
        </transition>
    </teleport>
</template>

<style scoped>
.dialog-fade-enter-active {
    transition: opacity 0.3s;
}
.dialog-fade-leave-active {
    transition: opacity 0.3s;
}


.dialog-fade-enter-from,
.dialog-fade-leave-to {
    opacity: 0;
}


.ym-dialog {
    --el-dialog-width: 50%;
    --el-dialog-margin-top: 15vh;
    --el-dialog-bg-color: #fff;
    --el-dialog-box-shadow: #ececec;
    --el-dialog-title-font-size: 20px;
    --el-dialog-content-font-size: 14px;
    --el-dialog-font-line-height: 20px;
    --el-dialog-padding-primary: 18px;
    --el-dialog-border-radius: 10px;
    --ym-dialog-context-color: #606266;
    --ym-dialog-title-color: #303133;
    position: relative;
    margin: var(--el-dialog-margin-top, 15vh) auto 50px;
    background: var(--el-dialog-bg-color);
    border-radius: var(--el-dialog-border-radius);
    box-shadow: var(--el-dialog-box-shadow);
    box-sizing: border-box;
    padding: var(--el-dialog-padding-primary);
    width: var(--el-dialog-width, 50%);
    overflow-wrap: break-word;
    border: 1px solid #ebeef5;
    .ym-dialog__header {
        display: flex;
        position: relative;
        padding-bottom: var(--el-dialog-padding-primary);
        .ym-dialog__header__close {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: var(--el-dialog-title-font-size);
            color: var(--ym-dialog-context-color) !important;
            transition: transform 0.3s;
            transform: rotate(0deg);
            &:hover {
                transform: rotate(-360deg);
            }
        }
        .ym-dialog__header__title {
            font-size: var(--el-dialog-title-font-size);
            line-height: var(--el-dialog-font-line-height);
            color: var(--ym-dialog-title-color) !important;
            font-weight: 700;
        }
    }
    .ym-dialog__footer {
        padding-top: var(--el-dialog-padding-primary);
        text-align: right;
        box-sizing: border-box;

    }
    .ym-dialog__body {
        color: var(--ym-dialog-context-color);
        font-size: var(--el-dialog-content-font-size);
    }
}
</style>