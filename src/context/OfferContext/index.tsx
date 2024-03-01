import { createContext, useState } from "react";

interface OfferContext {
  amount: number;
  offerLeftBamboo: number;
  offerLeftBlack: number;
  offerLeftMahogany: number;
  addPledgeAmount: (newValue: number) => void;
  removeOneBambooOffer: () => void;
  removeOneBlackOffer: () => void;
  removeOneMahoganyOffer: () => void;
}

export const OfferContext = createContext<OfferContext>({
  amount: 98914,
  offerLeftBamboo: 101,
  offerLeftBlack: 64,
  offerLeftMahogany: 1,
  addPledgeAmount: () => {},
  removeOneBambooOffer: () => {},
  removeOneBlackOffer: () => {},
  removeOneMahoganyOffer: () => {},
});

export const OfferProvider = ({ children }: { children: JSX.Element }) => {
  const [amount, setAmount] = useState<number>(89914);
  const [offerLeftBamboo, setOfferLeftBamboo] = useState<number>(101);
  const [offerLeftBlack, setOfferLeftBlack] = useState<number>(64);
  const [offerLeftMahogany, setOfferLeftMahogany] = useState<number>(1);

  const addPledgeAmount = (quantity: number) => {
    setAmount(amount + quantity);
  };

  const removeOneBambooOffer = () => {
    if (offerLeftBamboo > 1) {
      setOfferLeftBamboo(offerLeftBamboo - 1);
    }
  };

  const removeOneBlackOffer = () => {
    if (offerLeftBlack >= 1) {
      setOfferLeftBlack(offerLeftBlack - 1);
    }
  };

  const removeOneMahoganyOffer = () => {
    if (offerLeftMahogany >= 1) {
      setOfferLeftMahogany(offerLeftMahogany - 1);
    }
  };

  const contextValue = {
    amount,
    addPledgeAmount,
    offerLeftBamboo,
    offerLeftBlack,
    offerLeftMahogany,
    removeOneBambooOffer,
    removeOneBlackOffer,
    removeOneMahoganyOffer,
  };

  return (
    <OfferContext.Provider value={contextValue}>
      {children}
    </OfferContext.Provider>
  );
};
