import React from "react";
import ReactDOM from "react-dom/client";
import "../public/style/tailwind.css";
import ProductPage from "./pages/ProductPage";
import { ModalProvider } from "./context/ModalContext";
import { OfferProvider } from "./context/OfferContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <OfferProvider>
        <ProductPage />
      </OfferProvider>
    </ModalProvider>
  </React.StrictMode>,
);
