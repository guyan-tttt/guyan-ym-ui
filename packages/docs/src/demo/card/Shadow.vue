
<template>
    <div class="container">
        <ym-card shadow="always">
            <template #header>
                <strong>shadow: always</strong>
            </template>
            这是一个卡片组件容器
        </ym-card>
        <ym-card shadow="hover">
            <template #header>
                <strong>shadow: hover</strong>
            </template>
            这是一个卡片组件容器
        </ym-card>
        <ym-card shadow="never">
            <template #header>
                <strong>shadow: never</strong>
            </template>
            这是一个卡片组件容器
        </ym-card>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
}
</style>