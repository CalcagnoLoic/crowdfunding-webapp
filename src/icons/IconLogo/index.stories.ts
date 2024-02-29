import type { Meta, StoryObj } from "@storybook/react";

import IconLogo from "./index";

const meta = {
  title: "Icons/IconLogo",
  component: IconLogo,
  tags: ["autodocs"],
  argTypes: {
    isMainLogo: { description: "Determine if the logo is the main or product" },
    css: { description: "Additional style, e.g. positionning" },
  },
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [
        { name: "Light Gray", value: "#AEBAC6" },
        { name: "Dark", value: "#131313" },
      ],
    },
  },
} satisfies Meta<typeof IconLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainLogo: Story = {
  args: {
    isMainLogo: true,
  },
};

export const ProductLogo: Story = {
  args: {
    isMainLogo: false,
  },
};
