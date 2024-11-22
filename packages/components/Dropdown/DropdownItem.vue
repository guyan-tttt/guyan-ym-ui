<script setup lang="ts">
import type { DropdownItemProps  } from './type'
import { DROPDOWN_CTX_KEY } from './constant';
import { inject,computed  } from 'vue';
import { useId } from '@ym-UI/hooks';

defineOptions({
    name: 'YmDropdownItem',
})

const props = withDefaults(defineProps<DropdownItemProps>(),{
    disabled: false,
    divided: false,
    command: useId().value,
})

console.log(useId);


const ctx = inject(DROPDOWN_CTX_KEY)

const size = computed(() => ctx?.size.value)

const handleClick =  () => {
    if(props.disabled) return 
    ctx?.handleItemClick(props)
}

</script>

<template>
     <li v-if="divided" role="separator" class="divided-placeholder"></li>
    <li
        :id="`dropdown-item-${command ?? useId().value}`"
        :class="{
        'ym-dropdown__item': true,
        ['ym-dropdown__item--' + size]: size,
        'is-disabled': disabled,
        'is-divided': divided,
        }"
        @click="handleClick"
    >
        <slot>
        {{ label }}
        </slot>
    </li>
</template>



<style scoped>
@import './style.css';
</style> 