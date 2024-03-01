import type { Meta, StoryObj } from "@storybook/react";

import ModalOffer from ".";

import {
  textBambooStand,
  textMahoganyEdition,
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
    pledgeAmount: 25,
    id: "bamboo",
    offer: textBambooStand,
    offerLeft: 101
  },
};

export const DisabledOffer: Story = {
  args: {
    title: "Mahogany Special Edition",
    pledgeAmount: 200,
    id: "mahogany",
    offer: textMahoganyEdition,
    isDisabled: true,
    offerLeft: 0
  },
};
