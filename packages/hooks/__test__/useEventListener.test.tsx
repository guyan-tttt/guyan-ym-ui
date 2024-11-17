import { describe, test,it, expect, vi, beforeEach } from "vitest";
import { ref , defineComponent} from 'vue' 
import { mount } from '@vue/test-utils'

import useEventListener from "../useEventListener";

describe("hooks/useEventListener",() => {
    // 1.测试传入HTML节点
    it("should add and remove event listener when target is HTMLElement",async() => {
        const target = document.createElement("button")
        const handler = vi.fn()
        const wrapper = mount(
            defineComponent({
                setup() {
                    useEventListener(target,"click", handler)
                    return () => <div id="container"></div>
                }
            })
        )
        wrapper.get("#container").element.appendChild(target)
        await target.click()
        expect(handler).toHaveBeenCalledOnce()
        await wrapper.unmount()
        await target.click()
        expect(handler).toHaveBeenCalledOnce()
    })
    // 2.测试传入ref
    it("should add and remove event listener when target is ref",async() => {
        const target = ref<HTMLElement | void>()
        const handler = vi.fn()
        mount(
            defineComponent({
                setup() {
                    useEventListener(target,"click", handler)
                    return () => <button ref={target} id="container"></button>
                }
            })
        )
        await document.getElementById("container")?.click()
        await target.value?.click()
        expect(handler).toHaveBeenCalledOnce()
        
        target.value = document.createElement("div")
        await document.getElementById("container")?.click()
        expect(handler).toHaveBeenCalledOnce()
    })
})

