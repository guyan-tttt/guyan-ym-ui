<template>
    
    <div class="container">
        <h3>返回String</h3>
        <ym-select v-model="value1" placeholder="请选择" :renderLabel="renderLabel1">
        <ym-option label="选项1" value="1"></ym-option>
        <ym-option label="选项2" value="2"></ym-option>
        <ym-option label="选项3" value="3"></ym-option>
    </ym-select>
    </div>
    <div class="container">
        <h3>返回VNode</h3>
        <ym-select v-model="value2" placeholder="请选择" :renderLabel="renderLabel2">
        <ym-option label="选项1" value="1"></ym-option>
        <ym-option label="选项2" value="2"></ym-option>
        <ym-option label="选项3" value="3"></ym-option>
    </ym-select>
    </div>
</template>

<script setup lang="ts">
import { ref , h} from 'vue'
import   { type SelectOptionProps, YmButton } from 'guyan-ym-ui';

const value1 = ref('')
const value2 = ref('')

const renderLabel1 = (option: SelectOptionProps) => {
        return `这个是${option.label}`
}
const renderLabel2 = (option: SelectOptionProps) => {
    return h(YmButton, { type: 'primary' }, `这个是${option.label}`)
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
h3 {
    margin: 20px 0;
}
</style>