
<template>
    <ym-card>
        <template #header>
           <strong>这是卡片的header</strong>
        </template>
        <template #footer>
           <strong>这是卡片的footer</strong>
        </template>
        <p v-for="item in 4" :key="item">卡片内容</p>
    </ym-card>
</template>