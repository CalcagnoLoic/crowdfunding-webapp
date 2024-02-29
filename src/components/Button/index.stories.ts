import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    content: { description: "The text content inside the button" },
    css: { description: "The style of button" },
    isDisabled: {
      description: "Defined whether the buton is clickable or not",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buttons: Story = {
  args: {
    content: "Select Reward",
    css: "btn",
  },
};

export const DisabledButton: Story = {
  args: {
    content: "Select Reward",
    css: "btn bg-boulder text-white cursor-not-allowed hover:bg-boulder",
    isDisabled: true,
  },
};
