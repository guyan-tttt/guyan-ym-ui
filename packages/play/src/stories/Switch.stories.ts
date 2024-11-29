
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmSwitch } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue";

type Story = StoryObj<typeof YmSwitch >;

const meta: Meta<typeof YmSwitch > = {
  title: "Example/Switch",
  component: YmSwitch ,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "default", "large"],
    },
  },
  args: {
    disabled: false
  }
};



export const Default: Story = {
    args: {
        inactiveText: "关闭",
        activeText: "开启",
        disabled: false,
        size: "small",
        "onChange": (val) => {
            console.log(val)
        }
    },

    render: (args) => ({
        components: {
            YmSwitch
        },
    
        setup() {
          const value  = ref(false)
        return {
            args,
            value
        };
    },
    template: `
    <ym-switch v-bind="args" v-model="value">
    </ym-switch>
    `,
  }),
};
export const CustomValue: Story = {
    args: {
        inactiveText: "关闭",
        activeText: "开启",
        disabled: false,
        size: "small",
        "onChange": (val) => {
            console.log(val)
        },
        activeValue: 1,
        inactiveValue: 0
    },

    render: (args) => ({
        components: {
            YmSwitch
        },
    
        setup() {
          const value  = ref(0)
          return {
              args,
              value
          };
    },
    template: `
    <ym-switch v-bind="args" v-model="value">
    </ym-switch>
    `,
  }),
};

export default meta;
