<script setup lang="ts">
import  type {  AlertProps,AlertEmits,AlertInstance  } from './types';
import { withDefaults , ref , computed, useSlots } from 'vue'
import { typeIconMap } from '@ym-UI/utils'
import YmIcon from '../Icon/Icon.vue';

defineOptions({
    name: "YmAlert"
})

const props = withDefaults(defineProps<AlertProps>(),{
    effect: "light",
    type: "info",
    closable: true,
})

const emits = defineEmits<AlertEmits>();

const slots = useSlots()

const visible = ref<boolean>(true)

function open() {
    visible.value = true
}

function close() {
    visible.value = false
    emits("close")
}

const withDescription = computed(() => props.description || slots.default)
const iconName = computed(() => typeIconMap.get(props.type) ?? "circle-info")

defineExpose<AlertInstance>({
    open,
    close
})

</script>

<template>
    <transition name="ym-alert-fade">
    <div
      v-show="visible"
      class="ym-alert"
      role="alert"
      :class="{
        [`ym-alert__${type}`]: type,
        [`ym-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <ym-icon
        v-if="showIcon"
        class="ym-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="ym-alert__content">
        <span
          class="ym-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="ym-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="ym-alert__close" v-if="closable">
          <ym-icon @click.stop="close" icon="xmark" />
        </div>
      </div>
    </div>
  </transition>
</template>



<style scoped>

</style>