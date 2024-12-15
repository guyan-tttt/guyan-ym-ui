
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmImage} from "guyan-ym-ui";
import 'guyan-ym-ui/dist/index.css'
type Story = StoryObj<typeof  YmImage>;

const srcList = [
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
  ]

const meta: Meta<typeof  YmImage> = {
  title: "Example/Image",
  component: YmImage,
  tags: ["autodocs"],
  argTypes: {
      fit: {
          control: 'select',
          options: ['fill', 'contain', 'cover', 'none', 'scale-down']
      },
      src: {
        control: 'select',
        options: srcList
      },
      loading: {
        control: 'select',
        options: ['eager', 'lazy']
      }
    
  },
    
};

export const Default: Story = {
    args: {
        hideOnClickModal: true,
        lazy: false,
        fit: 'fill',
        src: srcList[0],
        alt: 'test',
        previewSrcList: srcList,
        zIndex: 2000,
        initialIndex: 0,
        closeOnPressEscape: true,
        zoomRate: 0.1 ,// 缩放比例
        minScale:0.5 ,// 最小缩放比例
        maxScale:1.5
    },

    render: (args) => ({
        components: {
            YmImage
        },
    
        setup() {
        return {
            args,
            srcList
        };
    },
    template: `
     <ym-image v-for="(item,index) in srcList" :key="item"  v-bind="args" :src="srcList[index]"  style="width:400px;" />
    `,
  }),
};


export default meta;
