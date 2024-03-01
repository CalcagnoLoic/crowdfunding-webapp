import { useContext } from "react";
import { OfferContext } from "../context/OfferContext";

export const useOfferContext = () => {
  const context = useContext(OfferContext);

  if (!context) throw new Error("Must have a provider");

  return context;
};
