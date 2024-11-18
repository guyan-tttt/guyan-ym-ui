import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import ContextMenu from './ContextMenu.vue'
import { each } from 'lodash-es'
import type { ContextMenuType } from './type';

describe('ContextMenu', () => {
    // 1. 测试组件是否渲染正确
    it('renders correctly', async () => {
      const wrapper = mount(ContextMenu, {
        slots: {
          default: 'Default Slot Content',
          menu: '<p>Custom Menu Content</p>'
        },
        props: {
            customize: true
        }
      });
  
      expect(wrapper.html()).toMatchSnapshot();
    });

    // 2. 测试菜单项是否正确渲染
    it('displays the context menu with items at mouse position', async () => {
        const wrapper = mount(ContextMenu, {
          props: {
            options: [
              { label: 'Option 1', handle: vi.fn() },
              { label: 'Option 2', handle: vi.fn() },
            ]
          },
          slots: {
            default: 'Default Slot Content',
          },
          attachTo: document.body // 确保 Teleport 可以正确渲染到 body
        });
    
        // 模拟鼠标位置
        const mockMousePosition = { x: 150, y: 250 };
        await wrapper.vm.openMenu(true, mockMousePosition.x,mockMousePosition.y)
        await wrapper.vm.$nextTick();
        const menu = document.querySelector(".menu") as HTMLElement
        expect(menu).not.toBeNull() // 检查菜单是否渲染
        expect(document.body.contains(menu)).toBe(true); // 检查菜单是否渲染在 body 中
        expect(menu?.style.left).toBe(`${mockMousePosition.x}px`) // 检查菜单是否在鼠标位置
        expect(menu?.style.top).toBe(`${mockMousePosition.y}px`)
      });

      // 3.测试菜单项的样式类型
      it('has the correct style type for menu items', async () => {
       const types = ["primary","info","success","warning","danger"]
       types.forEach(async(item) => {
        console.log(item);
        
        const wrapper = mount(ContextMenu, {
          props: {
            type: item as ContextMenuType,
            options: [
              { label: 'Option 1', handle: () => {}},
              { label: 'Option 2', handle: () => {}},
            ],
          },
          slots: {
            default: 'Default Slot Content',
          },
          attachTo: document.body // 确保 Teleport 可以正确渲染到 body
        });
  
        const mockMousePosition = { x: 150, y: 250 };
        await wrapper.vm.openMenu(true, mockMousePosition.x,mockMousePosition.y)
        await wrapper.vm.$nextTick();
        const menu = document.querySelector(`.menu.ym-menu--${item}`) 
        expect(menu).not.toBeNull() 
        console.log(menu?.className);
       })
      });
})