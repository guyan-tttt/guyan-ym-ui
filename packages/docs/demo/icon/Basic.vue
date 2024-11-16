<template>
    <div class="container">
        <div class="item">
        <ym-icon  type="primary" icon="search" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  type="success" icon="house" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  type="warning" icon="user" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  type="danger" icon="location-dot" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon type="info"  icon="phone" size="2x"></ym-icon>
        </div>


    </div>
</template>

<script setup lang="ts">

</script>
<style scoped>
.container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
}
</style>
