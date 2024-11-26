
<script setup lang="ts">
import type { MessageBoxProps , MessageBoxAction } from './type'
import { useId, useZIndex } from '@ym-UI/hooks'
import { reactive , computed , type Ref, ref, watch, nextTick} from 'vue';
import { typeIconMap } from '@ym-UI/utils';
import YmOverlay from '../Overlay/Overlay.vue'
import YmButton from '../Button/Button.vue'
import YmIcon from '../Icon/Icon.vue'
import YmInput from '../Input/Input.vue'
import { isFunction, isNil } from 'lodash-es';
import type { InputInstance  } from '../Input'

defineOptions({
    name: 'YmMessageBox',
    inheritAttrs: false
})

const props = withDefaults(defineProps<MessageBoxProps>(),{
    lockScroll: true, // 是否锁定滚动条
    showClose: true, // 是否显示关闭按钮
    closeOnClickModal: true, // 点击蒙层是否关闭弹窗
    confirmButtonType: 'primary', // 确认按钮类型
    cancelButtonType: 'default', // 取消按钮类型
    roundButton: false, // 是否为圆角按钮,
    boxType: '', // 弹窗类型
    inputType: 'text', // 输入框类型
    inputPlaceholder: '请输入内容', // 输入框占位符
    confirmButtonText: '确定', // 确认按钮文本
    cancelButtonText: '取消', // 取消按钮文本
    showConfirmButton: true, // 是否显示确认按钮
    showCancelButton: true, // 是否显示取消按钮
    inputValue: '', // 输入框默认值
})


const { doAction  } = props

const { nextZIndex } = useZIndex()

const state = reactive({
    ...props,
    zIndex: nextZIndex()
})

const hasMessage = computed(() => !!state.message)

const iconComponent = computed(() => state.icon ?? typeIconMap.get(state.type ?? ""))

watch(
    () => props.visible?.value,
    (val?: boolean) =>  {
        if(val) state.zIndex = nextZIndex()
        if(props.boxType !== "prompt") return 
        if(!val) return
        nextTick(() => {
           inputRef.value &&  inputRef.value?.focus()
        })
    }
)

const headerRef = ref<HTMLElement>()
const inputRef = ref<InputInstance>()
const inputId = useId()

function handleAction(action: MessageBoxAction = 'confirm') {
    isFunction(props.beforeClose) ?
     props.beforeClose(action,state, () => doAction(action,state.inputValue))
    : doAction(action,state.inputValue);
}

function handleWrapperClick() {
    props.closeOnClickModal && handleAction("cancel")
}

function handleInputEnter(e: KeyboardEvent) {
    if(state.inputType === 'textarea') return
    e.preventDefault();
    return handleAction("confirm");
}

function handleClose() {
    handleAction("close")
}
</script>


<template>
    <transition name="fade-in-linear" @after-leave="destroy">
    <ym-overlay v-show="(visible as Ref).value" :z-index="state.zIndex" mask>
      <div
        role="dialog"
        class="ym-overlay-message-box"
        @click="handleWrapperClick"
      >
        <div
          ref="rootRef"
          :class="[
            'ym-message-box',
            {
              'is-center': state.center,
            },
          ]"
          @click.stop
        >
          <div
            v-if="!isNil(state.title)"
            ref="headerRef"
            class="ym-message-box__header"
            :class="{ 'show-close': state.showClose }"
          >
            <div class="ym-message-box__title">
              <ym-icon
                v-if="iconComponent && state.center"
                :class="{
                  [`er-icon-${state.type}`]: state.type,
                }"
                :icon="iconComponent"
              />
              {{ state.title }}
            </div>
            <button
              v-if="showClose"
              class="ym-message-box__header-btn"
              @click.stop="handleClose"
            >
              <ym-icon icon="xmark" />
            </button>
          </div>
          <div class="ym-message-box__content">
            <ym-icon
              v-if="iconComponent && !state.center && hasMessage"
              :class="{
                [`ym-icon-${state.type}`]: state.type,
              }"
              :icon="iconComponent"
            />
            <div v-if="hasMessage" class="ym-message-box__message">
              <slot>
                <component
                  :is="state.showInput ? 'label' : 'p'"
                  :for="state.showInput ? inputId : void 0"
                >
                  {{ state.message }}
                </component>
              </slot>
            </div>
          </div>
          <div v-show="state.showInput" class="ym-message-box__input">
            <ym-input
              v-model="state.inputValue"
              ref="inputRef"
              :placeholder="state.inputPlaceholder"
              :type="state.inputType"
              @keyup.enter="handleInputEnter"
            />
          </div>
          <div class="ym-message-box__footer">
            <ym-button
              v-if="state.showCancelButton"
              class="ym-message-box__footer-btn ym-message-box__cancel-btn"
              :type="state.cancelButtonType"
              :round="state.roundButton"
              :loading="state.cancelButtonLoading"
              @click="handleAction('cancel')"
              @keydown.prevent.enter="handleAction('cancel')"
              >{{ state.cancelButtonText }}</ym-button
            >
            <ym-button
              v-show="state.showConfirmButton"
              class="ym-message-box__footer-btn ym-message-box__confirm-btn"
              :type="state.confirmButtonType ?? 'primary'"
              :round="state.roundButton"
              :loading="state.confirmButtonLoading"
              @click="handleAction('confirm')"
              @keydown.prevent.enter="handleAction('confirm')"
              >{{ state.confirmButtonText }}</ym-button
            >
          </div>
        </div>
      </div>
    </ym-overlay>
  </transition>
</template>


<style scoped>
@import './style';
</style>