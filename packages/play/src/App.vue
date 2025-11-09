<template>
  <ym-context-menu type="primary" :options="options">
      <div class="content">primary</div>
  </ym-context-menu>
  <ym-context-menu type="success" :options="options">
      <div class="content">success</div>
  </ym-context-menu>
  <ym-context-menu type="info" :options="options">
      <div class="content">info</div>
  </ym-context-menu>
  <ym-context-menu type="danger" :options="options">
      <div class="content">danger</div>
  </ym-context-menu>
  <ym-context-menu type="warning" :options="options">
      <div class="content">warning</div>
  </ym-context-menu>
  <ym-context-menu type="primary" customize >
        <div class="content">自定义菜单内容</div>
        <template #menu>
            <ym-button type="success" circle icon="search"></ym-button>
            <ym-button type="danger" circle icon="search"></ym-button> 
            <ym-button type="warning" circle icon="search"></ym-button>
        </template>
    </ym-context-menu>
</template>

<script setup>
import { YmContextMenu } from '../../components';

const options = [
  {
      label: "菜单1",
      handle: () => {
          console.log("菜单1")
      }
  },
  {
      label: "菜单2",
      handle: () => {
          console.log("菜单2")
      }   
  },
  {
      label: "菜单3",
      handle: () => {
          console.log("菜单3")
      }
  }
]

</script>

<style scoped>
.content {
  width: 400px;
  height: 100px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 5px 0;
}
</style>