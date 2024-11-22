<script setup lang="ts">
import { type DropdownItemProps} from "guyan-ym-ui";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  // ErMessage.info("button click");
  alert("button click")
}
</script>

<template>
  <div class="row">
    <ym-dropdown :items="items" placement="bottom">
      <ym-button type="primary">
        Dropdown List
        <ym-icon icon="angle-down" style="margin-left: 8px" />
      </ym-button>
    </ym-dropdown>
    <ym-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </ym-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
