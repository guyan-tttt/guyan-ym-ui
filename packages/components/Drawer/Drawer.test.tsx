
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Drawer from './Drawer.vue'
import type { DrawerPosition } from './type'
import { nextTick } from 'vue';

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

describe('Drawer组件测试', () => {
  const defaultProps = {
    modelValue: true,
    position: 'right' as DrawerPosition,
    width: '30%',
    closeOnClickOverlay: true,
    showClose: true

  }

  it('默认状态渲染正确', () => {
    const wrapper = mount(Drawer, { props: { modelValue: false } })
    expect(wrapper.find('.ym-drawer').exists()).toBe(false)
    wrapper.unmount()
  })

  it('显示/隐藏逻辑', async () => {
    const wrapper = mount(Drawer, { props: defaultProps })
    const drawerOverlay = document.querySelector('.ym-overlay')
    expect(drawerOverlay).toBeTruthy()
    await wrapper.setProps({ modelValue: false })
    expect(document.querySelector(".ym-drawer")).toBeFalsy()
    wrapper.unmount()
  })

  it('不同方向定位', () => {
    const positions = ['left', 'right', 'top', 'bottom'] as DrawerPosition[]
    positions.forEach(position => {
      const wrapper = mount(Drawer, {
        props: { ...defaultProps, position }
      })
      const drawer = document.querySelector(".ym-drawer")
      expect(drawer).toBeTruthy()
      expect(drawer?.classList.contains(position)).toBe(true)
      wrapper.unmount()
    })

  })

  it('尺寸控制', () => {
    const testCases = [
      { position: 'left' as DrawerPosition, expected: 'width: 30%' },
      { position: 'right' as DrawerPosition, expected: 'width: 30%' },
      { position: 'top'as DrawerPosition , expected: 'height: 30%' },
      { position: 'bottom'as DrawerPosition, expected: 'height: 30%' }
    ]

    testCases.forEach(({ position, expected }) => {
      const wrapper = mount(Drawer, {
        props: { ...defaultProps, position, width: '30%' }
      })
      const drawer = document.querySelector(".ym-drawer") as HTMLElement
      expect(drawer).toBeTruthy()
      expect(drawer?.style.cssText).toContain(expected)
      wrapper.unmount()
    })
  })


  it('遮罩层点击关闭', async () => {
    const wrapper = mount(Drawer, { props: {
      ...defaultProps,
      "onUpdate:modelValue": (value) => {
        wrapper.setProps({ modelValue: value })
        
      }
    }

    })
    const drawerOverlay = document.querySelector('.ym-overlay') as HTMLElement
    expect(drawerOverlay).toBeTruthy()
    await drawerOverlay?.click()
    await rAF()
    expect(document.querySelector(".ym-drawer")).toBeFalsy()
    await wrapper.setProps({ closeOnClickOverlay: false, modelValue: true })
    expect(drawerOverlay).toBeTruthy()
    await drawerOverlay?.click()
    await rAF()
    expect(document.querySelector(".ym-drawer")).toBeTruthy()
    wrapper.unmount()
  })

  it('关闭按钮功能', async () => {
    // 测试显示关闭按钮
    const wrapper = mount(Drawer, { props: {
      ...defaultProps,
      "onUpdate:modelValue": (value) => {
        wrapper.setProps({ modelValue: value })
      }
    } })
    expect(document.querySelector(".ym-drawer")).toBeTruthy()
    const close = document.querySelector('.ym-drawer__close') as HTMLElement
    expect(close).toBeTruthy()
    await close?.click()
    await rAF()
    expect(document.querySelector(".ym-drawer")).toBeFalsy()
    wrapper.unmount()
  })

  it('插槽内容渲染', () => {
    const wrapper = mount(Drawer, {
      props: defaultProps,
      slots: {
        header: '<h2>自定义标题</h2>',
        default: '<div>主体内容</div>',
        footer: '<button>提交</button>'
      }
    })

    const drawer = document.querySelector(".ym-drawer") as HTMLElement
    expect(drawer.querySelector('.ym-drawer__header h2')?.innerHTML).toBe("自定义标题")
    expect(drawer.querySelector('.ym-drawer__body div')?.innerHTML).toBe("主体内容")
    expect(drawer.querySelector('.ym-drawer__footer button')?.innerHTML).toBe("提交")
    wrapper.unmount()
  })

  it('ESC键关闭功能', async () => {
   
    const wrapper = mount(Drawer, { props: {
      ...defaultProps,
      modelValue: false,
      closeOnPressEscape: true,
      "onUpdate:modelValue": (value) => {
        wrapper.setProps({ modelValue: value })
      }
    } })
    await wrapper.setProps({ modelValue: true })
    const drawer = document.querySelector(".ym-drawer") as HTMLElement
    expect(drawer).toBeTruthy()
    // 创建一个新的键盘事件
    await window?.dispatchEvent(new KeyboardEvent("keydown", {
      key: "Escape"
    }))
    await rAF()
    expect(document.querySelector(".ym-drawer")).toBeFalsy()
    wrapper.unmount()
  })
  it("beforeClose", async() => {
    const beforeClose = vi.fn()
    const wrapper = mount(Drawer, { props: {
      ...defaultProps,
      beforeClose: (done) => {
        beforeClose()
        done()
      },
      "onUpdate:modelValue": (value) => {
        wrapper.setProps({ modelValue: value })
      }
    }})
    const drawer = document.querySelector(".ym-drawer") as HTMLElement
    expect(drawer).toBeTruthy()
    await (drawer.querySelector('.ym-drawer__close') as HTMLElement)?.click()
    await rAF()
    expect(beforeClose).toHaveBeenCalled()
    wrapper.unmount()
  })
})
