import type { StoryObj, Meta, ArgTypes } from "@storybook/vue3";
import { ref, watch } from "vue";
import { fn } from "@storybook/test";
import { YmRichText } from "guyan-ym-ui"; // 假设组件导出路径
import "guyan-ym-ui/dist/index.css";

type Story = StoryObj<typeof YmRichText> & { argTypes?: ArgTypes };

const meta: Meta<typeof YmRichText> = {
  title: "Example/RichText",
  component: YmRichText,
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "富文本内容，支持 HTML 字符串",
    },
    isImgPreview: {
      control: "boolean",
      description: "是否启用图片预览功能",
    },
    isClean: {
      control: "boolean",
      description: "是否净化 HTML 内容，防止 XSS 攻击",
    },
    previewConfig: {
      control: "object",
      description: "图片预览配置",
    },
  },
  args: {
    content: "<p>默认富文本内容</p>",
    isImgPreview: false,
    isClean: true,
    previewConfig: {},
  },
};

export const Default: Story = {
  args: {
    content: "<p>默认富文本内容</p>",
    isImgPreview: false,
    isClean: true,
    previewConfig: {},
  },
  render: (args) => ({
    components: { YmRichText },
    setup() {
      return { args };
    },
    template: `
      <ym-rich-text v-bind="args"></ym-rich-text>
    `,
  }),
};

export const WithImagePreview: Story = {
  args: {
    content: '<p>点击图片预览: <img src="https://img95.699pic.com/photo/50059/8720.jpg_wh300.jpg!/fh/300/quality/90" alt="Example Image" /></p>',
    isImgPreview: true,
    isClean: true,
    previewConfig: {},
  },
  render: (args) => ({
    components: { YmRichText },
    setup() {
      return { args };
    },
    template: `
      <ym-rich-text v-bind="args"></ym-rich-text>
    `,
  }),
};

export const WithSanitizedContent: Story = {
  args: {
    content: '<p>净化后的内容: <script>alert("XSS")</script><strong>Safe Content</strong></p>',
    isImgPreview: false,
    isClean: true,
    previewConfig: {},
  },
  render: (args) => ({
    components: { YmRichText },
    setup() {
      return { args };
    },
    template: `
      <ym-rich-text v-bind="args"></ym-rich-text>
    `,
  }),
};

export const WithUnsafeContent: Story = {
  args: {
    content: '<p>未净化的内容: <script>alert("XSS")</script><strong>Unsafe Content</strong></p>',
    isImgPreview: false,
    isClean: false,
    previewConfig: {},
  },
  render: (args) => ({
    components: { YmRichText },
    setup() {
      return { args };
    },
    template: `
      <ym-rich-text v-bind="args"></ym-rich-text>
    `,
  }),
};


export default meta;