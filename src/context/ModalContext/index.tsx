import { createContext, useState } from "react";

interface ModalContext {
  isOpenModal: boolean;
  openModal: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContext>({
  isOpenModal: false,
  openModal: () => {},
  closeModal: () => {},
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

  const contextValue = {
    isOpenModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
