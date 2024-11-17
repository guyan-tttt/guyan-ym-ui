import { describe, test,it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils"
import { ref, defineComponent } from 'vue'

import useClickOutside from "../useClickOutside";

describe("hooks/useClickOutside",() => {
    it("should add 'click=outside' event listener",async() => {
        const target = ref<HTMLElement | null>(null)
        const btnRef = ref<HTMLElement>()

        const handler = vi.fn()

        mount(
            defineComponent({
                setup() {
                    useClickOutside(target,handler)
                    return () => <div ref={target}>
                        <button ref={btnRef}>
                            click me
                        </button>
                    </div>
                },

            })
        )

        await btnRef.value?.click()
        expect(handler).not.toHaveBeenCalled()

        await document.body.click()
        expect(handler).toHaveBeenCalledOnce()
    })
})