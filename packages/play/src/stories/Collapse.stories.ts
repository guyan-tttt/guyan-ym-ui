import type { Meta, StoryObj } from "@storybook/vue3";
import { YmCollapse, YmCollapseItem } from "guyan-ym-ui";
import 'guyan-ym-ui/dist/index.css'

type Story = StoryObj<typeof YmCollapse>;

const meta: Meta<typeof YmCollapse> = {
  title: "Example/Collapse",
  component: YmCollapse,
  subcomponents: { YmCollapseItem },
  tags: ["autodocs"],
};

export const Default: Story = {
  render: (args) => ({
    components: {
      YmCollapse,
      YmCollapseItem,
    },
    setup() {
      return {
        args,
      };
    },
    template: `
    <ym-collapse v-bind="args">
      <ym-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </ym-collapse-item>
      <ym-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </ym-collapse-item>
      <ym-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </ym-collapse-item>
    </ym-collapse>
    `,
  }),
  args: {
    accordion: true,
    modelValue: ["a"],
  },
};

export default meta;
