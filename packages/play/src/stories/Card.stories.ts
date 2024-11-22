
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmCard } from "guyan-ym-ui";
import 'guyan-ym-ui/dist/index.css'

type Story = StoryObj<typeof  YmCard >;

const meta: Meta<typeof  YmCard > = {
  title: "Example/Card",
  component:  YmCard ,
  tags: ["autodocs"],
  argTypes: {
      shadow: {
        control: { type: 'select' },
        options: ['always', 'hover', 'never'],
      },
  },
  args: {
    shadow: 'always',
  }
};

export const Default: Story = {
    args: {
      header: 'Card title',
      contentStyle: {
        color: '#666',
        fontSize: '14px',
      },
      footer: "Card footer",
      shadow: 'always',
    },

    render: (args) => ({
        components: {
            YmCard
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
     <ym-card v-bind="args">
        <p>这是一个默认的卡片<p>
        <div>这是一个默认的卡片</div>
     </ym-card>
    `,
  }),
};

export default meta;