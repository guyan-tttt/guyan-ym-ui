

<script setup lang="ts">
import { debugWarn } from '@ym-UI/utils';
import { isArray } from 'lodash-es';
import { computed, ref, watchEffect } from 'vue';


type PaginationSize = 'small' | 'medium' | 'large'

interface PaginationProps {
    size?: PaginationSize // 大小
    background?: boolean // 是否显示背景
    pageSize?: number // 每页显示条数
    total: number // 总条数
    pagerCount?: number // 显示的页码个数
    currentPage?: number // 当前页
    pageSizes?: number[] // 每页显示个数选择器的选项设置
    prevText?:string // 替代图标显示的上一页文字
    nextText?: string // 替代图标显示的下一页文字
    disabled?: boolean // 是否禁用
    prevIcon?: string // 替代图标显示的上一页图标
    nextIcon?: string // 替代图标显示的下一页图标
    jumper?: boolean // 是否使用跳页
    sizeSelector?: boolean // 是否使用数据条数选择器
    totalor?: boolean // 是否显示总条数
}

interface PaginationEmits {
    (e: "size-change",val: number):void
    (e: "current-change",val: number):void
    (e: "prev-click", val: number):void
    (e: "next-click", val: number):void
}

const props = withDefaults(defineProps<PaginationProps>(), {
    size: 'medium',
    background: false,
    pageSize: 5,
    pagerCount: 5,
    currentPage: 1,
    pageSizes: [10, 20, 30, 40, 50] as any,
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
    const halfPagerCount = (props.pagerCount - 1) / 2
    // 重新初始化
    showNextMore.value = false
    showPrevMore.value = false
    // 总数是否大于页码数，如果否，则说明当前不需要显示省略号
    if(count.value! > currentPageSize.value) {
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

const sizeValue = ref<number>()

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
    return []
})

const handleSizeChange = (val: number) => {
    if(props.disabled) return
    if(val > 0) {
        currentPageSize.value = val
        currentIndex.value = 1
        emits("size-change", val)
    }
}

const handleKeyDown = (e: KeyboardEvent) => {
    if(props.disabled) return
    if(e.key === 'Enter') {
        const value = Number(inputValue.value)
        console.log(value);
        
        if(isNaN(value)) return debugWarn("Pagination", "输入的值必须是数字")
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
            <!-- <ym-icon icon="chevron-right" size="xl"></ym-icon> -->
            </li>
            <!-- 最后一页 -->
            <li
                :class="{
                        active: !props.disabled && currentIndex === count
                    }"
                @click="handleClick(Number(count))"
                @mouseleave="mouseleave"
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
            v-model="sizeValue" 
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
.ym-pagination {
    white-space: nowrap;
    color:#000;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    .ym-pager {
        user-select: none;
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            min-width: 26px;
            max-height: 26px;
            color:#606266;
            padding: 4px;
            border: none;
            cursor: pointer;
            text-align: center;
            box-sizing: border-box;
            &.hover {
                color: #409eff;
                font-weight: 700;
            }
            &.active {
                font-weight: 700;
                color: #409eff;
            }
            
        }

    }
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        min-width: 26px;
        height: 26px;
        line-height: 26px;
        color: #606266;
        padding: 4px;
        border: none;
        cursor: pointer;
        text-align: center;
        box-sizing: border-box;
        background: transparent;
        &.disabled {
            color: #c0c4cc !important;
            cursor: not-allowed;
            background: #f4f4f5 !important;
        }
    }
    .ym-pagination-next {
        margin-left: 8px;
    }
    .ym-pagination-prev {
        margin-right: 8px;
    }

    &.is-background {
        .ym-pager {
            li {
                background: #f4f4f5;
                border-radius: 2px;
                &.hover {
                    background: #409eff;
                    color: #fff;
                }
                &.active {
                    background: #409eff;
                    color: #fff;
                }
            }
        }
        button {
            background: #f4f4f5;
            border-radius: 2px;
            &.hover {
                background: #409eff;
                color: #fff;
            }
            &.active {
                background: #409eff;
                color: #fff;
            }
        }

    }
    .ym-pagination-jumper {
        margin-left: 8px;
        color: #606266;
        display: flex;
        align-items: center;
        gap: 4px;
        .ym-pagination-jumper__input {
            width: 50px;
        }
    }
    .ym-pagination-total {
        margin-left: 8px;
        color: #606266;
    }
    .ym-pagination-sizes {
        width: 120px;
        margin-left: 8px;
        :deep(input) {
            height: 24px ;
            font-size: inherit;
        }
    }
    &.is-disabled {
        * {
            color: #c0c4cc !important;
            cursor: not-allowed !important;
        }

    }


}


</style>