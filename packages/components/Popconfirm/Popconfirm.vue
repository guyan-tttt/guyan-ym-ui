<script setup lang="ts">
import type {  PopconfirmProps, PopconfirmEmits  } from './types'
import { withDefaults , ref} from 'vue';
import YmTooltip from  '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip'
import YmIcon from '../Icon/Icon.vue'

defineOptions({
    name: "YmPopconfirm"
})

const props = withDefaults(defineProps<PopconfirmProps>(),{
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    cancelButtonType: "default",
    confirmButtonType: "default",
    title:"确定当前操作吗？",
    icon: "check-circle",
    iconColor: "green",
    hideIcon: false,
    hideAfter: 200, // 默认延迟500ms消失
    width: 200, // 默认为200px宽度
})

const tooltipRef = ref<TooltipInstance>()

</script>

<template>
    <ym-tooltip ref="tooltipRef" 
    :hide-timeout="hideAfter" 
    trigger="click"
    :width="width"
    >
        <template #content>
            <div class="ym-popconfirm"></div>
        </template>
        <template v-if="$slots.default" #default>
            <slot name="default"></slot>
        </template>
        <template v-if="$slots.reference" #default>
            <slot name="reference"></slot>
        </template>
    </ym-tooltip>
</template>



<style scoped>

</style>