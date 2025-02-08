import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  BtnContainer,
  FinishBtn,
} from "../../styles/components/chatbotModal.module";

export default function OrderCancelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>
            주문이 <span>소롱포 - 재료소진</span>으로
          </ModalText>
          <ModalText>취소되었습니다.</ModalText>
        </ModalContent>
        <BtnContainer>
          <FinishBtn onClick={onClose}>확인</FinishBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
