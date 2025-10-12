import { mount } from '@vue/test-utils';
import RichText from './RichText.vue';
import { describe, expect, test } from 'vitest';
import { rAF } from '@ym-UI/utils';

describe('RichText.vue', () => {
    test('renders default slot content when content is not provided', async () => {
        const wrapper = mount(RichText, {
          slots: {
            default: '<p>Default Slot Content</p>',
          },
          props: {
            content: '',
          },
        });
      
        expect(wrapper.html()).toContain('<p>Default Slot Content</p>');
      });
      test('renders content when provided', async () => {
        const content = '<p>Sanitized Content</p>';
        const wrapper = mount(RichText, {
          props: {
            content,
          },
        });
        await rAF()
        expect(wrapper.html()).toContain('<p>Sanitized Content</p>');
      });
      test('sanitizes HTML content', async () => {
        const maliciousContent = '<script>alert("XSS")</script><p>Safe Content</p>';
        const wrapper = mount(RichText, {
          props: {
            content: maliciousContent,
          },
        });
        await rAF()
        // 验证净化后的内容不包含 <script> 标签
        expect(wrapper.html()).not.toContain('<script>');
        expect(wrapper.html()).toContain('<p>Safe Content</p>');
      });
      test('shows image preview when clicking on an image', async () => {
        const imageUrl = 'https://jeek-space-blog.top:3000/images/article/ab93e2fb1e216541d1aeb751600909f2.jpeg';
        const content = `<img src="${imageUrl}" alt="Test Image" />`;
        const wrapper = mount(RichText, {
          props: {
            content,
            isImgPreview: true,
          },
        });
        await rAF()
        // 模拟点击图片
        const img = wrapper.find('img');
        await rAF()
        await img.trigger('click');
        await rAF()
        // 验证图片预览是否显示
        const imageViewer = wrapper.findComponent({ name: 'YmImageViewer' });
        expect(imageViewer.exists()).toBe(true);
        expect(imageViewer.vm.urlList).toEqual([imageUrl]);
      });
      test('normalizationHtml updates content container', async () => {
        const wrapper = mount(RichText, {
          props: {
            content: '',
          },
        });
        await rAF()
        const newContent = '<p>Updated Content</p>';
        const instance = wrapper.vm;
        instance.normalizationHtml(newContent);
        await rAF()
        await wrapper.vm.$nextTick();
        expect(wrapper.html()).toContain('<p>Updated Content</p>');
      });
})

