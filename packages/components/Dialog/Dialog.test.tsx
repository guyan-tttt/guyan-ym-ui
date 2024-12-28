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
        const beforeClose1 = (done:Function) => {
            done()
        }
        const wrapper4 = mount(Dialog, {
            props: {
                modelValue: visible.show,
                beforeClose: beforeClose1,
                title: "标题",
                'onUpdate:modelValue' : (val) => {
                    console.log('2222',val);
                    
                    visible.show = val
                }
            },
        })
        
        visible.show = true
        console.log(wrapper4.vm.visible);
        await rAF()
        await setTimeout(() => {}, 500)
        const dialog = document.querySelector(".ym-dialog")
        expect(dialog).toBeTruthy()
        // const closeBtn2 = dialog?.querySelector(".ym-dialog__header__close")
        // await closeBtn2?.dispatchEvent(new MouseEvent("click"))
        // await rAF()
        // await setTimeout(() => {}, 500)
        
        // visible.show = true
        // await rAF()
        // await setTimeout(() => {}, 500)
        // console.log(wrapper4.vm.visible);
        
    })
})