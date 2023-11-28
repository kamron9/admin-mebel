import { createContext, useContext, useState } from "react";

const OrderModalContext = createContext(null);
export const useOrderModalContext = () => useContext(OrderModalContext);
const OrderModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => setOpenModal(true);
  const hideModal = () => setOpenModal(false);
  return (
    <OrderModalContext.Provider value={{ openModal, showModal, hideModal }}>
      {children}
    </OrderModalContext.Provider>
  );
};

export default OrderModalProvider;
