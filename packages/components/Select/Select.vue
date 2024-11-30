<script setup lang="ts">
import type { SelectProps,SelectOptionProps, SelectEmits, SelectStates, SelectContext, SelectInstance } from './type';
import { YmInput, type InputInstance } from '../Input';
import { YmTooltip, type TooltipInstance } from '../Tooltip';
import { YmIcon } from '../Icon';
import { POPPER_OPTIONS, SELECT_CTX_KEY } from './constant';
import { computed, provide, reactive, ref, watch, type VNode } from 'vue';
import { useId , useFocusController, useClickOutside} from '@ym-UI/hooks';
import { eq, filter, find, size,get  ,noop, isFunction} from 'lodash-es';
import YmOption from './Option.vue'
import { nextTick } from 'process';


// 组件配置
defineOptions({
    name: "YmSelect"
})

// 组件状态
const props = withDefaults(defineProps<SelectProps>(),{
    options: () => [] as  SelectOptionProps[],
})

// 组件事件
const emits = defineEmits<SelectEmits>()

// 组件插槽
const slots = defineSlots()
// 禁用
const isDisabled = computed(() => props.disabled)
// inputId
const inputId = useId().value

const selectRef = ref<HTMLElement | null>(null) // select实例
const inputRef  = ref<InputInstance>() // 输入框实例
const tooltipRef = ref<TooltipInstance>() // tooltip实例

const initialOption = findOption(props.modelValue) // 初始值

// 下拉框状态
const selectStates = reactive<SelectStates>({
    highlightedIndex: -1, // 高亮索引
    inputValue: initialOption?.label || '', // 输入框值
    loading: false, // 加载状态
    mouseHover: false, // 鼠标悬停状态
    selectedOption: initialOption, // 选中值
})
 
const isDropdownVisible = ref(false) // 下拉框显示
const {
    wrapperRef: inputWrapperRef,
    isFocused,
    handlerBlur,
    handlerFocus
} = useFocusController(inputRef, {
    beforeBlur: () => {},
    afterBlur: () => {},
    afterFocus:() => {}
}) // 聚焦控制

// 下拉框状态
function toggleVisible() {
    if(isDisabled.value) return // 禁用状态
    controlVisible(!isDropdownVisible.value) // 控制下拉框显示
}


// 控制下拉框显示
function controlVisible(visible: boolean) {
   if(!tooltipRef.value) return 
   get(tooltipRef,["value",visible ? "show" :"hide"])?.() // 控制下拉框显示
   isDropdownVisible.value = visible // 更新下拉框状态
   emits("visible-change", visible) // 触发visible-change事件

   selectStates.highlightedIndex = -1 // 重置高亮索引
}

// 查找选项
function findOption(value:string) {
    return find(props.options,(opt) => opt.value === value)
}
const children = computed(() => filter(slots.default?.(),(child) => eq(child.type,YmOption))) // 子组件

const hasChildren = computed(() => size(children.value) > 0) // 是否有子组件

const showClear = computed(() => props.clearable && selectStates.mouseHover && selectStates.inputValue !== "") // 是否显示清除按钮

const highlightedLine = computed(() => {
    let result:SelectOptionProps | void
    if(hasChildren.value) {
        const node = children.value[selectStates.highlightedIndex] // 获取高亮节点
        result = node?.props?.value // 获取节点属性
    } else {
        result = props.options[selectStates.highlightedIndex] // 获取选项
    }
    return result
})
// 清除
function handleClear() {
    inputRef.value?.clear() // 清除输入框
    selectStates.inputValue = "" // 清除输入框值
    selectStates.selectedOption = null // 清除选中值
    emits("clear") // 触发clear事件
    emits("update:modelValue", "") // 更新值
    emits("change", "") // 触发change事件
    //TODO:  formItem 
}
// 选项渲染
function renderLabel(options: SelectOptionProps):VNode | string  {
    // 如果传入自定义的renderLabel函数，则使用该函数渲染
    if(isFunction(props.renderLabel)) {
        return props.renderLabel(options)
    } 
    return options.label
}

// 选择选项
function handleSelect(options:SelectOptionProps) {
    if(options.disabled) return // 禁用状态

    selectStates.inputValue = options.label // 更新输入框值
    selectStates.selectedOption = options // 更新选中值
    emits("update:modelValue", options.value) // 更新值
    emits("change", options.value) // 触发change事件
    //TODO:  formItem 
    controlVisible(false) // 关闭下拉框
    inputRef.value?.focus() // 聚焦输入框
}

// 依赖注入
provide<SelectContext>(SELECT_CTX_KEY,{
    handleSelect,
    selectStates,
    highlightedLine,
    renderLabel
})

const focus:SelectInstance["focus"] = () => inputRef.value?.focus() // 聚焦输入框
const blur:SelectInstance["blur"] = () => {
    handleClickOutside()
} // 失焦输入框

function handleClickOutside(e?: Event) {
    if(isFocused.value) {
        nextTick(() => {
            handlerBlur(new FocusEvent("focus",e))
        })
    }
}

function setSelected() {
    const opt = findOption(props.modelValue) // 获取选中值
    if(!opt) return 
    selectStates.inputValue = opt.label // 更新输入框值
    selectStates.selectedOption = opt // 更新选中值

}

useClickOutside(selectRef,(e) => handleClickOutside(e)) // 点击外部关闭下拉框

watch(
    () => props.modelValue,
    () => {
        setSelected()
    }
)

defineExpose<SelectInstance>({
    blur,
    focus
})
</script>

<template>
    <div
    ref="selectRef"
    class="ym-select"
    :class="{
      'is-disabled': isDisabled,
    }"
    @click.stop="toggleVisible"
    @mouseenter="selectStates.mouseHover = true"
    @mouseleave="selectStates.mouseHover = false"
  >
    <ym-tooltip
      ref="tooltipRef"
      placement="bottom-start"
      :popper-options="POPPER_OPTIONS"
      @click-outside="controlVisible(false)"
      manual
    >
      <template #default>
        <div ref="inputWrapperRef">
          <ym-input
            ref="inputRef"
            v-model="selectStates.inputValue"
            :id="inputId"
            :disabled="isDisabled"
            :placeholder="placeholder"
            :readonly="!filterable || !isDropdownVisible"
            @focus="handlerFocus"
            @blur="handlerBlur"
          >
            <template #suffix>
              <ym-icon
                v-if="showClear"
                icon="circle-xmark"
                class="ym-input__clear"
                @click.stop="handleClear"
                @mousedown.prevent="noop"
              />
              <ym-icon
                v-else
                class="header-angle"
                icon="angle-down"
                :class="{ 'is-active': isDropdownVisible }"
              />
            </template>
          </ym-input>
        </div>
      </template>
      <template #content>
        <div class="ym-select__loading" v-if="selectStates.loading">
          <ym-icon icon="spinner" spin />
        </div>

        <ul class="ym-select__menu" >
          <template v-if="!hasChildren">
            <ym-option
              v-for="item in options"
              :key="item.value"
              v-bind="item"
            />
          </template>
          <template v-else>
            <slot></slot>
          </template>
        </ul>
      </template>
    </ym-tooltip>
  </div>
</template>



<style scoped>

</style>