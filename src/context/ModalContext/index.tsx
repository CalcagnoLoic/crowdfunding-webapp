import { createContext, useState } from "react";

interface ModalContext {
  isOpenModal: boolean;
  isCurrentId: string | null;
  openModal: (e: React.MouseEvent<HTMLButtonElement>, modalID: string) => void;
  closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ModalContext = createContext<ModalContext>({
  isOpenModal: false,
  isCurrentId: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: JSX.Element }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isCurrentId, setIsCurrentId] = useState<string | null>(null);

  const openModal = (
    e: React.MouseEvent<HTMLButtonElement>,
    modalID: string,
  ) => {
    e.stopPropagation();
    setIsOpenModal(true);
    setIsCurrentId(modalID);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpenModal(false);
    setIsCurrentId(null);
  };

  const contextValue = {
    isOpenModal,
    isCurrentId,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};
