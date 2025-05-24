import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ImageMark from './ImageMark.vue'; // 假设组件文件名为 Image-mark.vue
import { Canvas } from 'fabric';
import { ShapeType } from './constant'
// Mock fabric.Canvas
vi.mock('fabric', () => ({
  Canvas: vi.fn(() => ({
    clear: vi.fn(),
    setWidth: vi.fn(),
    setHeight: vi.fn(),
    add: vi.fn(),
    centerObject: vi.fn(),
    renderAll: vi.fn(),
    on: vi.fn(),
    discardActiveObject: vi.fn(),
    setActiveObject: vi.fn(),
    getObjects: vi.fn(() => []),
    remove: vi.fn(),
    toJSON: vi.fn(() => ({ objects: [] })),
  })),
  Rect: vi.fn(() => ({
    set: vi.fn(),
  })),
  Line: vi.fn(() => ({
    set: vi.fn(),
  })),
  Circle: vi.fn(() => ({
    set: vi.fn(),
  })),
  FabricImage: {
    fromURL: vi.fn(() => Promise.resolve({
      set: vi.fn(),
    })),
  },
}));

describe('ImageMark.vue', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(ImageMark, {
      props: {
        src: 'test-image.jpg',
        width: 600,
        utils: ['rect', 'line', 'dash', 'dot'],
        hidden: true,
        clear: true,
        reset: true,
        shapes: [],
        maxWidth: 800,
        maxHeight: 800,
        scaleX: 1,
        scaleY: 1,
        maxScale: 10,
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.image-mark').exists()).toBe(true);
  });

});