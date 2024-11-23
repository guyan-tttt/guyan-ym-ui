
import type { Meta, StoryObj } from "@storybook/vue3";
import { YmDropdown, YmDropdownItem, YmIcon} from "guyan-ym-ui";
import { fn } from '@storybook/test'
import 'guyan-ym-ui/dist/index.css'
import { ref } from "vue"
type Story = StoryObj<typeof  YmDropdown>;

const meta: Meta<typeof  YmDropdown> = {
  title: "Example/Dropdown",
  component:  YmDropdown,
  tags: ["autodocs"],
  argTypes: {
        type: {
            control: {
                type: "select"
            },
            options: ['primary' , 'default' , 'success' , 'warning',"danger"]
        },
        trigger: {
            control: {
                type: "select"
            },
            options: ['click' , 'hover' , 'contextmenu']
        }
    },
    
  args: {
  }
};

export const Default: Story = {
    args: {
      onCommand: (command) => { alert(command) },
      trigger: 'click',
    },

    render: (args) => ({
        components: {
            YmDropdown,
            YmDropdownItem,
            YmIcon
        },
    
        setup() {
        return {
            args,
        };
    },
    template: `
     <ym-dropdown v-bind="args">
        <span class="dropdown-link">
          Dropdown List
          <ym-icon icon="angle-down" />
        </span>
        <template #dropdown>
          <ym-dropdown-item command="1">Action 1</ym-dropdown-item>
          <ym-dropdown-item command="2" label="Action 2" />
          <ym-dropdown-item command="3" disabled>Action 3</ym-dropdown-item>
          <ym-dropdown-item command="4" divided>Action 4</ym-dropdown-item>
        </template>
    </ym-dropdown>
    `,
  }),
};

export const Items:Story = {
    args: {
        onCommand: (command) => { alert(command) },
        items: [
            {
                label: '选项1',
                command: "1"
            },
            {
                label: '选项2',
                command: "2",
                disabled: true
            },
            {
                label: '选项3',
                command: "3",
                divided: true
            }
        ],
        disabled: false,
        hideOnClick: true,
      },
  
      render: (args) => ({
          components: {
              YmDropdown,
              YmDropdownItem,
              YmIcon
          },
      
          setup() {
          return {
              args,
          };
      },
      template: `
       <ym-dropdown v-bind="args">
          <span class="dropdown-link">
            Dropdown List
            <ym-icon icon="angle-down" />
          </span>
      </ym-dropdown>
      `,
    }),
}

const DownRef = ref(null)

export const SplitButton:Story = {
    args: {
        onClick:(e) => {
            alert(e)
         },
        items: [
            {
                label: '选项1',
                command: "1"
            },
            {
                label: '选项2',
                command: "2",
                disabled: true
            },
            {
                label: '选项3',
                command: "3",
                divided: true
            }
        ],
        splitButton: true,
        type: 'primary',
        size: 'small',
      },
  
      render: (args) => ({
          components: {
              YmDropdown,
              YmDropdownItem,
              YmIcon
          },
      
          setup() {
          return {
              args,
          };
      },
      template: `
       <ym-dropdown v-bind="args" ref="DownRef">
          <span class="dropdown-link">
            Dropdown List
            <ym-icon icon="angle-down" />
          </span>
      </ym-dropdown>
      `,
    }),
}

export default meta;
