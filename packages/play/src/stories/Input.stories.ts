
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmInput} from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue"
type Story = StoryObj<typeof  YmInput>;

const data = ref('hello')

const meta: Meta<typeof  YmInput> = {
  title: "Example/Input",
  component: YmInput,
  tags: ["autodocs"],
  argTypes: {
        type: {
            control: {
                type: "select"
            },
            options: ['text' , 'password' , 'textarea']
        },
       size: {
            control: {
                type: "select"
            },
            options: ['small' , 'large']
       }
    },
    
  args: {
  }
};

export const Default: Story = {
    args: {
      onChange(value) {
        console.log(value,"onChange",data.value)
      },
      onInput(value) {
        console.log(value,"onInput",data.value)
      },
      onBlur() {
        console.log("onBlur")
      },
      onFocus() {
        console.log("onFocus")
      },
      type: 'text',
      size: 'small',
      disabled: false, // 禁用
     clearable: false,// 是否可清空
     showPassword: false, // 是否显示密码
     placeholder: "请输入内容", // 占位符
     readonly: false ,// 是否只读
     autofocus: false // 自动聚焦
    },

    render: (args) => ({
        components: {
            YmInput
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
     <ym-input v-bind="args" v-model="data" />
    `,
  }),
};


export default meta;
