
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmProgress } from "guyan-ym-ui";
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue";

type Story = StoryObj<typeof YmProgress >;

const meta: Meta<typeof YmProgress > = {
  title: "Example/Progress",
  component: YmProgress ,
  tags: ["autodocs"],
  args: {
    showText: true,
    percentage: 50,
    status: "primary",
  },
  argTypes: {
    percentage: {
      control: "number",
      defaultValue: 50,
    },
    status: {
        control: "select",
        options: ["primary", "success", "warning", "danger"],
    },
    strokeWidth: {
        control: "number",
        defaultValue: 6,
    },
    showText: {
        control: "boolean",
        defaultValue: true,
    },
    width: {
        control: "select",
        options: [200,'300px','400']
    },
    color: {
        control: "color",
        defaultValue: "#409eff",
    },
    type: {
        control: "select",
        options: ["line", "circle"],
        defaultValue: "line",
    }
  }
};



export const Default: Story = {
    args: {
        status: "primary",
        showText: true,
        strokeWidth: 6,
        width: 200,
        textInside: false,
        format: (percentage) => {
            if(percentage === 100) {
                return '完成'
            } 
            return `${percentage}%`
        },
        color: "#409eff",
    },

    render: (args) => ({
        components: {
            YmProgress
        },
    
        setup() {
          const value  = ref(0)
          let timer = setInterval(() => {
            if(value.value >= 100) {
                clearInterval(timer)
                return 
            }
            value.value += 10
          },1000)

        return {
            args,
            value
        };
    },
    template: `
    <ym-progress v-bind="args" :percentage="value">
    </ym-progress>
    `,
  }),
};

export const Circle: Story = {
    args: {
        status: "success",
        showText: true,
        width: 200,
        type: "circle",
    },

    render: (args) => ({
        components: {
            YmProgress
        },
    
        setup() {
          const value  = ref(0)
          let timer = setInterval(() => {
            if(value.value >= 100) {
                clearInterval(timer)
                return 
            }
            value.value += 10
          },1000)

        return {
            args,
            value
        };
    },
    template: `
    <ym-progress v-bind="args" :percentage="value">
    </ym-progress>
    `,
  }),
};
export const Striped: Story = {
    args: {
        status: "success",
        showText: true,
        strokeWidth: 20,
        width: 300,
        striped: true,
        stripedFlow: true,
        duration: 6
    },

    render: (args) => ({
        components: {
            YmProgress
        },
    
        setup() {
          const value  = ref(0)
          let timer = setInterval(() => {
            if(value.value >= 100) {
                clearInterval(timer)
                return 
            }
            value.value += 10
          },1000)

        return {
            args,
            value
        };
    },
    template: `
    <ym-progress v-bind="args" :percentage="value">
    </ym-progress>
    `,
  }),
};


export default meta;
