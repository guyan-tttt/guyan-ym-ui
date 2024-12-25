import type { Meta, StoryObj } from "@storybook/vue3";
import { YmPagination } from "guyan-ym-ui";
import { YmMessage } from "guyan-ym-ui";
import { fn } from "@storybook/test";
import "guyan-ym-ui/dist/index.css";
import { ref } from "vue";

type Story = StoryObj<typeof YmPagination>;

const meta: Meta<typeof YmPagination> = {
  title: "Example/Pagination",
  component: YmPagination,
  tags: ["autodocs"],
  args: {
    disabled: false,
    jumper: false,
    background: false,
    totalor: false,
    sizeSelector: false,
    pagerCount: 6,
  },
};

export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    total: 100,
    pageSizes: [5, 6, 7, 8],
    "onCurrent-change": (val) => {
      YmMessage.success(`当前页：${val}`);
    },
  },

  render: (args) => ({
    components: {
      YmPagination,
    },

    setup() {
      const value = ref(false);
      return {
        args,
        value,
      };
    },
    template: `
    <p>
      <ym-pagination v-bind="args">
      </ym-pagination>
    </p>
    <p>
      <ym-pagination v-bind="args" background>
      </ym-pagination>
    </p>
    <p>
      <ym-pagination v-bind="args" disabled>
      </ym-pagination>
    </p>
    `,
  }),
};

export default meta;
