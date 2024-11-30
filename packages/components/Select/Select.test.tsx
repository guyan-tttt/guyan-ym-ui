import { describe,test,expect,vi } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Select from './Select.vue'
import type { SelectOptionProps } from "./type";
import { SELECT_CTX_KEY } from './constant'
import Option from './Option.vue'

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

describe("Select.vue",() => {
    test("1.渲染默认属性",async() => {
        const wrapper = mount(Select,{
            props: {
                modelValue: "",
                options: [
                    { label: "选项1", value: "1" },
                ]
            }
        })

        await wrapper.find("input").trigger("click") // 模拟点击,调出下拉框
        await rAF()
        expect(wrapper.text()).toContain("选项1")
    })
    test("2.选中选项",async() => {
        const wrapper = mount(Select,{
            props: {
                modelValue: "",
                options: [
                    { label: "选项1", value: "1" },
                ]
            }
            
        })
        await wrapper.find("input").trigger("click") // 模拟点击,调出下拉框
        await rAF()

        const option = wrapper.findAll("li").at(0)!
        await option.trigger("click")

        expect(wrapper.emitted("update:modelValue")).toBeTruthy()
        expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"])

    })
    test("3. 点击是否会发送事件", async() => {
        const ctx = {
            handleSelect: vi.fn(),
            selectStates: {
                selectOption: null
            },
            renderLabel: (props: SelectOptionProps) => props.label
        }

        const wrapper = mount(Option,{
            props: {
                value: "1",
                label: "选项1"
            },
            global: {
                provide: {
                    [SELECT_CTX_KEY as any]: ctx
                }
            }
        })

        await wrapper.trigger("click")
        expect(ctx.handleSelect).toHaveBeenCalled()
    })
})