import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  Button,
} from "../styles/components/newOrderModal.module";

export default function NewOrderModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>새로운 주문이 도착하였습니다!</ModalText>
        </ModalContent>
        <Button onClick={onClose}>주문확인</Button>
      </Modal>
    </ModalContainer>
  );
}
