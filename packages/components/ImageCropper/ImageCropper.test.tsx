import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ImageCropper from './ImageCropper.vue';
import { VueCropper } from 'vue-cropper';

// Mock vue-cropper 组件
vi.mock('vue-cropper', () => ({
  VueCropper: {
    name: 'VueCropper',
    template: '<div></div>',
    methods: {
      getCropData: vi.fn()
    }
  }
}));

describe('ImageCropper.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(ImageCropper, {
      props: {
        src: 'test.jpg',
        width: 800,
        height: 600
      },
      global: {
        stubs: {
          VueCropper: true // 使用真实组件时可以移除
        }
      }
    });
  });

  it('1. 渲染组件', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('ym-image-cropper');
  });

  it('2. 验证 props 传递', () => {
    expect(wrapper.props('src')).toBe('test.jpg');
    expect(wrapper.props('width')).toBe(800);
    expect(wrapper.props('height')).toBe(600);
    expect(wrapper.props('outputType')).toBe('png');
    expect(wrapper.props('info')).toBe(true);
  });

  it('3. 验证默认 props', () => {
    const defaultWrapper = mount(ImageCropper);
    expect(defaultWrapper.props('src')).toBe('');
    expect(defaultWrapper.props('width')).toBe(600);
    expect(defaultWrapper.props('height')).toBe(300);
    expect(defaultWrapper.props('outputType')).toBe('png');
    expect(defaultWrapper.props('info')).toBe(true);
  });


  it('5. 验证 exportImage 方法', async () => {
    const mockData = 'mockImageData';
    const cropperInstance = wrapper.vm.cropperRef;
    cropperInstance.getCropData = vi.fn().mockImplementation((callback) => {
      callback(mockData);
    });

    const result = await wrapper.vm.exportImage();
    expect(result).toBe(mockData);
    expect(cropperInstance.getCropData).toHaveBeenCalled();
  });

  it('6. 验证暴露的 API', () => {
    const exposed = wrapper.vm;
    expect(typeof exposed.exportImage).toBe('function');
    expect(exposed.cropper).toBeDefined();
    expect(exposed.imgSrc).toBe('test.jpg');
  });

  it('7. 验证 VueCropper 组件渲染', () => {
    const vueCropperWrapper = wrapper.findComponent(VueCropper);
    expect(vueCropperWrapper.exists()).toBe(true);
    expect(vueCropperWrapper.attributes('style')).toContain('width: 800px');
    expect(vueCropperWrapper.attributes('style')).toContain('height: 600px');
  });
});