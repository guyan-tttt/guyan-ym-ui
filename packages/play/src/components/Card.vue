<script setup lang="ts">

</script>

<template>
    <div class="ym-card is-never-shadow ">
        <div class="ym-card__header" v-if="$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="ym-card__content">
            <slot name="default"></slot>
        </div>
        <div class="ym-card__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>



<style scoped>
.ym-card {
    min-width: 200px;
    border-radius: 4px;
    border: 1px solid #eaeaea;
    overflow: hidden;
    color: #000;
    transition: all 0.3s ease-in-out;
}
.ym-card__header {
    padding: 20px;
    border-bottom: 1px solid #eaeaea;
}
.ym-card__content {
    padding:  20px;
}
.ym-card__footer {
    padding: 20px;
    border-top: 1px solid #eaeaea;
}
.is-always-shadow {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.is-hover-shadow:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.is-never-shadow {
    box-shadow: none;
}
</style>