import type { Meta, StoryObj } from "@storybook/react";

import ValidationSection from "./index";

const meta = {
  title: "Components/ValidationSection",
  component: ValidationSection,
} satisfies Meta<typeof ValidationSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
