<template>
    <ym-select 
    v-model="value"
     placeholder="请选择"
     filterable
     :filterMethod="filterMethod"
     :options="options"
    >
    </ym-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')

const options = [
    {
        value: '1',
        label: '选项1'
    },
    {
        value: '2',
        label: '选项2'
    },
    {
        value: '3',
        label: '选项3'
    },
    {
        value: '4',
        label: '选项4'
    },
    {
        value: '5',
        label: '选项5'
    }
]

const filterMethod = (value: string) => {
    return options.filter(item => item.label.includes(value))
}
</script>

<style scoped>

</style>