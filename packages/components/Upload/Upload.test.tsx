import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Upload from './Upload.vue'
// import { YmIcon, YmMessage } from 'guyan-ym-ui'
import { rAF } from '@ym-UI/utils'

// 模拟fetchAPI函数

  describe('Upload.vue', () => {
    it('1.默认模式基础内容渲染', () => {
        const wrapper = mount(Upload)
      expect(wrapper.find('.ym-upload__dragger').exists()).toBe(true)
      expect(wrapper.find('.ym-upload__default').exists()).toBe(true)
      expect(wrapper.find('.ym-upload__text').text()).toContain('将文件拖到此处或点击上传')
    })
  
    it('2.头像模式基础内容渲染', async () => {
      const wrapper = mount(Upload)
      await wrapper.setProps({ type: 'avatar' })
      await rAF()
      expect(wrapper.find('.ym-upload__avatar').exists()).toBe(true)
    })
  
    it('3.图片墙模式基础内容渲染', async () => {
      const wrapper = mount(Upload)
      await wrapper.setProps({ type: 'picture-list' })
      expect(wrapper.find('.ym-upload-picture-list').exists()).toBe(true)
      expect(wrapper.find('.ym-upload__dragger-picture-list').exists()).toBe(true)
    })
  
    it('4.文件上传事件', async () => {
      const wrapper = mount(Upload,{
        props: {
            accept: "image/*"
        }
      })
      const file = new File(['content'], 'test.png', { type: 'image/png' })
      const input = wrapper.find('input[type="file"]')
      Object.defineProperty(input.element, 'files', { value: [file] })
      await input.trigger('change')
      await rAF()
    // @ts-ignore
      expect(wrapper.vm.fileList.length).toBe(1)
    // @ts-expect-error
      expect(wrapper.vm.fileList[0].name).toBe('test.png')
    })
    it("5.测试拖拽事件", async() => {
        const wrapper1 = mount(Upload,{
            props: {
                draggable: true,
                accept: "video/*",
                disbaled:false
            }
        })
        // 拖拽开始
        const upload = wrapper1.find('.ym-upload__dragger')
        await upload.trigger('dragenter')
        await rAF()
        await rAF()
        // @ts-ignore
        expect(wrapper1.vm.dragState).toBe(true)
        await upload.trigger('dragover')
        await rAF()
        // @ts-ignore
        expect(wrapper1.vm.dragState).toBe(true)
        await upload.trigger('dragleave')
        await rAF()
        await rAF()
        // @ts-ignore
        expect(wrapper1.vm.dragState).toBe(false)
        await upload.trigger('drop',{
            dataTransfer: {
                files: []
            }
        })
        await rAF()
        await rAF()
        // @ts-ignore
        expect(wrapper1.vm.dragState).toBe(false)
        const wrapper2 = mount(Upload,{
            props: {
                disabled: true,
                draggable: true
            }
        })
        await wrapper2.find('.ym-upload__dragger').trigger('dragenter')
        await rAF()
        // @ts-ignore
        expect(wrapper2.vm.dragState).toBe(false)
        await upload.trigger('dragover')
        await rAF()
        // @ts-ignore
        expect(wrapper2.vm.dragState).toBe(false)
        await upload.trigger('dragleave')
        await rAF()
        await rAF()
        // @ts-ignore
        expect(wrapper2.vm.dragState).toBe(false)
        await upload.trigger('drop')
        await rAF()
        await rAF()
        // @ts-ignore
        expect(wrapper2.vm.dragState).toBe(false)

    })
    it("6.测试最大文件数限制",async() => {
        const wrapper = mount(Upload, {
            props: {
                maxSize:1
            }
        })
        const file1 = new File(['content'], 'test.png', { type: 'image/png' })
        const file2 = new File(['content'], 'test2.png', { type: 'image/png' })
        const input = wrapper.find('input[type="file"]')
        Object.defineProperty(input.element, 'files', { value: [file1, file2] })
        await input.trigger('change')
        await rAF()
        // @ts-ignore
        expect(wrapper.vm.fileList.length).toBe(1)

    })
    it("7.测试头像和图片墙模式下必须传图片", async() => {
        const wrapper1 = mount(Upload,{
            props: {
                type: 'avatar'
            }
        })
        const file1 = new File(['content'], 'test.txt', { type: 'text/plain' })
        const input1 = wrapper1.find('input[type="file"]')
        Object.defineProperty(input1.element, 'files', { value: [file1] })
        await input1.trigger('change')
        await rAF()
        // @ts-ignore
        expect(wrapper1.vm.fileList.length).toBe(0)
        const wrapper2 = mount(Upload,{
            props: {
                type: 'avatar'
            }
        })
        const input2 = wrapper2.find('input[type="file"]')
        const fileList = [
            new File(['content'], 'test.png', { type: 'image/png' }),
            new File(['content'], 'test2.png', { type: 'image/png' })
        ]
        Object.defineProperty(input2.element, 'files', { value: fileList })
        await input2.trigger('change')
        await rAF()
        // @ts-ignore
        expect(wrapper2.vm.fileList.length).toBe(1)
    })  
  })
