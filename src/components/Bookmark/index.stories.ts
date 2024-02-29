import type { Meta, StoryObj } from "@storybook/react";

import Bookmark from ".";

const meta = {
  title: "Components/Bookmark",
  component: Bookmark,
  tags: ["autodocs"],
} satisfies Meta<typeof Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
