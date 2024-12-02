<template>
    <ym-select 
    v-model="value"
     placeholder="请选择"
     filterable
     remote
     :options="options"
     :remoteMethod="remoteMethod"
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

const remoteMethod = (query: string) => {
   if(query) {
       return new Promise((resolve) => {
        setTimeout(() => {
                resolve(options.filter(item => item.label.includes(query)))
            },
        1000)
       })
   }
    
}
</script>

<style scoped>

</style>