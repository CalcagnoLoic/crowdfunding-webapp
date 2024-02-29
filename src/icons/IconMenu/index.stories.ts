import type { Meta, StoryObj } from "@storybook/react";

import IconMenu from "./index";

const meta = {
  title: "Icons/IconMenu",
  component: IconMenu,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [
        { name: "Light Gray", value: "#AEBAC6" },
        { name: "Dark", value: "#131313" },
      ],
    },
  },
  argTypes: {
    isOpen: { description: "The state of icon" },
    setIsOpen: { description: "The action to switch the state of icon" },
  },
} satisfies Meta<typeof IconMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OpenMenu: Story = {
  args: {
    isOpen: false,
    setIsOpen: () => {
      true;
    },
  },
};

export const CloseMenu: Story = {
  args: {
    isOpen: true,
    setIsOpen: () => {
      false;
    },
  },
};
