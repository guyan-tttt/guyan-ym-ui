import { describe, it,expect, vi, test } from 'vitest';
import { mount } from '@vue/test-utils';

import Button from './Button.vue';
import Icon from '../Icon/Icon.vue'
import ButtonGroup from './ButtonGroup.vue';

describe("Button.vue",() => {
  // 1.测试按钮的主题样式
  it("should has the correct type class when type prop is set", () => {
      const types = ["primary", "success", "warning", "danger", "info"];
      types.forEach((type) => {
        const wrapper = mount(Button, {
          props: { type: type as any },
        });
        expect(wrapper.classes()).toContain(`ym-button--${type}`);
      });
  });
  // 2.测试按钮的尺寸
  it("should has the correct size class when size prop is set", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(Button, {
        props: { size: size as any },
      });
      expect(wrapper.classes()).toContain(`ym-button--${size}`);
    });
  });
  // 3.测试属性是否有圆角
  it.each([
    ["plain", "is-plain"],
    ["round", "is-round"],
    ["circle", "is-circle"],
    ["disabled", "is-disabled"],
    ["loading", "is-loading"],
    
  ])(
    "should has the correct class when prop %s is set to true",
    (prop, className) => {
      const wrapper = mount(Button, {
        props: { [prop]: true },
        global: {
          stubs: ["YmIcon"],
        },
      });
      expect(wrapper.classes()).toContain(className);
    }
  );
  // 4.测试按钮的nativeType属性
  it("should has the correct native type attribute when native-type prop is set", () => {
    const wrapper = mount(Button, {
      props: { nativeType: "submit" },
    });
    expect(wrapper.element.tagName).toBe("BUTTON");
    expect((wrapper.element as any).type).toBe("submit");
  });
  // 5.测试按钮的tag属性
  it("should renders the custom tag when tag prop is set", () => {
    const wrapper = mount(Button, {
      props: { tag: "a" },
    });
    expect(wrapper.element.tagName.toLowerCase()).toBe("a");
  });
  // 6.测试按钮的点击事件
  it("should emits a click event when the button is clicked", async () => {
    const wrapper = mount(Button, {});
    await wrapper.trigger("click");
    expect(wrapper.emitted().click).toHaveLength(1);
  });
})


describe("ButtonGroup.vue", () => {
  test("basic button group", async () => {
    const wrapper = mount(() => (
      <ButtonGroup>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    expect(wrapper.classes()).toContain("ym-button-group");
  });

  test("button group size", () => {
    const sizes = ["large", "default", "small"];
    sizes.forEach((size) => {
      const wrapper = mount(() => (
        <ButtonGroup size={size as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`ym-button--${size}`);
    });
  });

  test("button group type", () => {
    const types = ["primary", "success", "warning", "danger", "info"];
    types.forEach((type) => {
      const wrapper = mount(() => (
        <ButtonGroup type={type as any}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ButtonGroup>
      ));

      const buttonWrapper = wrapper.findComponent(Button);
      expect(buttonWrapper.classes()).toContain(`ym-button--${type}`);
    });
  });

  test("button group disabled", () => {
    const wrapper = mount(() => (
      <ButtonGroup disabled>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    ));

    const buttonWrapper = wrapper.findComponent(Button);
    expect(buttonWrapper.classes()).toContain(`is-disabled`);
  });
});
