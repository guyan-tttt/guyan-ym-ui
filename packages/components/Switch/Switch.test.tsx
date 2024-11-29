import { describe, it,expect } from "vitest";
import { mount } from '@vue/test-utils'
import Switch from './Switch.vue'

describe('Switch.vue',() => {
    it("1.正确渲染",() => {
        const wrapper = mount(Switch)
        expect(wrapper.find(".ym-switch")).toBeTruthy() // 判断是否渲染了Switch组件
    })
    it("2.点击切换状态",async() => {
        const wrapper = mount(Switch,{
            props: {
                modelValue: false
            }
        })
        await wrapper.trigger('click')
        expect(wrapper.emitted()["update:modelValue"][0]).toEqual([true]) // 判断是否触发了update:modelValue事件，并且参数为true
        expect(wrapper.emitted()["change"][0]).toEqual([true]) // 判断是否触发了change事件，并且参数为true
        await wrapper.trigger('click')
        expect(wrapper.emitted()["update:modelValue"][1]).toEqual([false]) // 判断是否触发了update:modelValue事件，并且参数为false
        expect(wrapper.emitted()["change"][1]).toEqual([false]) // 判断是否触发了change事件，并且参数为false
    })

    it("3.测试disabled是否生效",async() => {
        const wrapper = mount(Switch,{
            props: {
                modelValue: false,
                disabled: true
            }
        })
        expect(wrapper.find(".is-disabled")).toBeTruthy() // 判断是否渲染了disabled样式
        await wrapper.trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty("update:modelValue") // 判断是否没有触发update:modelValue事件
        expect(wrapper.emitted()).not.toHaveProperty("change") // 判断是否没有触发change事件

    })
})