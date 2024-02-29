import type { Meta, StoryObj } from "@storybook/react";

import IconCloseModal from "./index";

const meta = {
  title: "Icons/IconCloseModal",
  component: IconCloseModal,
  tags: ["autodocs"],
} satisfies Meta<typeof IconCloseModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
