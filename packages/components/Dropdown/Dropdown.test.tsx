import { describe, it,expect ,beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils"
import { YmDropdown , YmDropdownItem} from './index'
import Dropdown from './Dropdown.vue'
import DropdownItem from "./DropdownItem.vue";
import type { DropdownItemProps } from './type'


describe("Dropdown/index.ts",() => {
    // 1. 测试组件是否正确导出
    it("should be exported with withInstall",() => {
        expect(YmDropdown.install).toBeDefined()
        expect(YmDropdownItem.install).toBeDefined()
    })
    // 2. 测试组件是否正确
    it("should be the same as the default component",() => {
        expect(Dropdown).toBe(YmDropdown)
        expect(DropdownItem).toBe(YmDropdownItem)
    })
})

describe("Dropdown.vue",() => {
    // 清除定时器
    beforeEach(() => {
        vi.useFakeTimers()
        vi.clearAllMocks()
    })
    // 1. 测试插槽
    it("should render the default slot",() => {
        const items:DropdownItemProps[] = [
            {
                label: "item1",
                command: 1
            },
            {
                label: "item2",
                command: 2
            }
        ]

        const wrapper = mount(Dropdown,{
            props: {
                trigger: "click",
            },
            slots: {
                default: () => <div>default</div>,
                dropdown: () => <div>dowon</div>
                //     items.map(item => 
                //     {
                //         return <DropdownItem  {...item}></DropdownItem>
                //     }
                // )
            }
        })
        // 判断默认插槽是否渲染
        expect(wrapper.text()).toContain("default")
        
        // 判断下拉菜单是否渲染
        // expect(wrapper.find(".ym-dropdown__item").exists()).toBe(true)

    })
    // 2. 测试事件
    it("should emit command event when item be clicked",async() => {
        const items:DropdownItemProps[]  = [
            {
                label: "item1",
                disabled: true // 禁用
            },
            {
                label: "item2",
                command: "item2",
                divided: true // 分割线
            }
        ]
        const onCommand = vi.fn()
        const wrapper = mount(Dropdown,{
            props: {
                trigger: "click",
                onCommand
            },
            slots: {
                default: () => <button id="trigger">default button</button>,
                dropdown: () => items.map(item => 
                    {
                        return <DropdownItem  {...item}></DropdownItem>
                    }
                )
            }
        })

        const triggerBtn = wrapper.find("#trigger")
        expect(triggerBtn.exists()).toBe(true) // 判断按钮是否存在
        await triggerBtn.trigger("click") // 点击打开下拉菜单
        await vi.runAllTimers() // 等待执行完成

        expect(wrapper.find(".ym-dropdown__menu").exists()).toBe(true) // 判断下拉菜单是否存在
        const dropdownItem1 = wrapper.findAll("li.ym-dropdown__item").at(0) // 获取第一个下拉菜单项
        await dropdownItem1?.trigger("click")
        expect(onCommand).toHaveBeenCalledTimes(0) // 判断是否触发事件

        const dropdownItem2 = wrapper.findAll("li.ym-dropdown__item").at(1)
        
        await dropdownItem2?.trigger("click")
        expect(onCommand).toHaveBeenCalledTimes(1) // 判断是否触发事件
        expect(onCommand).toBeCalledWith("item2") // 判断时间触发参数是否正确

    })

    // 3. 测试切换按钮
    it("should change the button when split be clicked",async() => {
        const items:DropdownItemProps[]  = [
            {
                label: "item1",
                disabled: true // 禁用
            },
            {
                label: "item2",
                command: "item2",
                divided: true // 分割线
            }
        ]
        const onClick = vi.fn()
        const wrapper = mount(Dropdown,{
            props: {
                trigger: "click",
                onClick,
                items,
                splitButton: true // 切换按钮
            },
            slots: {
                default: () => <button id="trigger">default button</button>,
            }
        })
        const triggerBtn = wrapper.find("#trigger")
        expect(triggerBtn.exists()).toBe(true) // 判断按钮是否存在
        await wrapper.trigger("click") // 点击打开下拉菜单
        await vi.runAllTimers()
        
        expect(wrapper.find(".ym-dropdown__menu").exists()).toBe(false)
        expect(onClick).toHaveBeenCalledTimes(0)
        
        const ymBtn = wrapper.findAll(".ym-button").at(0)
        expect(ymBtn?.exists()).toBe(true)
        await ymBtn?.trigger("click")
        await vi.runAllTimers()
        expect(onClick).toHaveBeenCalledTimes(1)
    })
})