import { useContext } from "react";
import { ModalContext } from "../contexts/modal";

export const useModals = () => useContext(ModalContext);
