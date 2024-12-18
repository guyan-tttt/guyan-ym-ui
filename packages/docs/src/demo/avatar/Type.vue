<template>
    <div class="container">
        <div class="list">
            <ym-avatar icon="user" :size="60"></ym-avatar>
            <ym-avatar src="https://jeek-space-blog.top:3000/images/user/8e9bab04192dea62e77cb066e6c3c7d3.jpeg" :size="60"></ym-avatar>
            <ym-avatar  :size="60">
                <ym-icon icon="home" color="#fff"></ym-icon>
            </ym-avatar>

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