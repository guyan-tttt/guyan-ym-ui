import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils';
import Card from './Card.vue'
import { YmCard  } from ".";
import type { CSSProperties } from "vue";

describe('Card/index',() => {
    // 1. 测试组件是否正确导出
    it("should be exported and have a install method",() =>{
        expect(YmCard.install).toBeDefined()
    })
    // 2. 测试组件导出是否成功
    it("should be the same as the default component",() =>{
        expect(Card).toBe(YmCard)
    })
})

describe("Card.vue",() => {
    // 1.测试三个插槽是否正确渲染
    it("should render the slot",() =>{
        const wrapper = mount(Card,{
            slots: {
                default: () => <div>default</div>,
                header: () => <div>header</div>,
                footer: () => <div>footer</div>
            }
        })
        expect(wrapper.find(".ym-card").exists()).toBe(true) // 判断组件是否存在
        expect(wrapper.find(".ym-card__header").exists()).toBe(true) // 判断header是否存在
        expect(wrapper.find(".ym-card__content").exists()).toBe(true) // 判断content是否存在
        expect(wrapper.find(".ym-card__footer").exists()).toBe(true) // 判断footer是否存在
        expect(wrapper.find(".ym-card__header").text()).toBe("header") // 判断header内容是否正确
        expect(wrapper.find(".ym-card__content").text()).toBe("default") // 判断content内容是否正确
        expect(wrapper.find(".ym-card__footer").text()).toBe("footer") // 判断footer内容是否正确
    })
    // 2. 测试内容属性是否生效
    it("should content be set correctly",() => {
        const wrapper = mount(Card,{
            props: {
                content: "content props",
                header: "header props",
                footer: "footer props",
            },
            slots: {
                default: () => <div>default</div>,
                header: () => <div>header</div>,
                footer: () => <div>footer</div>
            }
        })
        expect(wrapper.find(".ym-card__content").text()).toBe("content props") // 判断content内容是否正确
        expect(wrapper.find(".ym-card__header").text()).toBe("header props") // 判断header内容是否正确
        expect(wrapper.find(".ym-card__footer").text()).toBe("footer props") // 判断footer内容是否正确
    })
    // 3. 测试内容样式，阴影效果和内容类名
    it("should content style be set correctly",() => {
        const styleObj: CSSProperties = {
            color: "red",
            backgroundColor: "blue"
        }
        const wrapper = mount(Card,{
            props: {
                shadow: "always",
                contentClass: "content-class",
                contentStyle: styleObj,
            },
            slots: {
                default: () => <div>default</div>,
            }
        })
        expect(wrapper.find(".ym-card__content").attributes("class")).toContain("content-class") // 判断content类名是否正确
        console.log(wrapper.find(".ym-card__content").attributes("style"));
        
        expect(wrapper.find(".ym-card__content").attributes("style")).toContain("color: red; background-color: blue;") // 判断content样式是否正确
        expect(wrapper.find(".ym-card").attributes("class")).toContain("is-always-shadow")
    })
})