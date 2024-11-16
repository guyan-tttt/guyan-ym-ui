<script setup>
function handleBtnClick() {
  // ErMessage.info("btn click");
}
</script>

<template>
  <p>
    <ym-button @click="handleBtnClick"> with throttle</ym-button>
    <ym-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</ym-button
    >
  </p>
</template>
