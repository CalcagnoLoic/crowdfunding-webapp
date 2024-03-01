import type { Meta, StoryObj } from "@storybook/react";

import BoxOffer from ".";

const meta = {
  title: "Components/BoxOffer",
  component: BoxOffer,
  tags: ["autodocs"],
  argTypes: {
    titleOffer: { description: "Title of the offer" },
    positionCSS: { description: "Css position of the box" },
    amount: { description: "The price allocated to the offer" },
    offer: { description: "The descriptive text of the offer" },
    offerLeft: { description: "The number of offer remaining" },
    isDisabled: {
      description: "Defined whether the offer is available or not",
    },
  },
} satisfies Meta<typeof BoxOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Offer: Story = {
  args: {
    titleOffer: "Bamboo offer",
    positionCSS: "mt-2",
    amount: "25",
    offer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laboriosam necessitatibus voluptates sapiente quisquam voluptatum velit mollitia amet non libero, quibusdam blanditiis quo. Doloribus sit porro odit atque exercitationem mollitia.",
    offerLeft: 5,
  },
};

export const DisabledOffer: Story = {
  args: {
    titleOffer: "Bamboo offer",
    positionCSS: "mt-2",
    amount: "25",
    offer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur laboriosam necessitatibus voluptates sapiente quisquam voluptatum velit mollitia amet non libero, quibusdam blanditiis quo. Doloribus sit porro odit atque exercitationem mollitia.",
    offerLeft: 5,
    isDisabled: true,
  },
};
