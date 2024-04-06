import { useState } from "react";
import { ModalContext } from "./modal-context";

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modalElement) => {
    setModalContent(modalElement);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent}
    </ModalContext.Provider>
  );
};
