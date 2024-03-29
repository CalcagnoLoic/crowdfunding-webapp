import type { Meta, StoryObj } from "@storybook/react";

import IconBookMark from ".";

const meta = {
  title: "Icons/IconBookMark",
  component: IconBookMark,
  tags: ["autodocs"],
  argTypes: {
    clicked: { description: "Determine if the icon is selected or not" },
  },
} satisfies Meta<typeof IconBookMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SelectedIcon: Story = {
  args: {
    clicked: true,
  },
};

export const UnselectedIcon: Story = {
  args: {
    clicked: false,
  },
};
