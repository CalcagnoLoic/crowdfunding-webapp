import type { Meta, StoryObj } from "@storybook/react";

import PledgeSection from ".";

const meta = {
  title: "Components/PledgeSection",
  component: PledgeSection,
  tags: ["autodocs"],
  argTypes: {
    pledgeAmount: { description: "Minimal amount of dollars for an offer" },
  },
} satisfies Meta<typeof PledgeSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pledgeAmount: "25",
  },
};
