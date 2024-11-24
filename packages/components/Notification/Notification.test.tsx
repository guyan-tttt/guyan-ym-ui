import { describe, it, expect } from "vitest";
import { nextTick } from "vue";
import { notification } from './methods'

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

describe("Notification",() => {
    // 1.测试message()函数是否能够显示消息
    it("notification() function should be able to show a notification",async() => {
        const handler = notification({
            message: "Hello World",
            duration: 0,
            title: "Notification"
        })

        await rAF()
        expect(document.querySelector(".ym-notification")).toBeTruthy()
        handler.close() // 关闭消息
        await rAF()
        expect(document.querySelector(".ym-notification")).toBeFalsy()
    })
    // 2.测试message消息是否多个共存
    it("call notification() function more than once",async() => {
        notification({
            message: "notification1",
            duration: 0,
            title: "Notification"
        })
        notification({
            message: "notification2",
            duration: 0,
            title: "Notification"
        })
        await rAF()
        console.log(document.querySelectorAll(".ym-notification"));
        
        expect(document.querySelectorAll(".ym-notification").length).toBe(2)
        notification.closeAll()
        await rAF()
        expect(document.querySelectorAll(".ym-notification").length).toBe(0)
    })
})