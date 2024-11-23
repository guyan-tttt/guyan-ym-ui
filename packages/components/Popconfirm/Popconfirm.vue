<script setup lang="ts">
import type {  PopconfirmProps, PopconfirmEmits  } from './types'
import { withDefaults , ref, computed } from 'vue';
import YmTooltip from  '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip'
import YmIcon from '../Icon/Icon.vue'
import YmButton from '../Button/Button.vue'
import { addUnit } from '@ym-UI/utils'
import { useLocale } from '@ym-UI/hooks';

defineOptions({
    name: "YmPopconfirm"
})

const props = withDefaults(defineProps<PopconfirmProps>(),{
    cancelButtonType: "default",
    confirmButtonType: "primary",
    title:"确定当前操作吗？",
    icon: "check-circle",
    iconColor: "green",
    hideIcon: false,
    hideAfter: 200, // 默认延迟500ms消失
    width: 200, // 默认为200px宽度
})

const emits = defineEmits<PopconfirmEmits>()

const tooltipRef = ref<TooltipInstance>()

const style = computed(() => ({width: addUnit(props.width)}))

function hidePopper() {
    tooltipRef.value?.hide()
}
function confirm(e: Event) {
    emits("confirm",e as MouseEvent)
    hidePopper()
}
function cancel(e: Event) {
    emits("cancel",e as MouseEvent)
    hidePopper()
}
const { t } = useLocale()

</script>

<template>
    <ym-tooltip ref="tooltipRef" 
    :hide-timeout="hideAfter" 
    trigger="click"
    :width="width"
    >
        <template #content>
            <div class="ym-popconfirm" :style="style">
                <div class="ym-popconfirm__main">
                    <ym-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor"></ym-icon>
                    {{ title }}
                </div>
                <div class="ym-popconfirm__action">
                    <ym-button class="ym-popconfirm__cancel" size="small" :type="cancelButtonType"  @click="cancel">
                        {{ cancelButtonText || t("popconfirm.cancelButtonText") }}
                    </ym-button>
                    <ym-button class="ym-popconfirm__confirm" size="small" :type="confirmButtonType"  @click="confirm">
                        {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
                    </ym-button>
                </div>
            </div>
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
@import './style.css';
</style>