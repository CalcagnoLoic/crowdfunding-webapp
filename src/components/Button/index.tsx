import { useState } from "react";
import IconBookmark from "../../icons/IconBookmark";
import { ButtonProps } from "../../types/type";
import Paragraph from "../../typographies/Paragraph";
import ProductModal from "../Product/ProductModal";
import { createPortal } from "react-dom";

const Component = ({
  content,
  css,
  isIcon,
  isMobile,
  isDisabled,
  onClick,
  clicked,
}: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className={`${css} relative flex rounded-full font-bold ${isMobile ? "hidden" : ""}`}
        disabled={isDisabled}
        onClick={(e) => {
          onClick && onClick();
          handleOpenModal(e);
        }}
      >
        {isIcon && clicked !== undefined && <IconBookmark clicked={clicked} />}
        <Paragraph
          kind="p"
          content={content}
          css="px-5 self-center block mx-auto"
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
