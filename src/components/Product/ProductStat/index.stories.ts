import type { Meta, StoryObj } from "@storybook/react";

import ProductStat from ".";

const meta = {
  title: "Components/ProductStat",
  component: ProductStat,
  tags: ["autodocs"],
  argTypes: {
    positionCSS: { description: "Positioning of the section" },
  },
} satisfies Meta<typeof ProductStat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    positionCSS: "mt-2",
  },
};
