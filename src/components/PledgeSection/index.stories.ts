import type { Meta, StoryObj } from "@storybook/react";

import PledgeSection from ".";

const meta = {
  title: "Components/PledgeSection",
  component: PledgeSection,
  tags: ["autodocs"],
} satisfies Meta<typeof PledgeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
