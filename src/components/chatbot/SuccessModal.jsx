import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent1,
  ModalTitle,
  BtnContainer,
  Button,
} from "../../styles/components/userCancelModal.module";

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent1>
          <ModalTitle>주문 성공!</ModalTitle>
        </ModalContent1>
        <BtnContainer>
          <Button onClick={onClose}>확인</Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
