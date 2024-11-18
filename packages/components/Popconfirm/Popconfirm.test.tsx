import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Popconfirm from './Popconfirm.vue'
import type { PopconfirmProps } from './types'
import { each, get } from 'lodash-es'

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
})