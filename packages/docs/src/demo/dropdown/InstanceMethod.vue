<script setup lang="ts">
import type { DropdownItemProps, DropdownInstance } from "guyan-ym-ui";
import { ref } from "vue";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropdownInstance>();
</script>

<template>
  <ym-button @click="() => dropdownRef?.open()" type="primary">open</ym-button>
  <ym-button @click="() => dropdownRef?.close()" >close</ym-button>
  <br />
  <ym-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <ym-icon icon="angle-down" />
    </span>
  </ym-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--ym-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
