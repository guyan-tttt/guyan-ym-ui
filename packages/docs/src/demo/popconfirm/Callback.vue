<template>
  <ym-popconfirm
    width="220"
    confirm-button-text="Delete"
    cancel-button-text="No,Thanks"
    icon="trash"
    icon-color="#626aef"
    title="Are you sure to delete this item?"
    @confirm="message('Confirmed')"
    @cancel="message('Cancelled')"
  >
    <ym-button>Delete</ym-button>
  </ym-popconfirm>
</template>
<script setup>
const message = (msg) => {
  alert(msg)
}
</script>
