<script setup lang="ts">
import { computed, type Ref } from 'vue';
import type { LoadingOptions  } from './type'
import { isString } from 'lodash-es';
import YmIcon from '../Icon/Icon.vue'

defineOptions({
    name: 'YmLoading',
    inheritAttrs: false
})

const props = defineProps<LoadingOptions>()

const iconName = computed(() => {
    if(isString(props.spinner)) {
        return props.spinner
    } else {
        return "spinner"
    }
})

</script>


<template>
    <transition name="fade-in-linear" @after-leave="onAfterLeave">
    <div
      v-show="(props.visible as Ref).value"
      class="ym-loading ym-loading__mask"
      :class="{ 'is-fullscreen': fullscreen }"
    >
      <div class="ym-loading__spinner">
        <ym-icon v-if="props.spinner !== false" :icon="iconName" spin />
        <p v-if="text" class="ym-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>



<style >
@import './style';
.ym-loading {
  --ym-loading-bg-color: v-bind(background) !important;
  --ym-loading-z-index: v-bind(zIndex) !important;
}
</style>