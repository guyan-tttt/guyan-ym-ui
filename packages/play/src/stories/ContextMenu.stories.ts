
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmContextMenu } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'

type Story = StoryObj<typeof YmContextMenu>;

const meta: Meta<typeof  YmContextMenu> = {
  title: "Example/ContextMenu",
  component:YmContextMenu,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["primary", "success","warning","danger","info"],
    },
  },
  args: {
    customize: false,
    options: [
      {
        label: "选项1",
        handle: () => {
          console.log("选项1被点击了")
        }
      },
      {
        label: "选项2",
        handle: () => {
          console.log("选项2被点击了")
        }
      }
    ]
  }
};

export const Default: Story = {
    args: {
        customize: false,
        options:  [
          {
            label: "选项1",
            handle: () => {
              console.log("选项1被点击了")
            }
          },
          {
            label: "选项2",
            handle: () => {
              console.log("选项2被点击了")
            }
          }
        ],
        type: "primary"
    },

    render: (args) => ({
        components: {
            YmContextMenu
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
    <ym-context-menu v-bind="args">
        <div style="width: 400px;height: 200px;backgroundColor: red;">这是右键菜单区域</div>
        <template #menu>
            <div>自定义菜单</div>
        </template>
    </ym-context-menu>
    `,
  }),
};

export default meta;
