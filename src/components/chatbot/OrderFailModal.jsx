import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  ModalSubTitle,
  BtnContainer,
  Button,
} from "../../styles/components/orderFailModal.module";

export default function OrderFailModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalTitle>주문 실패</ModalTitle>
          <ModalSubTitle>다시 주문해주세요!</ModalSubTitle>
        </ModalContent>
        <BtnContainer>
          <Button onClick={onClose}>확인</Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
