

<script setup lang="ts">
import { debugWarn } from '@ym-UI/utils';
import { isArray } from 'lodash-es';
import { computed, ref, watch, watchEffect } from 'vue';
import type { PaginationEmits, PaginationProps } from './type'
import YmIcon from '../Icon/Icon.vue'
import YmInput from '../Input/Input.vue'
import YmSelect from '../Select/Select.vue'

defineOptions({
    name: 'YmPagination'
})


const props = withDefaults(defineProps<PaginationProps>(), {
    background: false,
    pageSize: 5,
    pagerCount: 5,
    currentPage: 1,
    pageSizes: [5, 10, 15, 20] as any,
    disabled: false,
    jumper: false,
    sizeSelector: false,
    totalor: false,
    prevIcon: "chevron-left",
    nextIcon: "chevron-right"
})

const emits = defineEmits<PaginationEmits>()


// 当前页码
const currentIndex = ref(props.currentPage)

const currentPageSize = ref(props.pageSize)

// 是否显示上一页或下一页为省略号
const showPrevMore = ref<boolean>(false)
const showNextMore = ref<boolean>(false)

const count = computed(() => {
    return Math.ceil(props.total! / currentPageSize.value)
})

// 处理上一页或下一页为省略号
watchEffect(() => {
    // 取当前需要显示的页码数的中位数，之后用于判断当前页面在于中位数左边还是右边
    const halfPagerCount = (props.pagerCount - 1) / 2 // 2.5
    // 重新初始化
    showNextMore.value = false
    showPrevMore.value = false
    // 总数是否大于页码数，如果否，则说明当前不需要显示省略号
    if(props.total! > currentPageSize.value) {
        // 显示上一页省略号
        if(currentIndex.value! > props.pagerCount! - halfPagerCount) {
            showPrevMore.value = true
        }
        // 显示下一页省略号
        if(currentIndex.value! < count.value! - halfPagerCount) {
            showNextMore.value = true
        }
    }
})




// 需要显示的页码列表 
const pagers = computed(() => {
    const pagerCount = props.pagerCount
    const halfPagerCount = (pagerCount - 1) / 2
    const currentPage = currentIndex.value
    const pageCount = Number(count.value!)
    let showPrevMore = false
    let showNextMore = false
    if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
        showPrevMore = true
        }
        if (currentPage < pageCount - halfPagerCount) {
        showNextMore = true
        }
    }
    
    const array:number[] = []
    if(showPrevMore && !showNextMore) {
        const startPage = pageCount - (pagerCount - 2)
        for(let i = startPage; i < pageCount; i++) {
            array.push(i)
        }
    } else if(!showPrevMore && showNextMore) {
        for(let i = 2; i < pagerCount; i++) {
            array.push(i)
        }
    } else if(showNextMore && showPrevMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
        array.push(i)
        }
    }
     else {
        for(let i = 2; i < pageCount; i++) {
            array.push(i)
        }
    }
    return array
})


// 单击对应的页码
const handleClick = (index: number) =>  {
    if(props.disabled) return
    if(index > 0 && index <= count.value!) {
        currentIndex.value = index
        // 触发事件提交
        emits("current-change", index)
    }
}

// 上一页
const handlePrevClick = () => {
    if(props.disabled) return
    if(currentIndex.value > 1) {
        currentIndex.value--
        emits("current-change", currentIndex.value)
        emits("prev-click", currentIndex.value)
    }
}

// 下一页
const handleNextClick = () => {
    if(props.disabled) return
    if(currentIndex.value < count.value!) {
        currentIndex.value++
        emits("current-change", currentIndex.value)
        emits("next-click", currentIndex.value)
    }
}

const inputValue = ref<string>("")

const sizeValue = ref<string | number>(currentPageSize.value)

// 改变每页显示的条数
const pageSizeList = computed(() => {
    if(isArray(props.pageSizes) && props.pageSizes.length > 0) {
        return props.pageSizes.map(item => {
            return {
                label: `${item}/页`,
                value: item
            }
        })
    }
})

const handleSizeChange = (val: string) => {
    const value = Number(val)
    if(value > 0) {
        currentPageSize.value = value
        currentIndex.value = 1
        emits("size-change", value)
    }
}

const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key.toLocaleUpperCase() === 'ENTER') {
        const value = Number(inputValue.value)
        if(isNaN(value)) return debugWarn("Pagination", "分页跳转器必须输入数字")
        if(value > 0 && value <= count.value!) {
            currentIndex.value = value
            emits("current-change", value)
        }
    }
}


const mouseover = (e: MouseEvent) => {
    // 判断当前是否是禁用
    if(props.disabled) return
    // 判断当前是否分页标签项或者按钮
    const target = e.target as HTMLElement

    if(target.tagName === 'LI') {
        target!.classList.add("hover")
        return 
    }
    if(target.tagName === 'BUTTON') {
        target.classList.add("hover")
        return 
    }
    if((target.parentNode as any)?.tagName === 'BUTTON') {
        (target.parentNode as any).classList.add("hover")
    }
}

const mouseleave = (e: MouseEvent) => {
    // 判断当前是否是禁用
    if(props.disabled) return
    // 判断当前是否分页标签项或者按钮
    const target = e.target as HTMLElement
    target.classList.remove("hover")
}

// 监听props.pageSize和props.currentPage的变化
watch(() => props.pageSize, (val) => {
    if(!props.sizeSelector && props.pageSizes.length <= 0) {
        return debugWarn("Pagination", "当使用sizeSelector属性时，pageSizes属性无效")
    }
    if(val && val > 0 && val <= props.pageSizes[props.pageSizes.length - 1]) {
        currentPageSize.value = val
        sizeValue.value = val
        currentIndex.value = 1
    }
})

watch(() => props.currentPage, (val) => {
    if(val && val > 0 && val <= count.value) {
        currentIndex.value = val
    }
})

</script>
<template>
   <div class="ym-pagination"
    :class="{
        [`is-background`]: props.background,
        [`is-disabled`]: props.disabled
    }"
    @mouseover="mouseover"
   >
        <!-- 上一页按钮 -->
        <button 
            class="ym-pagination-prev"
            :disabled="currentIndex === 1"
            :class="{
                disabled: currentIndex === 1
            }"
            @click="handlePrevClick"
            @mouseleave="mouseleave"
        >   
            <span v-if="prevText">{{ prevText }}</span>
            <ym-icon :icon="prevIcon" v-else></ym-icon>
        </button>
        <!-- 上一页按钮 -->
        <!-- 页码列表 -->
        <ul class="ym-pager" >
            <!-- 第一页 -->
            <li 
                :class="{
                    active: !props.disabled && currentIndex === 1
                }"
                @click="handleClick(1)"
                @mouseleave="mouseleave"
            >
                1
            </li>
            <!-- 上一页省略号 -->
            <li v-if="showPrevMore" @mouseleave="mouseleave">
                <ym-icon icon="fa-ellipsis-h"></ym-icon>
            </li>
            <!-- 其余页码 -->
            <li
            v-for="pager in pagers"
            :key="pager"
            :class="{
                active: !props.disabled && pager === currentIndex
            }"
            class="number"
            @click="handleClick(pager)"
            @mouseleave="mouseleave"
            >
            {{ pager }}
            </li>
        <!-- 其余页码 -->
        <!-- 下一页省略号 -->
            <li 
            v-if="showNextMore"
            @mouseleave="mouseleave"
            >
            <ym-icon icon="fa-ellipsis-h"></ym-icon>
            </li>
            <!-- 最后一页 -->
            <li
                :class="{
                        active: !props.disabled && currentIndex === count
                    }"
                @click="handleClick(Number(count))"
                @mouseleave="mouseleave"
                v-if="count > 1"
            >
            {{ count }}
            </li>
        </ul>
        <!-- 页码列表 -->
        <!-- 下一页按钮 -->
        <button 
            class="ym-pagination-next"
            :disabled="currentIndex === count"
            :class="{
                disabled: currentIndex === count
            }"
            @click="handleNextClick"
            @mouseleave="mouseleave"
        >   
            <span v-if="nextText">{{ nextText }}</span>
            <ym-icon :icon="nextIcon" v-else></ym-icon>
        </button>
        <!-- 下一页按钮 -->
        <div 
         class="ym-pagination-jumper"
            v-if="props.jumper"
        >
            前往
            <div class="ym-pagination-jumper__input">
                <ym-input 
                type="text" 
                size="small"
                :disabled="props.disabled"
                v-model="inputValue"
                @keydown=" handleKeyDown"
                  />
            </div>
            页
        </div>
        <div 
         class="ym-pagination-sizes"
         v-if="props.sizeSelector"
        >
            <ym-select 
            v-model="sizeValue as string" 
            placeholder="选择页数"
            :options="pageSizeList"
            @change="handleSizeChange"
            :disabled="props.disabled"
            >
            </ym-select>
        </div>
        <div 
        v-if="props.totalor"
        class="ym-pagination-total"
        >
            共 {{ count }} 页
        </div>
   </div>
</template>
<style  scoped>
@import './style.css';
</style>