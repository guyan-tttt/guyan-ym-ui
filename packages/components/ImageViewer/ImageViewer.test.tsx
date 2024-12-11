import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ImageViewer from './ImageViewer.vue';
import { nextTick } from 'vue';

const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  ]

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

describe('ImageViewer', () => {
    it("1.测试基础功能",async() => {
        const wrapper = mount(ImageViewer, {
            props: {
                urlList: srcList,
                initialIndex: 0,
                
            }
        }
        )
        await wrapper.vm.open()
        await rAF()
        const imageViewer = document.querySelector(".ym-image__viewer__overlay")
        // console.log(imageViewer?.innerHTML);
        expect(imageViewer).toBeTruthy()
        const img = imageViewer?.querySelector(".ym-image__viewer__img")
        expect(img).toBeTruthy()
       expect(img?.getAttribute("src")).toBe(srcList[0])
       
       await wrapper.vm.setActiveItem(1)
       await rAF()
       expect(img?.getAttribute("src")).toBe(srcList[1])

       await wrapper.vm.close()
       await rAF()
       expect(document.querySelector(".ym-image__viewer__overlay")).toBeFalsy()
       await wrapper.vm.close()
       wrapper.unmount()
    })
    it("2.测试预览界面放大缩小",async() => {
        const wrapper = mount(ImageViewer, {
            props: {
                urlList: srcList,
                initialIndex: 0,
                minScale: 1.0,
                maxScale: 1.1,
                zoomRate: 0.1
            }
        })
        await wrapper.vm.open()
        await rAF()
        const imageViewer = document.querySelector(".ym-image__viewer__overlay")
        expect(imageViewer).toBeTruthy()
        
        const img  = imageViewer?.querySelector(".ym-image__viewer__img") as HTMLImageElement
        expect(img).toBeTruthy()
        const toolbar = imageViewer?.querySelector(".ym-image__toolbar")
        expect(toolbar).toBeTruthy()
        const zoomOut = toolbar?.querySelector(".image-viewer-zoom-out")
        const zoomIn = toolbar?.querySelector(".image-viewer-zoom-in")

        // 触发点击事件
        await zoomOut?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.1)

        await zoomOut?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.1)

        await zoomIn?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.0)

        await zoomIn?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.0)
        
        const clockwise = toolbar?.querySelector(".image-viewer-clockwise")
        const counterClockwise = toolbar?.querySelector(".image-viewer-anticlockwise")

        await clockwise?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.deg).toBe(90)

        await counterClockwise?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.deg).toBe(0)
        await wrapper.vm.close()
    })
    it("3.测试预览界面上一页下一页",async() => {
      const wrapper = mount(ImageViewer, {
          props: {
              urlList: srcList,
              initialIndex: 0,
          }
      }
      )
      await wrapper.vm.open()
      await rAF()
      const imageViewer = document.querySelector(".ym-image__viewer__overlay")
      expect(imageViewer).toBeTruthy()

      const img  = imageViewer?.querySelector(".ym-image__viewer__img") as HTMLImageElement
      expect(img).toBeTruthy()
      expect(img?.getAttribute("src")).toBe(srcList[0])
      const prev = imageViewer?.querySelector(".ym-image__arrow-prev")
      const next = imageViewer?.querySelector(".ym-image__arrow-next")

      await prev?.dispatchEvent(new MouseEvent('click'))
      await rAF()
      expect(img?.getAttribute("src")).toBe(srcList[1])
      await next?.dispatchEvent(new MouseEvent('click'))
      await rAF()
      expect(img?.getAttribute("src")).toBe(srcList[0])
      await wrapper.vm.close()
    })
    it("4.测试预览界面关闭",async() => {
        const wrapper = mount(ImageViewer, {
            props: {
                urlList: srcList,
                initialIndex: 1,
                hideOnClickModal: true,
                closeOnPressEsc: true
            }
        })
        await wrapper.vm.open()
        await rAF()
        const imageViewer = document.querySelector(".ym-image__viewer__overlay")
        expect(imageViewer).toBeTruthy()
        const img  = imageViewer?.querySelector(".ym-image__viewer__img") as HTMLImageElement
        expect(img).toBeTruthy()
        
        await imageViewer?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        expect(document.querySelector(".ym-image__viewer__overlay")).toBeFalsy()

        await wrapper.vm.open()
        await rAF()
        const close = imageViewer?.querySelector(".ym-image__close")
        expect(close).toBeTruthy()

        await close?.dispatchEvent(new MouseEvent('click'))
        await rAF()
        expect(document.querySelector(".ym-image__viewer__overlay")).toBeFalsy()

        await wrapper.vm.open()
        await rAF()
        const overlay = document.querySelector(".ym-image__viewer__overlay")
        expect(overlay).toBeTruthy()
        await window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }))
        await rAF()
        expect(document.querySelector(".ym-image__viewer__overlay")).toBeFalsy()
    })
    it("5.测试预览界面缩放",async() => {
        const wrapper = mount(ImageViewer, {
            props: {
                urlList: srcList,
                initialIndex: 1,
                zoomRate: 0.1,
                minScale: 0.9,
                maxScale: 1.1
            }
        })
        await wrapper.vm.open()
        await rAF()
        const imageViewer = document.querySelector(".ym-image__viewer__overlay")
        expect(imageViewer).toBeTruthy()
        const img  = imageViewer?.querySelector(".ym-image__viewer__img") as HTMLImageElement
        expect(img).toBeTruthy()
        await window?.dispatchEvent(new WheelEvent('wheel', { deltaY: 10 } as any))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(0.9)

        await window?.dispatchEvent(new WheelEvent('wheel', { deltaY: -10 } as any))
        await rAF()
       //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.0)
        await window?.dispatchEvent(new WheelEvent('wheel', { deltaX: -10 } as any))
        await rAF()
        //@ts-ignore
        expect(wrapper.vm.transform.scale).toBe(1.1)
        await wrapper.vm.close()
        wrapper.unmount()
    })
    it("6.测试边缘情况",async() => {
        const wrapper = mount(ImageViewer, {
            props: {
                urlList: [],
                initialIndex: 1,
                zoomRate: 0.1,
                minScale: 0.9,
                maxScale: 1.1,
            }
          })
          await wrapper.vm.open()
          await rAF()
          const imageViewer = document.querySelector(".ym-image__viewer__overlay")
          // console.log(imageViewer?.innerHTML);
          expect(imageViewer).toBeTruthy()
          const img = imageViewer?.querySelector(".ym-image__viewer__img")
          expect(img).toBeTruthy()
          
          imageViewer?.dispatchEvent(new MouseEvent('click'))
          await rAF()
          expect(document.querySelector(".ym-image__viewer__overlay")).toBeTruthy()
    })
})