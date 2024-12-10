import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ImageViewer from './ImageViewer.vue';
import { nextTick } from 'vue';

const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
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

    })
})