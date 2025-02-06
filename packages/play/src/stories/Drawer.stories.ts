import type { Meta, StoryObj } from "@storybook/vue3";
import { YmDrawer, YmButton, YmMessage } from "guyan-ym-ui";
import 'guyan-ym-ui/dist/index.css';
import { ref } from "vue";

type Story = StoryObj<typeof YmDrawer>;

const meta: Meta<typeof YmDrawer> = {
  title: "Example/Drawer",
  component: YmDrawer,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "抽屉的位置",
    },
    width: {
      control: "text",
      description: "抽屉的宽度",
    },
    height: {
      control: "text",
      description: "抽屉的高度",
    },
    closeOnClickOverlay: {
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
    modal: {
      control: "boolean",
      description: "是否显示遮罩层",
    }
  },
};

export const Default: Story = {
  args: {
    position: "right",
    width: "30%",
    height: "40%",
    closeOnClickOverlay: true,
    closeOnPressEscape: true,
    showClose: true,
    modal: true,
    "onOpen": () => {
      YmMessage.success("抽屉打开成功");
    },
    "onClose": () => {
      YmMessage.success("抽屉关闭成功");
    },
  },
  render: (args: any) => ({
    components: {
      YmDrawer,
      YmButton,
    },
    setup() {
      const show = ref(false);
      return {
        args,
        show,
      };
    },
    template: `
      <div>
        <ym-button @click="show = true">打开抽屉</ym-button>
        <ym-drawer
          v-model="show"
          :position="args.position"
          :width="args.width"
          :height="args.height"
          :closeOnClickOverlay="args.closeOnClickOverlay"
          :closeOnPressEscape="args.closeOnPressEscape"
          :showClose="args.showClose"
          :modal="args.modal"
          @open="args.onOpen"
          @close="args.onClose"
        >
          <template #header>
            <h2>抽屉标题</h2>
          </template>
          <p>这里是抽屉内容</p>
          <template #footer>
            <ym-button type="primary" @click="show = false">确认</ym-button>
            <ym-button @click="show = false">取消</ym-button>
          </template>
        </ym-drawer>
      </div>
    `,
  }),
};

export default meta;