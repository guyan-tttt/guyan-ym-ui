<script setup lang="ts">
import { YmDropdown } from 'guyan-ym-ui';

const items = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

const handleCommand:any = (command: string) => {
  alert(command)
}
const handleClick = () => [
  alert('click')
]
</script>

<template>
  <div class="container">
    <!-- <ym-dropdown>
        <span class="dropdown-link">
          Dropdown List
          <ym-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <ym-dropdown-item command="1">Action 1</ym-dropdown-item>
          <ym-dropdown-item command="2" label="Action 2" />
          <ym-dropdown-item command="3" disabled>Action 3</ym-dropdown-item>
          <ym-dropdown-item command="4" divided>Action 4</ym-dropdown-item>
        </template>
    </ym-dropdown> -->
    <ym-dropdown :items="items"  splitButton @click="handleClick">
    <span class="dropdown-link">
      Dropdown List
      <ym-icon icon="angle-down" />
    </span>
  </ym-dropdown>
  </div>

</template>

<style scoped>
.box {
  /* background-color: red; */
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
