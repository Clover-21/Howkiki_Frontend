import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent1,
  ModalTitle,
  ModalSubTitle,
  BtnContainer,
  Button,
} from "../../styles/components/orderFaillModal.module";

export default function OrderFailModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent1>
          <ModalTitle>주문 실패</ModalTitle>
          <ModalSubTitle>다시 주문해주세요!</ModalSubTitle>
        </ModalContent1>
        <BtnContainer>
          <Button onClick={onClose}>확인</Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
