import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    console.log("openModal 호출됨");
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
