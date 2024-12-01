<script setup>
import { ref } from "vue";

const activeRef = ref(0);

const toggle = (value) => {
    console.log(value);
};

const options = [
  {
    label: "选项1",
    value: 1,
  },
  {
    label: "选项2",
    value: 2,
  },
  {
    label: "选项3",
    value: 3,
  },
];
</script>

<template>
  <ym-select v-model="activeRef" clearable filterable :options="options">
  </ym-select>
</template>
