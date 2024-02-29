import type { Meta, StoryObj } from "@storybook/react";

import IconValidity from "./index";

const meta = {
  title: "Icons/IconValidity",
  component: IconValidity,
  tags: ["autodocs"],
} satisfies Meta<typeof IconValidity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
