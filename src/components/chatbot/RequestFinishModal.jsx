import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  BtnContainer,
  FinishBtn,
} from "../../styles/components/chatbotModal.module";

export default function RequestFinishModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalText>사장님께 요청사항을 전달했습니다!</ModalText>
        </ModalContent>
        <BtnContainer>
          <FinishBtn onClick={onClose}>확인</FinishBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
