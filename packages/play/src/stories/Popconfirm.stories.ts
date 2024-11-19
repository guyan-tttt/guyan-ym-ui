
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmPopconfirm , YmButton} from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'

type Story = StoryObj<typeof YmPopconfirm>;

const meta: Meta<typeof YmPopconfirm> = {
  title: "Example/YmPopconfirm",
  component: YmPopconfirm,
  tags: ["autodocs"],
  argTypes: {
    confirmButtonType: {
      control: {
        type: "select"
      },
      options: ['primary' , 'default' , 'dashed' , 'text']
    },
    cancelButtonType: {
      control: {
        type: "select"
      },
      options: ['primary' , 'default' , 'dashed' , 'text']
    }
  },
  args: {
    title: "确定要删除吗？",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    icon: "search",
    iconColor: "#ff0000",
    "onConfirm": fn(),
    "onCancel": fn()
  }
};

export const Default: Story = {
    args: {
      title: "确定要删除吗？",
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      icon: "search",
      iconColor: "#ff0000",
      "onConfirm": fn(),
      "onCancel": fn()
    },

    render: (args) => ({
        components: {
            YmPopconfirm,
            YmButton
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
    <ym-popconfirm v-bind="args">
        <ym-button type="primary">删除</ym-button>
    </ym-popconfirm>
    `,
  }),
};

export default meta;
