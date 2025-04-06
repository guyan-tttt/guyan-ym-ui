
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmUpload, type UploadFile, type UploadProps } from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue";

type Story = StoryObj<typeof YmUpload >;

const meta: Meta<typeof YmUpload> = {
  title: "Example/Upload",
  component: YmUpload,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "avatar", "picture-list"],
    }
    
  },

};


export const Default: Story = {
    args: {
        type: "default",
        accept: "image/*",
        action: "",
        draggable: true,
        multiple: true,
    },

    render: (args: UploadProps) => ({
        components: {
            YmUpload
        },
    
        setup() {
          const value  = ref<UploadFile[]>([])
        return {
            args,
            value
        };
    },
    template: `
    <ym-upload v-bind="args" v-model="value"  />
    `,
  }),
};
export const Avatar: Story = {
    args: {
       type: "avatar",
        accept: "image/*",
        action: "",
        draggable: true,
        multiple: true,
    },

    render: (args:any) => ({
        components: {
            YmUpload
        },
    
        setup() {
          const fileList = ref<UploadFile[]>([])
          const imgSrc = ref("")
         const onChange = (fileList: UploadFile[]) => {
            const file = fileList[0]
            imgSrc.value = URL.createObjectURL(file.raw)
         }
          return {
              args,
              fileList,
              imgSrc,
              onChange
          };
    },
    template: `
    <ym-upload v-bind="args" v-model="fileList" @file-change="onChange">
        <img v-if="imgSrc" :src="imgSrc" alt="" style="width: 180px; height: 180px; border-radius: 10px; object-fit: cover" />
    </ym-upload>
    `,
  }),
};

export const PictureList: Story = {
    args: {
       type: "picture-list",
    },
    render: (args:any) => ({
        components: {
            YmUpload
        },
    
        setup() {
          const fileList = ref<UploadFile[]>([])
          return {
              args,
              fileList,
          };
    },
    template: `
    <ym-upload v-bind="args" v-model="fileList">
    </ym-upload>
    `,
  }),
}

export default meta;
