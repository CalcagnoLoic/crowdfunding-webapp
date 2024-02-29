import type { Meta, StoryObj } from "@storybook/react";

import ProductSection from ".";

const meta = {
  title: "Components/ProductSection",
  component: ProductSection,
  tags: ["autodocs"],
  argTypes: {
    positionCSS: {description: "Positioning of the section"}
  }
} satisfies Meta<typeof ProductSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        positionCSS: "mt-2"
    }
};
