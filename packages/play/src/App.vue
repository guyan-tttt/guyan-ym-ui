<script setup>
import { ref } from "vue";

const activeRef = ref(0);

const toggle = (value) => {
    console.log(value);
};
</script>

<template>
  <ym-switch name="switch" size="large" v-model="activeRef" @change="toggle" :activeValue="1" :inactiveValue="0" activeText="激活" inactiveText="未激活"></ym-switch>
</template>
