import { describe, it, expect,vi } from "vitest";
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
        const onChange = vi.fn()
        const wrapper = mount(Pagination, {
            props: {
                total: 50,
                currentPage: currentPage.value,
                pagerCount: 5,
                "onCurrent-change": onChange
            }
        })
        expect(wrapper.find(".ym-pager")).toBeTruthy()
        await rAF()
        // expect(wrapper.findAll(".ym-pager li")).toHaveLength(7)
        const li1 = wrapper.findAll(".ym-pager li")[6]
        await li1.trigger("click")
        expect(onChange).toBeCalledTimes(1)
        await rAF()
        const li2 = wrapper.findAll(".ym-pager li")[0]
        await li2.trigger("click")
        await rAF()
        expect(onChange).toBeCalledTimes(2)
        const wrapper2 = mount(Pagination, {
            props: {
                total: 15,
                currentPage: 1,
                pageSize: 5
            }
        })
        expect(wrapper2.find(".ym-pager")).toBeTruthy()

    })
    it("2.测试上一页，下一页按钮",async() => {
        const prevHandel = vi.fn()
        const nextHandel = vi.fn()
        const wrapper = mount(Pagination, {
            props: {
                total: 15,
                pageSize: 5,
                currentPage: 1,
                "onPrev-click": prevHandel,
                "onNext-click": nextHandel
            }
        })
        const prev = wrapper.find(".ym-pagination-prev")
        const next = wrapper.find(".ym-pagination-next")
        expect(prev).toBeTruthy()
        expect(next).toBeTruthy()
        await prev.trigger("click")
        await rAF()
        expect(prevHandel).toBeCalledTimes(0) // 没有上一页，禁用按钮
        expect(prev.classes()).toContain("disabled")
        await next.trigger("click")
        await rAF()
        expect(nextHandel).toBeCalledTimes(1)
        expect(next.classes()).not.toContain("disabled")
        expect(prev.classes()).not.toContain("disabled")
        await next.trigger("click")
        await rAF()
        expect(nextHandel).toBeCalledTimes(2)
        expect(next.classes()).toContain("disabled")
        await next.trigger("click")
        await rAF()
        expect(nextHandel).toBeCalledTimes(2)
        await prev.trigger("click")
        await rAF()
        expect(prevHandel).toBeCalledTimes(1)
    })
    it("3.测试数量选择器", async() => {
        const onChange = vi.fn()
        const wrapper = mount(Pagination, {
            props: {
                total: 15,
                pageSize: 3,
                currentPage: 1,
                sizeSelector:  true,
                pageSizes: [3,5,10],
                "onSize-change": onChange
            }
        })
        expect(wrapper.find(".ym-pager")).toBeTruthy()
        const select = wrapper.find(".ym-pagination-sizes")
        await select.find("input").trigger("click")
        await rAF()
        const option = select.findAll(".ym-select__menu-item")[1]
        await option.trigger("click")
        await rAF()
        expect(onChange).toBeCalledTimes(1)
    })
    it("4.测试分页跳转器", async() => {
        const onChange = vi.fn()
        const wrapper = mount(Pagination, {
            props: {
                total: 15,
                pageSize: 3,
                currentPage: 1,
                jumper: true,
                totalor: true,
                "onCurrent-change": onChange
            }
        })
        const input = wrapper.find(".ym-pagination-jumper input")
        await input.setValue("2")
        // console.log(input.html());
        // await input.trigger("keydown")
        await input.trigger("keydown.enter")
        await rAF()
        // @ts-expect-error
        console.log(input.element.value);
        expect(onChange).toBeCalledTimes(1)
        await input.setValue("c")
        await input.trigger("keydown.enter")
        await rAF()
        expect(onChange).toBeCalledTimes(1)
        
    })
    it("5.测试禁用状态", async() => {
        const currentChange = vi.fn()
        const changeSize = vi.fn()
        const prevClick = vi.fn()
        const nextClick = vi.fn()
        const wrapper = mount(Pagination, {
            
            props: {
                disabled: true,
                total: 15,
                currentPage: 2,
                jumper: true,
                sizeSelector: true,
                "onSize-change": changeSize,
                "onCurrent-change": currentChange,
                "onPrev-click": prevClick,
                "onNext-click": nextClick
            }
        })
        expect(wrapper.classes()).toContain("is-disabled")
        const li1 = wrapper.findAll(".ym-pager li")[0]
        await li1.trigger("click")
        expect(prevClick).toBeCalledTimes(0)
        const prev = wrapper.find(".ym-pagination-prev")
        const next = wrapper.find(".ym-pagination-next")
        await next.trigger("click")
        await rAF()
        expect(nextClick).toBeCalledTimes(0)
        await prev.trigger("click")
        await rAF()
        expect(prevClick).toBeCalledTimes(0)
    })
    it("6.测试自定义颜色和图标", () => {
        const wrapper = mount(Pagination, {
            props: {
                total: 15,
                pageSize: 3,
                currentPage: 1,
                prevText: "上一页",
                nextText: "下一页",
            }
        })
        expect(wrapper.find(".ym-pagination-prev span").text()).toBe("上一页")
        expect(wrapper.find(".ym-pagination-next span").text()).toBe("下一页")
})
})