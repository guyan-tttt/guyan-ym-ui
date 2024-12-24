import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Pagination from './Pagination.vue'
import { nextTick, ref } from "vue";

export const rAF = async() => {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            requestAnimationFrame(async () => {
                resolve(null)
                await nextTick()
            })
        })
    })
}


describe('Pagination.vue', () => {
    it("1.测试分页组件渲染及其功能",async() => {
        const currentPage = ref(6)
        const wrapper = mount(Pagination, {
            props: {
                total: 100,
                currentPage: currentPage.value,
                pagerCount: 6
            }
        })
        expect(wrapper.find(".ym-pager")).toBeTruthy()
        await rAF()
        // expect(wrapper.findAll(".ym-pager li")).toHaveLength(7)
        const li = wrapper.findAll(".ym-pager li")[5]
        li.trigger("click")
        await rAF()
        console.log(wrapper.html());
        

    })
})