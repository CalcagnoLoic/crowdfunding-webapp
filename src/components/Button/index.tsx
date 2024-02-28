import { ButtonProps } from "../../types/type";
import { createPortal } from "react-dom";
import { useState } from "react";

import Paragraph from "../../typographies/Paragraph";
import ProductModal from "../Product/ProductModal";

const Component = ({ content, css, isDisabled }: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleStateAndModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setIsClicked(!isClicked);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className={`${css} relative flex rounded-full font-bold `}
        disabled={isDisabled}
        onClick={toggleStateAndModal}
      >
        <Paragraph
          kind="p"
          content={content}
          css="px-5 self-center block mx-auto"
        />
      </button>

      {isModalOpen &&
        createPortal(
          <ProductModal setCloseModal={handleCloseModal} />,
          document.body,
        )}
    </>
  );
};

export default Component;
