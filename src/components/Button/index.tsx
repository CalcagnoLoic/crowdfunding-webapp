import { ButtonProps } from "../../types/type";
import { createPortal } from "react-dom";
import { useState } from "react";

import IconBookmark from "../../icons/IconBookmark";
import Paragraph from "../../typographies/Paragraph";
import ProductModal from "../Product/ProductModal";

const Component = ({
  content,
  css,
  isIcon,
  isMobile,
  isDisabled,
  handleClick,
}: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleStateAndModal = () => {
    setIsClicked(!isClicked);
    setIsModalOpen(true);
    handleClick && handleClick();
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
        {isIcon && isClicked !== undefined && (
          <IconBookmark clicked={isClicked} />
        )}
        <Paragraph
          kind="p"
          content={content}
          css={`px-5 self-center block mx-auto ${isMobile ? "hidden" : ""}`}
        />
      </button>

      {!isIcon &&
        isModalOpen &&
        createPortal(
          <ProductModal setCloseModal={handleCloseModal} />,
          document.body,
        )}
    </>
  );
};

export default Component;
