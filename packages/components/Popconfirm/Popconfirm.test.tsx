import { describe, it, expect, test,vi,beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Popconfirm from './Popconfirm.vue'
import type { PopconfirmProps } from './types'
import { each, get } from 'lodash-es'
// import { withInstall } from '@ym-UI/utils'
import { YmPopconfirm } from './index'


const onConfirm = vi.fn()
const onCancel = vi.fn()


describe("Popconfirm.vue",() => {
    const props = {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        cancelButtonType: "default",
        confirmButtonType: "default",
        title:"确定当前操作吗？",
        icon: "check-circle",
        iconColor: "green",
        hideIcon: false,
        hideAfter: 500, // 默认延迟500ms消失
        width: 200, // 默认为200px宽度
    } as PopconfirmProps

    beforeEach(() => {
        vi.useFakeTimers()
        vi.clearAllMocks()
    })
    // 1.测试props绑定
    it("should accept all props",() => {
        const wrapper = mount(Popconfirm,{
            props,
        })
        // 测试组件上是否绑定所有的props
        each(props,(value,key) => {
            expect(get(wrapper.props(), key)).toBe(value)
        })
    })
    // 2. 测试默认渲染
    it("should render slot content correctly",() => {
        const wrapper = mount(Popconfirm,{
            slots: {
                default: "这是一个气泡确认框"
            },
            props
        })
        expect(wrapper.text()).toContain("这是一个气泡确认框")
    })
    test("popconfirm emits",async() => {
        const wrapper = mount(() => 
            <div>
            <div id="outside"></div>
            <Popconfirm
            title="确定当前操作吗？"
            hideIcon={true}
            onConfirm={ onConfirm}
            onCancel={ onCancel}
            >
                <button id="trigger">按钮</button>
            </Popconfirm>
            </div>
        )

        const triggerNode = wrapper.find("#trigger")

        expect(triggerNode.exists()).toBe(true)

        triggerNode.trigger("click")
        await vi.runAllTimers()
        // 测试确认和取消按钮是否展示出来
        expect(wrapper.find(".ym-popconfirm").exists()).toBeTruthy()
        const confirmBtn = wrapper.find(".ym-popconfirm__confirm")
        
        expect(confirmBtn.exists()).toBeTruthy()    
        
        // 测试点击确认按钮
        await confirmBtn.trigger("click")
        expect(onConfirm).toHaveBeenCalledOnce()
        expect(wrapper.find(".ym-popconfirm").exists()).toBeFalsy()
       
        triggerNode.trigger("click")
        await vi.runAllTimers()

        const cancelBtn = wrapper.find(".ym-popconfirm__cancel")

        expect(cancelBtn.exists()).toBeTruthy()

        await cancelBtn.trigger("click")
        expect(onCancel).toBeCalled()
        expect(wrapper.find(".ym-popconfirm").exists()).toBeFalsy()
        })
       


})
describe("Popconfirm/index.ts",() => {
    // 1. 测试是否被正确导出
    it("should be exported with withInstall()",() => {
        expect(YmPopconfirm.install).toBeDefined()
    })
    // 2. 测试导出的组件与默认组件是否一致
    it("should be the same as the default component",() => {
        expect(YmPopconfirm).toBe(Popconfirm)
    })

})