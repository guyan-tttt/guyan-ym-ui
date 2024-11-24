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
    // 1.测试message()函数是否能够显示消息
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
    // 2.测试message消息是否多个共存
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
    // 3.测试message的offset
    it("message offset",async() => {
        message({
            message: "Message1",
            duration: 0,
            offset: 100
        })
        message({
            message: "Message2",
            duration: 0,
            offset: 50
        })
        await rAF()
        const elements = document.querySelectorAll(".ym-message")
        expect(elements.length).toBe(2)
        expect(getTopValue(elements[0])).toBe(100)
  
        expect(getTopValue(elements[1])).toBe(150)
    })
})