import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import Progress from './Progress.vue'

describe("Progress.vue",() => {
    // 1.基础内容渲染
    it("基础内容渲染",() => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
            }
        })
        expect(wrapper.find(".ym-progress .ym-progress-bar")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__outer")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__inner")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__inner").attributes("style")).include("width: 30%")
        expect(wrapper.find(".ym-progress-text")).toBeTruthy()
        expect(wrapper.find(".ym-progress-text").text()).toBe("30%")
    })
    // 2. 基础属性测试
    it("基础属性测试",() => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
                strokeWidth: 10,
                showText: false,
            }
        }
        )
        expect(wrapper.find(".ym-progress .ym-progress-bar")).toBeTruthy()

        expect(wrapper.find(".ym-progress").html()).not.include("ym-progress-text")
        // expect(wrapper.find(".ym-progress-text")).toBeFalsy()
        expect(wrapper.find(".ym-progress-bar__inner").attributes("style")).include("height: 10px")
        
    })
})