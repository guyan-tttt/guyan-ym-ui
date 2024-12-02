
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmSelect, YmOption, YmMessage } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue";

type Story = StoryObj<typeof YmSelect >;

const meta: Meta<typeof YmSelect > = {
  title: "Example/Select",
  component: YmSelect ,
  tags: ["autodocs"],
  args: {
    disabled: false,
    clearable: true,
    filterable: true,
    remote: false,
  }
};



export const Default: Story = {
    args: {
      placeholder: "请选择",
      disabled: false,
      clearable: true,
      options: [
        {
          label: "选项1",
          value: 1,
        },
        {
          label: "选项2",
          value: 2,
        },
        {
          label: "选项3",
          value: 3,
        }
      ],
      renderLabel: (val: any) => {
        return val.label + "renderLabel"
      },

    },

    render: (args) => ({
        components: {
            YmSelect
        },
    
        setup() {
          const value  = ref(false)
        return {
            args,
            value
        };
    },
    template: `
    <ym-select v-bind="args" v-model="value">
    </ym-select>
    `,
  }),
};

export const Remote: Story = {
    args: {
      placeholder: "请选择",
      disabled: false,
      clearable: true,
      options: [
        {
          label: "选项1",
          value: 1,
        },
        {
          label: "选项2",
          value: 2,
        },
        {
          label: "选项3",
          value: 3,
        }
      ],
      remote: true,
      remoteMethod: (query: string) => {
        YmMessage.success(query)
        return new Promise((resolve) => {
          resolve([
            {
              label: "选项1",
              value: 1,
            },
            {
              label: "选项2",
              value: 2,
            }
          ])
        })
      }
    },

    render: (args) => ({
        components: {
            YmSelect
        },
    
        setup() {
          const value  = ref(0)
          return {
              args,
              value
          };
    },
    template: `
    <ym-select v-bind="args" v-model="value">
    </ym-select
    `,
  }),
};
export const Option: Story = {
    args: {
      placeholder: "请选择",
      disabled: false,
      clearable: true,
    },

    render: (args) => ({
        components: {
            YmSelect,
            YmOption
        },
    
        setup() {
          const value  = ref(0)
          return {
              args,
              value
          };
    },
    template: `
    <ym-select v-bind="args" v-model="value">
      <ym-option label="选项1" value="1"></ym-option>
      <ym-option label="选项2" value="2"></ym-option>
      <ym-option label="选项3" value="3"></ym-option>
    </ym-select
    `,
  }),
};

export default meta;
