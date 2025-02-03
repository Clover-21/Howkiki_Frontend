import React from "react";
import {
  ModalContainer,
  Modal,
  SuggestionContainer,
  BtnContainer,
  FinishBtn,
} from "../../styles/components/suggestionModal.module";

export default function PackageModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <SuggestionContainer></SuggestionContainer>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
