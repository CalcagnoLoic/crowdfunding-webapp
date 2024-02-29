import type { Meta, StoryObj } from "@storybook/react";

import ProductHero from ".";

const meta = {
  title: "Components/ProductHero",
  component: ProductHero,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
