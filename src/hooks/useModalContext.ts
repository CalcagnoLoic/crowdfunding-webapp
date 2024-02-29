import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) throw new Error("Must have a provider");

  return context;
};
