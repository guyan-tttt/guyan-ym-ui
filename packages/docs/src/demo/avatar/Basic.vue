<template>
    <div class="container">
        <h3>circle</h3>
        <div class="list">
            <ym-avatar icon="user" size="small"></ym-avatar>
            <ym-avatar icon="user"></ym-avatar>
            <ym-avatar icon="user" size="large"></ym-avatar>
            <ym-avatar icon="user" :size="60"></ym-avatar>
            <ym-avatar icon="user" :size="70"></ym-avatar>
        </div>
    </div>
    <div class="container">
        <h3>square</h3>
        <div class="list">
            <ym-avatar icon="user" size="small" shape="square"></ym-avatar>
            <ym-avatar icon="user" shape="square"></ym-avatar>
            <ym-avatar icon="user" size="large" shape="square"></ym-avatar>
            <ym-avatar icon="user" :size="60" shape="square"></ym-avatar>
            <ym-avatar icon="user" :size="70" shape="square"></ym-avatar>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.list {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
}
</style>