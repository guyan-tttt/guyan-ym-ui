
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmAvatar } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue";

type Story = StoryObj<typeof YmAvatar >;

const meta: Meta<typeof YmAvatar> = {
  title: "Example/Avatar",
  component: YmAvatar ,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    shape: {
      control: { type: "select" },
      options: ["circle", "square"],
    }
  },

};


export const Default: Story = {
    args: {
        src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        size: "medium",
        shape: "circle"
    },

    render: (args) => ({
        components: {
            YmAvatar
        },
    
        setup() {
          const value  = ref(false)
        return {
            args,
            value
        };
    },
    template: `
    <ym-avatar v-bind="args" />
    `,
  }),
};
export const Icon: Story = {
    args: {
        icon: "user",
        size: "medium",
        shape: "circle"
    },

    render: (args) => ({
        components: {
            YmAvatar
        },
    
        setup() {
          const value  = ref(0)
          return {
              args,
              value
          };
    },
    template: `
    <ym-avatar v-bind="args"  />
    <ym-avatar v-bind="args" size="small" />
    <ym-avatar v-bind="args" size="large" />
    `,
  }),
};

export default meta;
