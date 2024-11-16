<script setup lang="ts">
const options = [
  {
    label: "目录一",
    handle: () => {}
  },
  {
    label: "目录二",
    handle: () => {}
  },
  {
    label: "目录三",
    handle: () => {}
  },
  {
    label: "目录四",
    handle: () => {}
  },
  {
    label: "目录五",
    handle: () => {}
  },
]
</script>

<template>
  <!-- <div class="container">
    <ym-context-menu :options="options">
       <div class="box"></div>
    </ym-context-menu>
  </div> -->
  
  <!-- <ym-button-group  size="small" type="primary" :disabled="false">
    <ym-button round icon="search" type="primary">按钮1</ym-button>
    <ym-button icon="search" type="primary">按钮1</ym-button>
    <ym-button  round type="primary">按钮2</ym-button>
  </ym-button-group>
  <ym-icon icon="search"></ym-icon> -->
  <ym-alert title="标题" type="primary">
    擦啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
  </ym-alert>
</template>

<style scoped>
.box {
  background-color: red;
  width: 100%;
  height: 100%;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
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
