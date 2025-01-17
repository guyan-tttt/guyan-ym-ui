
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmDialog, YmButton, YmMessage} from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue"
type Story = StoryObj<typeof  YmDialog>;

const meta: Meta<typeof  YmDialog> = {
  title: "Example/Dialog",
  component:  YmDialog,
  tags: ["autodocs"],
  argTypes: {
      fullscreen:{
          control: "boolean",
          description: "是否全屏显示",
      },
      lockScroll: {
          control: "boolean",
          description: "是否锁定滚动",
      },
      closeOnClickModal: {
        control: "boolean",
        description: "是否点击遮罩层关闭",
      },
      closeOnPressEscape: {
        control: "boolean",
        description: "是否按下esc关闭",
      },
      showClose: {
        control: "boolean",
        description: "是否显示关闭按钮",
      },
  }
};

export const Default: Story = {
    args: {
      title: "标题",
      width: "30%",
      fullscreen: false,
      lockScroll: true,
      closeOnClickModal: true,
      closeOnPressEscape: true,
      showClose: true,
      modal: true,
      "onOpen": () => {
        YmMessage.success("打开成功")
      },
      "onClose": () => {
        YmMessage.success("关闭成功")
      }
    },

    render: (args:any) => ({
        components: {
            YmDialog,
            YmButton
        },
    
        setup() {
            const show = ref(false)
            return {
                args,
                show,
            };
    },
    template: `
     <ym-dialog 
     v-model="show" 
     v-bind="args"
    >
      <template #header>
        <!-- <h1>标题</h1> -->
      </template>
      <template #footer>
          <div>
            <ym-button type="primary">确认</ym-button>
            <ym-button @click="show = false">取消</ym-button>
          </div>
      </template>
      <span>这是一个dialog弹框</span>
    </ym-dialog>
    <ym-button @click="show = true">打开</ym-button>
    `,
  }),
};


export default meta;
