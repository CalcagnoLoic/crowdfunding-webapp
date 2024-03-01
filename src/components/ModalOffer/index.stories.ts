import type { Meta, StoryObj } from "@storybook/react";

import ModalOffer from ".";

import {
  offerBambooStand,
  offerMahoganyEdition,
  offerNoEdge,
} from "../../data/data";

const meta = {
  title: "Components/ModalOffer",
  component: ModalOffer,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "The content of the offer" },
    pledgeAmount: {
      description: "The minimal amount of dollars for the offer",
    },
    id: { description: "The unique token for the offer" },
    offer: { description: "The content of the offer and their advantages" },
    isDisabled: { description: "Define if the offer is avalaible or not" },
    isFreeOffer: { description: "Define if the offer is free or not" },
    offerLeft: { description: "Define the amount of days left" },
  },
} satisfies Meta<typeof ModalOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FreeOffer: Story = {
  args: {
    title: "Pledge with no reward",
    id: "noReward",
    offer: offerNoEdge,
    isFreeOffer: true,
  },
};

export const PaidOffer: Story = {
  args: {
    title: "Bamboo Stand",
    pledgeAmount: "Pledge $25 or more",
    id: "bamboo",
    offer: offerBambooStand,
    offerLeft: "101",
  },
};

export const DisabledOffer: Story = {
  args: {
    title: "Mahogany Special Edition",
    pledgeAmount: "Pledge $200 or more",
    id: "mahogany",
    offer: offerMahoganyEdition,
    isDisabled: true,
    offerLeft: "0",
  },
};
