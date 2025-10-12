import { describe, expect, test, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import LightCode from "./LightCode.vue";
import { YmMessage } from '../Message'
import { nextTick } from "vue";
import { rAF } from "@ym-UI/utils";



describe("LightCode.vue", () => {

  test("基础渲染", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "console.log('hello')",
        language: "javascript"
      }
    });

    expect(wrapper.find('.ym-light-code').exists()).toBe(true);
    expect(wrapper.find('pre code').exists()).toBe(true);
    expect(wrapper.find('.ym-light-tool').exists()).toBe(true);
  });

  test("宽高自定义", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        width: "800px",
        height: "400px"
      }
    });

    const container = wrapper.find('.ym-light-code');
    expect(container.attributes('style')).toContain('width: 800px');
    expect(container.attributes('style')).toContain('height: 400px');
  });

  test("数字宽高自动添加单位", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        width: 800,
        height: 400
      }
    });

    const container = wrapper.find('.ym-light-code');
    expect(container.attributes('style')).toContain('width: 800px');
    expect(container.attributes('style')).toContain('height: 400px');
  });

  test("代码复制 - 现代浏览器", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextMock },
      writable: true
    });

    const wrapper = mount(LightCode, {
      props: {
        code: "console.log('test')"
      }
    });


    await wrapper.find('.copy-btn').trigger('click');

    expect(writeTextMock).toHaveBeenCalledWith("console.log('test')");
  });



  test("自定义模式显示工具条", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        custom: true
      }
    });

    expect(wrapper.find('.ym-light-tool').exists()).toBe(true);
    expect(wrapper.findAll('.tool-item').length).toBe(3); // 语言选择 + 主题选择 + 复制按钮
  });

  test("非自定义模式隐藏工具条", async () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        custom: false
      }
    });
    await rAF()
    expect(wrapper.find('.ym-light-tool').exists()).toBe(false);
  });

  test("自定义工具栏插槽", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        custom: true
      },
      slots: {
        tool: '<div class="custom-tool">Custom Toolbar</div>'
      }
    });

    expect(wrapper.find('.custom-tool').exists()).toBe(true);
    expect(wrapper.find('.ym-light-tool').exists()).toBe(false);
  });

  test("语言切换", async () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "console.log('test')",
        language: "javascript"
      }
    });

    // 触发语言切换
    await wrapper.vm.setLanguage('typescript');
    
    expect(wrapper.emitted('languageChange')).toBeTruthy();
    expect(wrapper.emitted('languageChange')?.[0]).toEqual(['typescript']);
  });

  test("主题切换", async () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        theme: "atom-one-dark"
      }
    });

    // 通过 expose 方法切换主题
    await wrapper.vm.setTheme('atom-one-light');
    
    expect(wrapper.emitted('themeChange')).toBeTruthy();
    expect(wrapper.emitted('themeChange')?.[0]).toEqual(['atom-one-light']);
  });

  test("暗色主题样式类", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        theme: "atom-one-dark"
      }
    });

    expect(wrapper.classes()).toContain('is-dark');
    expect(wrapper.classes()).toContain('theme-atom-one-dark');
  });

  test("亮色主题样式类", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test",
        theme: "atom-one-light"
      }
    });

    expect(wrapper.classes()).toContain('is-light');
    expect(wrapper.classes()).toContain('theme-atom-one-light');
  });

  test("代码高亮渲染", () => {
    const testCode = "function test() { return 'hello'; }";
    const wrapper = mount(LightCode, {
      props: {
        code: testCode,
        language: "javascript"
      }
    });

    // 检查 YmRichText 组件是否正确接收高亮后的代码
    const richText = wrapper.findComponent({ name: 'YmRichText' });
    expect(richText.exists()).toBe(true);
  });

  test("暴露的方法", () => {
    const wrapper = mount(LightCode, {
      props: {
        code: "test"
      }
    });

    // 检查暴露的实例方法
    expect(wrapper.vm.copyCode).toBeDefined();
    expect(wrapper.vm.setLanguage).toBeDefined();
    expect(wrapper.vm.setTheme).toBeDefined();
  });
});