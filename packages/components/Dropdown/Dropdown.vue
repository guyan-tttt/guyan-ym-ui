<script setup lang="ts">
import type {  DropdownProps , DropdownContext, DropdownEmits, DropdownInstance, DropdownItemProps} from './type'
import { computed, ref,provide } from 'vue'
import type { TooltipInstance } from '../Tooltip/type.ts'
import type { ButtonInstance } from '../Button/type.ts'
import { omit , isNil } from 'lodash-es'
import YmTooltip from '../Tooltip/Tooltip.vue'
import DropdownItem from './DropdownItem.vue'
import { YmButtonGroup , YmButton} from  '../Button'
import { DROPDOWN_CTX_KEY } from './constant.ts'
import { useDisabledStyle } from '@ym-UI/hooks'

defineOptions({
    name: 'YmDropdown',
    inheritAttrs: false
})

const props = withDefaults(defineProps<DropdownProps>(),{
    trigger: "click",
    hideOnClick: true,
    item: () => [] as DropdownItemProps[],
})

const emit  = defineEmits<DropdownEmits>()

const slots = defineSlots()

// 弹框实例
const tooltipRef = ref<TooltipInstance>()

// 触发按钮实例
const triggerRef = ref<ButtonInstance>()

// 过滤掉不需要的参数
const tooltipParams  = computed(() => omit(props, ["items",'hideOnClick',"size","type","splitButton"]))

const virtualRef = computed(() => {
    return triggerRef.value?.ref ?? void 0
})
defineExpose<DropdownInstance>({
    open: () => tooltipRef.value?.show(),
    close: () => tooltipRef.value?.hide()
})

function handleItemClick(e: DropdownItemProps) {
    props.hideOnClick && tooltipRef.value?.hide()
    !isNil(e.command) && emit('command', e.command)
}

// 依赖注入
provide<DropdownContext>(DROPDOWN_CTX_KEY,{
    handleItemClick,
    size: computed(() => props.size)
})

!TEST && useDisabledStyle()
</script>

<template>
    <div class="ym-dropdown"
    :class="{
        'is-disabled': props.disabled,
    }"
    >
    <YmTooltip 
    ref="tooltipRef"
     v-bind="tooltipParams"
     :virtual-ref="virtualRef?.value"
     @visible-change="$emit('visible-change',$event)"
     >
     <!-- 默认切换按钮 -->

     <YmButtonGroup v-if="splitButton" :type="type" :size="size" :disabled="disabled">
        <YmButton  @click.stop="$emit('click',$event as any)">
            <slot name="default"></slot>
        </YmButton>
        <YmButton  ref="triggerRef" icon="angle-down"/>
     </YmButtonGroup>

     <!-- 自定义切换按钮 -->
     <slot v-else name="default"></slot>

    <template #content>
        <!-- 菜单内容 -->
        <div class="ym-dropdown__menu">
            <slot name="dropdown">
                <template v-for="item in items" :key="item.command">
                    <DropdownItem v-bind="item"></DropdownItem>
                </template>
            </slot>
        </div>
    </template>
    </YmTooltip>
    </div>
</template>



<style scoped>
@import './style';
</style>