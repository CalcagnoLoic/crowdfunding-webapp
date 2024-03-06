import { formValidation } from "../../utils/formValidation";
import { useOfferContext } from "../../hooks/useOfferContext";
import { useState } from "react";

import Button from "../Button";
import Line from "../Line";
import Paragraph from "../../typographies/Paragraph";
import { createPortal } from "react-dom";
import ValidationSection from "../ValidationSection";

interface PledgeSectionProps {
  pledgeAmount: number;
  onClick?: () => void;
}

const Component = ({ pledgeAmount, onClick }: PledgeSectionProps) => {
  const [error, setError] = useState<boolean>(false);
  const [formData, setFormData] = useState<string>("");
  const [validationModal, setValidationModal] = useState<boolean>(false);

  const { addPledgeAmount } = useOfferContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);

    if (formValidation(formData, pledgeAmount)) {
      setError(false);
      onClick && onClick();
      addPledgeAmount(Number(formData));
      setValidationModal(true);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
    setError(false);
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
            isDisabled={error ? true : false}
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

      {validationModal && createPortal(<ValidationSection />, document.body)}
    </>
  );
};

export default Component;
