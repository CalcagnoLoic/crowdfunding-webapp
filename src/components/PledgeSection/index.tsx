//import { createPortal } from "react-dom";

import { useModalContext } from "../../hooks/useModalContext";
import Button from "../Button";
import Line from "../Line";
import Paragraph from "../../typographies/Paragraph";
//import ValidationSection from "../ValidationSection";
import { useState } from "react";
import { useOfferContext } from "../../hooks/useOfferContext";

interface PledgeSectionProps {
  pledgeAmount: number;
  onClick?: () => void;
}

const Component = ({ pledgeAmount, onClick }: PledgeSectionProps) => {
  const { closeModal, openValidateModal } = useModalContext();
  const { addPledgeAmount } = useOfferContext();
  const [formData, setFormData] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataIsValid = (data: string, pledgeAmount: number) => {
      const regex = /^\d+$/;
      return (
        data.trim() !== "" &&
        regex.test(data) &&
        Number(data.trim()) >= pledgeAmount
      );
    };

    setError(true);

    if (formDataIsValid(formData, pledgeAmount)) {
      setError(false);
      openValidateModal();
      closeModal();
      addPledgeAmount(Number(formData));
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <Line isMobile={true} additionnalCSS="w-full my-6" />

      <div className="flex flex-col justify-between md:flex-row">
        <Paragraph
          kind="span"
          content="Enter your pledge"
          css="text-boulder justify-center md:justify-start self-center"
        />
        <form
          className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row"
          onSubmit={handleSubmit}
        >
          <label className="absolute ml-2 mt-4  text-boulder md:ml-5 md:mt-0 md:block md:self-center">
            $
          </label>
          <input
            type="text"
            className="self-center rounded-full border-[1px] border-gallery px-5 py-4 pl-5 text-end font-extrabold caret-keppel outline-none focus:border-keppel"
            value={formData}
            onChange={handleChangeInput}
          />

          <Button
            content="Continue"
            css="bg-keppel text-sm md:text-base text-white px-5 py-4 hover:bg-genoa ease-in-out transition duration-300 text-center cursor-pointer"
            onClick={onClick}
          />
        </form>
      </div>

      {error && (
        <Paragraph
          kind="span"
          content="You must define an higher pledge or enter write a number"
          css="text-end text-sm italic text-red-600"
        />
      )}

      {/* <>{!isOpenModal && createPortal(<ValidationSection />, document.body)}</> */}
    </>
  );
};

export default Component;
