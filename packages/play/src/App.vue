<script setup lang="ts">
import { type DropdownItemProps } from "guyan-ym-ui";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="desc">通过 slot 传入 item</div>
      <ym-dropdown>
        <span>
          Dropdown List
          <ym-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <ym-dropdown-item command="1">Action 1</ym-dropdown-item>
          <ym-dropdown-item command="2" label="Action 2" />
          <ym-dropdown-item command="3" disabled>Action 3</ym-dropdown-item>
          <ym-dropdown-item command="4">Action 4</ym-dropdown-item>
        </template>
      </ym-dropdown>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1;
}
.desc {
  display: block;
  color: var(--ym-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
.link {
  display: flex;
  align-items: center;
  color: var(--ym-color-primary);
  
}
i {
    margin-left: 8px;
  }
</style>
