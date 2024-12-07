import { describe, it, expect } from "vitest";
import { mount } from '@vue/test-utils'
import Progress from './Progress.vue'
import  type { ProgressStatus } from './type'
import '../../theme/index.css'
describe("Progress.vue",() => {
    // 1.基础内容渲染
    it("基础内容渲染",() => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
            }
        })
        expect(wrapper.find(".ym-progress .ym-progress-bar")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__outer")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__inner")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__inner").attributes("style")).include("width: 30%")
        expect(wrapper.find(".ym-progress-text")).toBeTruthy()
        expect(wrapper.find(".ym-progress-text").text()).toBe("30%")
    })
    // 2. 基础属性测试
    it("基础属性测试",() => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
                strokeWidth: 10,
                showText: false,
            }
        }
        )
        expect(wrapper.find(".ym-progress .ym-progress-bar")).toBeTruthy()

        expect(wrapper.find(".ym-progress").html()).not.include("ym-progress-text")
        expect(wrapper.find(".ym-progress-bar__inner").attributes("style")).include("height: 10px")

    })
    // 3. 测试状态
    it.each([ "primary", "success", "warning", "danger" ])("测试状态",(item) => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
                status: item as any,
            }
            })

        expect(wrapper.find(`.is-${item}`)).toBeTruthy()
        if(item === 'primary') {
            expect(wrapper.find(".ym-progress-text span")).toBeTruthy()
            return 
        }
        expect(wrapper.find(".ym-progress-text .ym-icon")).toBeTruthy()
        
    })
    // 4. 测试自定义颜色
    it("测试自定义颜色",() => {
        const wrapper = mount(Progress,{
            props: {
                percentage: 30,
                color: "#ff0000",
            }
        })
        expect(wrapper.find(".ym-progress-bar__inner")).toBeTruthy()
        expect(wrapper.find(".ym-progress-bar__inner").attributes("style")).include("background-color: rgb(255, 0, 0)")
    })
    // 5 测试自定义文字
    it("测试自定义文字",() => {
        const wrapper1 = mount(Progress,{
            props: {
                percentage: 30,
                format: (percentage: number) => `${percentage}%-自定义`
            }
        }
        )
        console.log(wrapper1.find(".ym-progress-text").text());
        
        expect(wrapper1.find(".ym-progress-text").text()).toBe("30%-自定义")

        const wrapper2 = mount(Progress,{
            props: {
                percentage: 30,
                format: 1 as any
            }
        })
        expect(wrapper2.find(".ym-progress-text").text()).toBe("30%")
    })
    //  6.测试文字内联显示
    it("测试文字内联显示",() => {
        const wrapper1 = mount(Progress,{
            props: {
                percentage: 30,
                textInside: true,
                strokeWidth: 20
            }
        })
        
        expect(wrapper1.find(".ym-progress").html()).not.include(".ym-progress-text")
        expect(wrapper1.find(".ym-progress-bar__innerText")).toBeTruthy()
        expect(wrapper1.find(".ym-progress-bar__inner").attributes("style")).include("height: 20px")

        const wrapper2 = mount(Progress,{
            props: {
                percentage: 30,
                textInside: true,
                showText: true
            }
        })
        expect(wrapper2.find(".ym-progress .ym-progress-text")).toBeTruthy()
        expect(wrapper2.find(".ym-progress").html()).not.include("ym-progress-bar__innerText")
        const wrapper3 = mount(Progress,{
            props: {
                percentage: 30,
                textInside: true,
                showText: false
            }
        }
        )
        expect(wrapper3.find(".ym-progress").html()).not.include("ym-progress-text")
        expect(wrapper3.find(".ym-progress").html()).not.include("ym-progress-bar__innerText")
    })
    // 7.测试width
    it("测试width",() => {
        const wrapper1 = mount(Progress,{
            props: {
                percentage: 30,
                width: 200,
            }
        })
        expect(wrapper1.find(".ym-progress").attributes("style")).include("width: 200px")
        const wrapper2 = mount(Progress,{
            props: {
                percentage: 30,
                width: "200px",
            }
        })
        expect(wrapper2.find(".ym-progress").attributes("style")).include("width: 200px")
        const wrapper3 = mount(Progress,{
            props: {
                percentage: 30,
                width: "200"
            }
        })
        expect(wrapper3.find(".ym-progress").attributes("style")).include("width: 200px")
    })
    // 8. 测试stroke颜色
    it("测试stroke颜色",() => {
        const wrapper = mount(Progress,{
            props: {
                type: 'circle',
                percentage: 30,
                color: 'red',
                width:200
            }
        }
        )
        expect(wrapper.find(".ym-progress-circle")).toBeTruthy()
        expect(wrapper.find(".ym-progress-circle__path").attributes("stroke")).include("red")


        const wrapper2 = mount(Progress,{
            props: {
                type: 'circle',
                percentage: 30,
                status: "success",
                width:200
            }
        }
        )
        expect(wrapper2.find(".ym-progress-circle")).toBeTruthy()
        console.log(wrapper2.find(".ym-progress").html());
        
        expect(wrapper2.find(".ym-progress-circle__path").attributes("stroke"))
    })

})