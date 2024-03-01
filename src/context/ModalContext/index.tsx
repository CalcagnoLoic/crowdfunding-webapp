import { createContext, useState } from "react";

interface ModalContext {
  isOpenModal: boolean;
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeModal: () => void;
  openValidateModal: () => void;
}

export const ModalContext = createContext<ModalContext>({
  isOpenModal: false,
  openModal: () => {},
  closeModal: () => {},
  openValidateModal: () => {},
});

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openValidateModal = () => {
    setIsOpenModal(true);
  };

  const contextValue = {
    isOpenModal,
    openModal,
    closeModal,
    openValidateModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
