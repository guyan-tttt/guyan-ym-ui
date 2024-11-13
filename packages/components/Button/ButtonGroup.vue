<script setup lang="ts">
import  type { ButtonGroupProps  } from './type.ts';
import { provide , reactive,toRef } from 'vue'
import { BUTTON_GROUP_CTX_KEY } from './constant.ts';


defineOptions({
    name: 'YmButtonGroup',
    inheritAttrs: false
})

const props = defineProps<ButtonGroupProps>()

// 注入依赖
provide(
    BUTTON_GROUP_CTX_KEY,
    reactive({
        size: toRef(props,'size'),
        type: toRef(props,"type"),
        disabled: toRef(props,"disabled"),
    })
)

</script>

<template>
    <div class="ym-button-group">
        <slot></slot>
    </div>
</template>



<style scoped>
@import "./style.css";
</style>