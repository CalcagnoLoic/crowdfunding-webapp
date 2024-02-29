import { useClickOutside } from "../../../hooks/useClickOutside";
import { useRef } from "react";
import {
  offerBambooStand,
  offerBlackEdition,
  offerMahoganyEdition,
  offerNoEdge,
} from "../../../data/data";

import Heading from "../../../typographies/Heading";
import IconCloseModal from "../../../icons/IconCloseModal";
import Paragraph from "../../../typographies/Paragraph";
import ModalOffer from "../../ModalOffer";

type ModalProps = {
  setCloseModal: (e: boolean) => void;
};

const Component = ({ setCloseModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useClickOutside({ callback: setCloseModal, ref: modalRef });

  return (
    <>
      <div className="opacity z-30 bg-codGray"></div>
      <div
        className="absolute left-1/2 top-20 z-40 w-4/5 -translate-x-1/2 rounded-xl bg-white px-6 py-8 md:top-44 md:p-10 lg:w-3/5"
        ref={modalRef}
      >
        <div className="flex justify-between">
          <Heading
            kind="h1"
            content="Back this project"
            css="font-bold text-2xl"
          />
          <div onClick={() => setCloseModal(false)}>
            <IconCloseModal />
          </div>
        </div>

        <Paragraph
          kind="p"
          content="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?"
          css="mt-4 text-boulder"
        />

        <ModalOffer
          title="Pledge with no reward"
          id="noReward"
          offer={offerNoEdge}
          isFreeOffer={true}
        />
        <ModalOffer
          title="Bamboo Stand"
          subtitle="Pledge $25 or more"
          id="bamboo"
          offer={offerBambooStand}
          daysLeft="101"
        />
        <ModalOffer
          title="Black Edition Stand"
          subtitle="Pledge $75 or more"
          id="blackEdition"
          offer={offerBlackEdition}
          daysLeft="64"
        />
        <ModalOffer
          title="Mahogany Special Edition"
          subtitle="Pledge $200 or more"
          id="mahogany"
          offer={offerMahoganyEdition}
          isDisabled={true}
          daysLeft="0"
        />
      </div>
    </>
  );
};

export default Component;
