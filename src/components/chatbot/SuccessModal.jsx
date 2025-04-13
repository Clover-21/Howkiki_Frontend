import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  BtnContainer,
  Button,
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
          <Button onClick={onClose}>확인</Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
