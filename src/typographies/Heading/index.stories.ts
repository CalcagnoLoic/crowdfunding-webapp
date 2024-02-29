import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "Typographies/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The kind of level title" },
    content: { description: "The textual content of heading" },
    css: { description: "The style's rules" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "mastercraft bamboo monitor riser",
    css: "px-8 text-center text-xl font-bold capitalize text-codGray",
  },
};

export const H2: Story = {
  args: {
    kind: "h2",
    content: "About this project",
    css: "text-codGray font-bold text-xl mt-3",
  },
};

export const H3: Story = {
  args: {
    kind: "h3",
    content: "Pledge 25$ or more",
    css: "text-keppel mt-2",
  },
};
