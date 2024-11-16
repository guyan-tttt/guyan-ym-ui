<script setup>
// import { ErMessage } from "guyan-ym-ui";

function handleClose() {
  // ErMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <ym-alert title="Unclosable alert" type="success" :closable="false" />
    <ym-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
