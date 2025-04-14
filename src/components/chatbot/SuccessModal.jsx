import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  BtnContainer,
  Button1,
} from "../../styles/components/userCancelModal.module";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalTitle>주문 성공!</ModalTitle>
        </ModalContent>
        <BtnContainer>
          <Button1 onClick={onClose}>확인</Button1>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
