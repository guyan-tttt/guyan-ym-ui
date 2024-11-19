<template>
    <div class="container">
        <div class="item">
        <ym-icon  color="red"  icon="search" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  color="blue"  icon="house" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon color="green"  icon="user" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  color="yellow" icon="location-dot" size="2x"></ym-icon>
        </div>
        <div class="item">
        <ym-icon  color="pink"  icon="phone" size="2x"></ym-icon>
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
