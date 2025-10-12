<template>
    <div class="container">
        <p><h4>props指定</h4></p>
        <YmLightCode :code="codeStr1" width="650px" language="c++" />
        <p><h4>实例调用</h4></p>
        <YmLightCode :code="codeStr2" width="650px" ref="lightCodeRef" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type LightCodeInstance, } from 'guyan-ym-ui'
const codeStr1 = ref(
    `
    #include <iostream>
    #include <cstring>
    #include <cstdlib>
    int global_var = 10; // 初始化的全局变量，存储在数据段 (.data)
    static int static_var = 20; // 静态全局变量，存储在数据段 (.data)
    const int const_var = 30; // 常量，存储在只读数据段 (.rodata)
    void exampleFunction() {
    int local_var = 40; // 局部变量，存储在栈区 (stack)
    static int static_local = 50; // 静态局部变量，存储在数据段 (.data)
    char* dynamic_mem = (char*)malloc(10); // 动态分配内存，存储在堆区 (heap)
    std::cout << "局部变量地址: " << &local_var << std::endl;
    std::cout << "静态局部变量地址: " << &static_local << std::endl;
    std::cout << "动态分配内存地址: " << (void*)dynamic_mem << std::endl;
    free(dynamic_mem); // 释放动态内存
    }
    int main() {
    std::cout << "全局变量地址: " << &global_var << std::endl;
    std::cout << "静态全局变量地址: " << &static_var << std::endl;
    std::cout << "常量地址: " << &const_var << std::endl;
    exampleFunction();
    return 0;
    }
    `
)
const codeStr2 = ref(
    `
    import java.text.SimpleDateFormat;
    import java.util.Date;
    SimpleDateFormat format = new SimpleDateFormat("dd.MM.yyyy");
    Date date = format.parse("25.12.2023");
    System.out.println(date);
`
)
const lightCodeRef = ref<LightCodeInstance | null>(null)

const copyText = () => {
    lightCodeRef.value?.setLanguage('java')
}
onMounted(() => {
    console.log(lightCodeRef.value)
})
</script>

<style scoped>
</style> 