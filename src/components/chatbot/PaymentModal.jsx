import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent1,
  ModalTitle,
  BtnContainer,
  Button,
} from "../../styles/components/userCancelModal.module";

export default function PaymentModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent1>
          <ModalTitle>결제를 진행해주세요!</ModalTitle>
        </ModalContent1>
        <BtnContainer>
          <Button onClick={onClose}>닫기</Button>
          {children}
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
