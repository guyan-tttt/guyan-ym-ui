import { describe, test, expect,vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Avatar from './Avatar.vue'

describe("Avatar.vue",() => {
    test("1.基础渲染",async() => {
        const wrapper1 = mount(Avatar, {
            props: {
                src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            }
        })
        expect(wrapper1.find(".ym-avatar")).toBeTruthy()

        const error = vi.fn()
        const wrapper2 = mount(Avatar, {
            props: {
                src: "https://fuss10.elemecdn2594171jpeg.jpeg",
                size: 100,
                onError: error
            }
        })

        await wrapper2.find("img").trigger("error")
        expect(error).toHaveBeenCalled()

        const wrapper3 = mount(Avatar, {
            props: {
                src: 1 as any
            }
        })
        expect(wrapper3.find("img").exists()).toBeFalsy()

        const wrapper4 = mount(Avatar, {
            props: {
                icon: "home",
                size: 100
            }
        })
        expect(wrapper4.find(".ym--icon")).toBeTruthy()
    })
})