<script setup lang="ts">
import type { SelectProps,SelectOptionProps, SelectEmits, SelectStates, SelectContext, SelectInstance } from './type';
import { YmInput, type InputInstance } from '../Input';
import { YmTooltip, type TooltipInstance } from '../Tooltip';
import { YmIcon } from '../Icon';
import { POPPER_OPTIONS, SELECT_CTX_KEY } from './constant';
import { computed, provide, reactive, ref, watch, type VNode ,nextTick, type Ref, h, onMounted} from 'vue';
import { useId , useFocusController, useClickOutside} from '@ym-UI/hooks';
import { eq, filter, find, size,get  ,noop, isFunction, map, isBoolean, isNil, assign, includes, each, debounce} from 'lodash-es';
import YmOption from './Option.vue'
import { debugWarn } from '@ym-UI/utils';
import { RenderVnode } from '@ym-UI/utils';
import useKeyMap from './useKeyMap';

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
   props.filterable && controlInputValueVisible(visible)
   isDropdownVisible.value = visible // 更新下拉框状态
   emits("visible-change", visible) // 触发visible-change事件

   selectStates.highlightedIndex = -1 // 重置高亮索引
}

function controlInputValueVisible(visible: boolean) {
  if(!props.filterable) return 
  if(visible) {
    if(selectStates.selectedOption) selectStates.inputValue = "" 
    handleFilterDebounce()
    return 
  } 
  selectStates.inputValue = selectStates.selectedOption?.label ?? ""

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
        const node = [...filterChilds.value][selectStates.highlightedIndex]?.[0] // 获取高亮节点
        // result = node?.props?.value // 获取节点属性
        result = filterChilds.value.get(node) // 获取节点属性
    } else {
        result = filterOptions.value[selectStates.highlightedIndex] // 获取选项
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

// 监听选中值变化
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

const filterChilds:Ref<Map<VNode, SelectOptionProps>> = ref(new Map()) // 子组件映射
const filterOptions = ref(props.options ?? [])

const childrenOptions = computed(()  => {{
  if(!hasChildren.value) return []
  return map(children.value,item => {
    return {
      VNode: h(item),
      props: assign(item.props, {
        disabled: item.props.disabled === true || (!isNil(item.props.disabled) && !isBoolean(item.props.disabled)) // 判断是否禁用
      })
    }
  })
}})

const isNoData = computed(() => {
  if(!props.filterable) return false
  if(!hasData.value) return true
  return false
} )

// 判断当前是否有值
const hasData = computed(() => {
  return (hasChildren.value && filterChilds.value.size > 0) || (!hasChildren.value && size(filterOptions.value) > 0)
})

// 最大索引
const lastIndex = computed(() => hasChildren.value ? filterChilds.value.size - 1 : size(filterOptions.value) - 1)

// 处理输入值检索
const handleFilter = () => {
  const  searchKey = selectStates.inputValue
  selectStates.highlightedIndex = -1
  if(hasChildren.value) {
    genFilterChildrens(searchKey)
  } else {
    genFilterOptions(searchKey)
  }
}
// 传入插槽的检索处理
const genFilterChildrens = async(search: string) => {
  if(!props.filterable) return  // 判断当前是否开启了可检索功能

  // 判断当前是否需要做远程检索且传入的远程检索必须的参数
  if(props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    await callRemoteMethod(props.remoteMethod, search)
    setFilterChilds(childrenOptions.value)
    return 
  } 
  // 判断用户是否自定义了filter需要的方法
  if(props.filterMethod && isFunction(props.filterMethod)) {
    const opts = map(props.filterMethod(search),"value")
    setFilterChilds(
      filter(childrenOptions.value, item => includes(opts, get(item,["props",'value'])))
    )
    return 
  }
  setFilterChilds(
    filter(childrenOptions.value, item => includes(get(item, ['props','label']),search))
  )

}

// 传入选项的检索处理
const genFilterOptions = async(search: string) => {
  if(!props.filterable) return 
  if(props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    filterOptions.value  = await callRemoteMethod(props.remoteMethod, search)
    return 
  }
  if(props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(search)
    return 
  }
  // 模糊匹配label含有关键词的选项
  filterOptions.value = filter(props.options,(opt) => includes(opt.label,search))

}

const callRemoteMethod = async(remoteMethod: Function, search: string) => {
  if(!remoteMethod || !isFunction(remoteMethod)) return 
  selectStates.loading = true // 开启加载
  let result
  try{
    result = await remoteMethod(search) // 执行检索
  }
  catch(e) {
    debugWarn(e as Error)
    debugWarn("YmSelect", "callRemoteMethod error")
    result = []
    return Promise.reject(e)
  } finally {
    selectStates.loading = false // 关闭加载
  }
  return result

}
const setFilterChilds = (opts: typeof childrenOptions.value) => {
  filterChilds.value.clear()
  each(opts,item => {
    filterChilds.value.set(item.VNode, item.props as SelectOptionProps)
  })
}

const timeout = computed(() => {
  if(props.remote) return 300
  return 100
})

const handleFilterDebounce = debounce(handleFilter,timeout.value)

const filterPlaceholder = computed(() => {
  return props.filterable && selectStates.selectedOption && isDropdownVisible.value ? selectStates.selectedOption.label : props.placeholder 
})


onMounted(() => {
  setSelected()
})

watch(
  () => props.options, 
  (newValue) => {
    filterOptions.value = newValue ?? []
  }
)

watch(
  () => childrenOptions.value ,
  (newVal) => {
    setFilterChilds(newVal)
  },
  {
    immediate: true
  }
)

// 键盘邦定事件map
const keyMap  = useKeyMap({
isDropdownVisible,
controlVisible,
selectStates,
highlightedLine,
hasData,
lastIndex,
handleSelect
})

const handleKeyDown = (e: KeyboardEvent) => {
  console.log(e);
  keyMap.has(e.key) && keyMap.get(e.key)?.(e)
}


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
            :placeholder="filterable ? filterPlaceholder : placeholder"
            :readonly="!filterable || !isDropdownVisible"
            @focus="handlerFocus"
            @blur="handlerBlur"
            @input="handleFilterDebounce"
            @keydown="handleKeyDown"
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
        <div class="ym-select__nodata" v-else-if="filterable && isNoData" >
          No Data
        </div>
        <ul class="ym-select__menu" v-else>
          <template v-if="!hasChildren">
            <ym-option
              v-for="item in filterOptions"
              :key="item.value"
              v-bind="item"
            />
          </template>
          <template v-else>
            <template v-for="[vNode, _props] in filterChilds" :key="_props.value">
              <render-vnode :vNode="vNode"></render-vnode>
            </template>

          </template>
        </ul>
      </template>
    </ym-tooltip>
  </div>
</template>



<style scoped>
@import './style';
</style>