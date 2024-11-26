import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setIsOpen(true);
  };
  const closeModal = () => {
    document.body.style.overflow = "unset";
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
