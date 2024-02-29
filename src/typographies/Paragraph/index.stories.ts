import type { Meta, StoryObj } from "@storybook/react";

import Paragraph from ".";

const meta = {
  title: "Typographies/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "The kind of level title" },
    content: { description: "The textual content of heading" },
    css: { description: "The style's rules" },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const P: Story = {
  args: {
    kind: "p",
    content:
      "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
    css: "mt-4 px-8 text-center text-boulder",
  },
};

export const Span: Story = {
  args: {
    kind: "span",
    content: "Enter your pledge",
    css: "text-boulder justify-center md:justify-start self-center",
  },
};
