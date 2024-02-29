import type { Meta, StoryObj } from "@storybook/react";

import NavItems from ".";

const meta = {
  title: "Components/NavItems",
  component: NavItems,
  tags: ["autodocs"],
  argTypes: {
    ulStyle: { description: "Style for ul's tag" },
    liStyle: { description: "Style for li's tags" },
    forwardedRef: {
      description:
        "Reference for mobile device to have the possibility to close dropdown menu if the use click outside",
    },
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
} satisfies Meta<typeof NavItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DesktopDevice: Story = {
  args: {
    ulStyle: "flex gap-5 font-bold text-white",
    liStyle: "nav-items-desktop",
  },
};
