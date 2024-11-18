<template>
    <ym-context-menu type="primary" customize >
        <div class="content">自定义菜单内容</div>
        <template #menu>
            <ym-button type="success" circle icon="search"></ym-button>
            <ym-button type="danger" circle icon="search"></ym-button> 
            <ym-button type="warning" circle icon="search"></ym-button>
        </template>
    </ym-context-menu>
</template>

<script setup>
</script>

<style scoped>
.content {
    width: 400px;
    height: 100px;
    background-color: #ececec;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin: 5px 0;
}
</style>