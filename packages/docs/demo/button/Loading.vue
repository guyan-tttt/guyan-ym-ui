<template>
  <div>
    <ym-button type="primary" loading>Loading</ym-button>
    <ym-button type="primary" loading-icon="circle-notch" loading
      >Loading</ym-button
    >
    <ym-button type="primary" loading>
      <template #loading>
        <ym-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </ym-button>
  </div>
</template>
