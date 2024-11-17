
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmTooltip } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'

type Story = StoryObj<typeof YmTooltip>;

const meta: Meta<typeof YmTooltip> = {
  title: "Example/Tooltip",
  component: YmTooltip,
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: {
        type: "select",
        
      },
      options: ["hover", "click", "contextmenu"],
    },
    placement: {
      control: {
        type: "select",
        
      },
      options: ["top", "left", "right", "bottom"],
    }
  },
  args: {
    "onVisible-change": fn()
  }
};

export const Default: Story = {
    args: {
        content: "提示组件内容",
        placement: "top",
        trigger: "hover"
    },

    render: (args) => ({
        components: {
            YmTooltip
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
    <ym-tooltip v-bind="args">
        <span>{{args.trigger}}</span>
    </ym--tooltip>
    `,
  }),
};

export default meta;
