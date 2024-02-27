import { useEffect, useRef } from "react";

import Heading from "../../../typographies/Heading";
import IconCloseModal from "../../../icons/IconCloseModal";
import ModalSection from "../../Modal/ModalSection";
import Paragraph from "../../../typographies/Paragraph";

type ModalProps = {
  setCloseModal: (e: boolean) => void;
};

const Component = ({ setCloseModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(e.target as Node)
    ) {
      setCloseModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="opacity z-30 bg-codGray opacity-70"></div>
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

        <ModalSection />
      </div>
    </>
  );
};

export default Component;
