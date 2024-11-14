<script setup lang="ts">
import type { CollapseProps, CollapseEmits, CollapseItemName  } from './type'
import { COLLAPSE_CTX_KEY  } from './constant';
import { provide , ref, watch, watchEffect } from 'vue';
import { debugWarn  } from '@ym-UI/utils'

const componentName = "YmCollapse" as const;

defineOptions({
    name: componentName
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref(props.modelValue)



function handleItemClick(item: CollapseItemName) {
    //TODO: 判断是否为手风琴模式
    // 1. 判断是否为手风琴模式
    let _activeNames = [...activeNames.value]
    if(props.accordion) {
        _activeNames = [_activeNames[0] === item ? "" : item]
        updateActiveNames(_activeNames)
        return
    }
    // 2.正常模式
    const index = _activeNames.indexOf(item)
    if(index > -1) {
        _activeNames.splice(index,1) // 如果index存在则当前的组件是打开状态，移除对应的名称watchj即可监听到并关闭
    } else {
        _activeNames.push(item)
    }
    updateActiveNames(_activeNames)

}

function updateActiveNames(newNames: CollapseItemName[]) {
    activeNames.value = newNames;
    emits('update:modelValue', newNames)
    emits('change', newNames)
}

// 依赖注入
provide(COLLAPSE_CTX_KEY,{
    activeNames,
     handleItemClick
})

// 监听激活组件的变化
watch(
    () => props.modelValue,
    (newNames) => {
        updateActiveNames(newNames)
    }
)
watchEffect(() =>   {
    // 判断是否为手风琴模式
    if(props.accordion && activeNames.value.length > 1) {
        debugWarn(componentName,"accordion mode should only have one active item(手风琴模式应该只有一个激活的组件)")
    }
})
</script>

<template>
    <div class="ym-collapse">
        <slot></slot>
    </div>
</template>



<style scoped>
@import './style.css';
</style>