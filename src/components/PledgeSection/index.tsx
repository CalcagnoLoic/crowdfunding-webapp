import { createPortal } from "react-dom";

import Button from "../Button";
import Line from "../Line";
import Paragraph from "../../typographies/Paragraph";
import ValidationSection from "../ValidationSection";
import { useState } from "react";

const Component = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  console.log(isModalOpen);

  const toggleModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
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
          onSubmit={toggleModal}
        >
          <label className="absolute ml-2 mt-4  text-boulder md:ml-5 md:mt-0 md:block md:self-center">
            $
          </label>
          <input
            type="text"
            className="self-center rounded-full border-[1px] border-gallery px-5 py-4 pl-5 text-end font-extrabold caret-keppel outline-none focus:border-keppel"
          />
          <Button
            content="Continue"
            css="bg-keppel text-sm md:text-base text-white px-5 py-4 hover:bg-genoa ease-in-out transition duration-300 text-center cursor-pointer"
          />
        </form>

        {isModalOpen && createPortal(<ValidationSection />, document.body)}
      </div>
    </>
  );
};

export default Component;
