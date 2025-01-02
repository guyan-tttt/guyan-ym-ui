import { describe ,it,expect, vi } from "vitest";
import { mount } from "@vue/test-utils"
import Dialog from './Dialog.vue'
import { nextTick, reactive, ref } from "vue";

export const rAF = async () => {
    return new Promise((res) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(async () => {
          res(null);
          await nextTick();
        });
      });
    });
  };
  
describe("Dialog.vue", () => {
    it("1. Dialog组件渲染", async() => {
        const show = ref(false)
        const wrapper1 = mount(Dialog, {
            props: {
                modelValue: show.value,
                title: "标题"
            }
        })
        show.value = true
        await rAF()
        expect(wrapper1.find(".ym-dialog")).toBeTruthy()
        expect(wrapper1.find(".ym-dialog__header__title")).toBeTruthy()
        show.value = false
        await rAF()
        wrapper1.unmount()
    })
    it("2.Dialog组件插槽",async () => {
        const show2 = ref(true)
        const wrapper2 = mount(Dialog, {
            props: {
                modelValue: show2.value,
            },
            slots: {
                header: () => <div>自定义标题</div>,
                footer: () => <div>自定义底部</div>,
                default: () => <div>默认内容</div>
            }
        })

        await rAF()
        await nextTick()
        const dialog = document.querySelector(".ym-dialog")
        expect(dialog?.querySelector(".ym-dialog__header")?.innerHTML).toContain("自定义标题")
        expect(dialog?.querySelector(".ym-dialog__footer")?.innerHTML).toContain("自定义底部")
        wrapper2?.unmount()
    })
    it("3.Dialog组件关闭", async () => {
        const show3 = ref(true)
        const close = vi.fn()
        const closed = vi.fn()
        const open = vi.fn()
        const opened = vi.fn()
        const wrapper3 = mount(Dialog, {
            props: {
                'onClose': close,
                'onClosed': closed,
                'onOpen': open,
                'onOpened': opened,
                modelValue: show3.value,
            },
        })
        show3.value = true
        await rAF()
        await setTimeout(() => {}, 500)
        const dialog = document.querySelector(".ym-dialog")
        
        expect(dialog).toBeTruthy()
    
        const closeBtn = dialog?.querySelector(".ym-dialog__header__close")
        await closeBtn?.dispatchEvent(new MouseEvent("click"))
        await rAF()
        await setTimeout(() => {}, 500)
        await wrapper3.unmount()
        await rAF()
    })
    it("4.测试beforeClose",async() => {
        const visible = reactive({
            show: true
        })
        const beforeClose1 = vi.fn()
        const wrapper4 = mount(Dialog, {
            props: {
                modelValue: visible.show,
                beforeClose: (done) =>  {
                    done()
                    console.log("执行了");
                    beforeClose1()
                },
                title: "标题",
                'onUpdate:modelValue' : (val) => {
                    console.log('2222',val);
                    
                    visible.show = val
                }
            },
        })
        
        visible.show = true

        await rAF()
        await setTimeout(() => {}, 500)
        const dialog = document.querySelector(".ym-dialog")
        expect(dialog).toBeTruthy()
        const closeBtn2 = dialog?.querySelector(".ym-dialog__header__close")   
        await closeBtn2?.dispatchEvent(new MouseEvent("click"))
        await rAF()
        expect(beforeClose1).toHaveBeenCalled()
        wrapper4.unmount()
    })
    it("5.测试打开弹框",async() => {
        const show = ref(false)
        const wrapper = mount(Dialog, {
            props: {
                modelValue: show.value,
                title: "标题"
            }
        })

        expect(document.querySelector(".ym-dialog")).toBeFalsy()
         await wrapper.vm.open()
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeTruthy()
        wrapper.unmount()
    })
    it("6.测试点击遮罩层关闭",async() => {
        const wrapper1 = mount(Dialog, {
            props: {
                modelValue: true,
                title: "标题",
                closeOnClickModal: true,
                width: 200
            }
        })
        const dialog = document.querySelector(".ym-dialog-overlay")
        await dialog?.dispatchEvent(new MouseEvent("click"))
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeFalsy()
        wrapper1.unmount()

        const wrapper2 = mount(Dialog, {
            props:
                {
                    modelValue: true,
                    title: "标题",
                    closeOnClickModal: false,
                    width: 200,
                }
        })
        const dialog2 = document.querySelector(".ym-dialog-overlay")
        await dialog2?.dispatchEvent(new MouseEvent("click"))
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeTruthy()
        wrapper2.unmount()

    })
    it("7.v-model测试",async() => {
        const wrapper = mount(Dialog, {
            props: {
                modelValue: false,
                title: "标题",
                "onUpdate:modelValue": (val) => {
                    wrapper.setProps({modelValue: val})
                }
            }
        })
        expect(document.querySelector(".ym-dialog")).toBeFalsy()
        await wrapper.setProps({modelValue: true})
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeTruthy()
        await wrapper.setProps({modelValue: false})
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeFalsy()
        await wrapper.setProps({modelValue: true})
        await rAF()
        const close = document.querySelector(".ym-dialog__header__close")
        await close?.dispatchEvent(new MouseEvent("click"))
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeFalsy()
        wrapper.unmount()
    })
    it("8.按ESc 关闭弹框", async() => {
        const wrapper1 = mount(Dialog, {
            props: {
                modelValue: false,
                title: "标题"
            }
        })
        await wrapper1.setProps({modelValue: true})
        await rAF()
        const dialog = document.querySelector(".ym-dialog")
        expect(dialog).toBeTruthy()
        await window?.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape"
        }))
        await rAF()
        expect(document.querySelector(".ym-dialog")).toBeFalsy()
        wrapper1.unmount()

        const wrapper2 = mount(Dialog, {
            props: {
                modelValue: false,
                title: "标题",
                closeOnPressEscape: false
            }
        })
        await wrapper2.setProps({modelValue: true})
        await rAF()
        const dialog2 = document.querySelector(".ym-dialog")
        expect(dialog2).toBeTruthy()
        await window?.dispatchEvent(new KeyboardEvent("keydown", {
            key: "Escape"
        }))
        await rAF()
        wrapper2.unmount()
    })
    it("9.测试满屏",async() => {
        const wrapper = mount(Dialog, {
            props: {
                modelValue: true,
                title: "标题",
                fullscreen: true
            }
        })
        const dialog = document.querySelector(".ym-dialog")
        expect(dialog).toBeTruthy()
        expect(dialog?.getAttribute("style"))?.includes("width: 100%;")
        wrapper.unmount()
    })
})