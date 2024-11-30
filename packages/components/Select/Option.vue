<script setup lang="ts">
import { computed, inject } from 'vue';
import type { SelectOptionProps  } from './type';
import { SELECT_CTX_KEY } from './constant';
import { eq, every, get } from 'lodash-es';
import { RenderVnode } from '@ym-UI/utils';

defineOptions({
    name: 'YmOption'
})

const props = withDefaults(defineProps<SelectOptionProps>(), {
    disabled: false
})

const ctx  =  inject(SELECT_CTX_KEY)

const isHighlighted = computed(() => 
    every(['label','value'],key => 
        eq(get(ctx,["hightedLine",'value',"key"]),get(props,key))
))

const selected = computed(() => ctx?.selectStates.selectedOption?.value === props.value)

function handleClick() {
    console.log('点击了选项');
    
    if (props.disabled) return
    ctx?.handleSelect(props) // 调用父组件的handleSelect方法,选中当前项
}

</script>

<template>
     <li
    class="ym-select__menu-item"
    :class="{
      'is-disabled': disabled,
      'is-selected': selected,
      'is-highlighted': isHighlighted,
    }"
    :id="`select-item-${value}`"
    @click.stop="handleClick"
  >
    <slot>
      <render-vnode
        :vNode="ctx?.renderLabel ? ctx?.renderLabel(props) : label"
      />
    </slot>
  </li>
</template>



<style scoped>

</style>