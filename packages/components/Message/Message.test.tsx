import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { message, closeAll} from './methods'

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

function getTopValue(element: Element) {
    const styles = window.getComputedStyle(element)
    const topValue = styles.getPropertyValue("top")
    return Number.parseFloat(topValue)
}

describe("Message",() => {
    it("message() function should be able to show a message",async() => {
        const handler = message({
            message: "Hello World",
            duration: 0
        })

        await rAF()
        expect(document.querySelector(".ym-message")).toBeTruthy()
        handler.close() // 关闭消息
        await rAF()
        expect(document.querySelector(".ym-message")).toBeFalsy()
    })
    it("call message() function more than once",async() => {
        message({
            message: "Message1",
            duration: 0
        })
        message({
            message: "Message2",
            duration: 0
        })
        await rAF()
        console.log(document.querySelectorAll(".ym-message"));
        
        expect(document.querySelectorAll(".ym-message").length).toBe(2)
        closeAll()
        await rAF()
        expect(document.querySelectorAll(".ym-message").length).toBe(0)
    })
})