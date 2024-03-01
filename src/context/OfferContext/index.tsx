import { createContext, useState } from "react";

interface OfferContext {
  amount: number;
  offerLeftBamboo: number;
  offerLeftBlack: number;
  addPledgeAmount: (newValue: number) => void;
  removeOneBambooOffer: () => void;
  removeOneBlackOffer: () => void;
}

export const OfferContext = createContext<OfferContext>({
  amount: 98914,
  offerLeftBamboo: 101,
  offerLeftBlack: 64,
  addPledgeAmount: () => {},
  removeOneBambooOffer: () => {},
  removeOneBlackOffer: () => {},
});

export const OfferProvider = ({ children }: { children: JSX.Element }) => {
  const [amount, setAmount] = useState<number>(89914);
  const [offerLeftBamboo, setOfferLeftBamboo] = useState<number>(101);
  const [offerLeftBlack, setOfferLeftBlack] = useState<number>(64);

  const addPledgeAmount = (quantity: number) => {
    setAmount(amount + quantity);
  };

  const removeOneBambooOffer = () => {
    setOfferLeftBamboo(offerLeftBamboo - 1);
  };

  const removeOneBlackOffer = () => {
    setOfferLeftBlack(offerLeftBlack - 1);
  };

  const contextValue = {
    amount,
    addPledgeAmount,
    offerLeftBamboo,
    offerLeftBlack,
    removeOneBambooOffer,
    removeOneBlackOffer,
  };

  return (
    <OfferContext.Provider value={contextValue}>
      {children}
    </OfferContext.Provider>
  );
};
