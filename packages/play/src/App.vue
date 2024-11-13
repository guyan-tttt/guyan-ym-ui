<script setup lang="ts">
// import { YmButtonGroup, YmIcon,YmButton} from 'guyan-ym-ui'
</script>

<template>
  <ym-button type="primary" size="large">这是一个按钮</ym-button>
  <br/>
  <ym-button-group  size="small" type="primary" :disabled="false">
    <ym-button round icon="search" type="primary">按钮1</ym-button>
    <ym-button icon="search" type="primary">按钮1</ym-button>
    <ym-button  round type="primary">按钮2</ym-button>
  </ym-button-group>
  <ym-icon icon="search"></ym-icon>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
