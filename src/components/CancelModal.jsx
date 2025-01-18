import React, { useState } from "react";
import {
  CancelModalContainer,
  CancelModalWrap,
  CancelModalContent,
  CancelText,
  CancelBtnContainer,
  CloseBtn,
  CancelBtn,
  CheckBoxWrap,
  SelectedTitle,
  MenuContainer,
} from "../styles/cancelModal.module";
import Checkbox from "./CheckBox";

export default function CancelModal({
  isOpen,
  onClose,
  currentStep,
  onNext,
  selectedReason,
  onSelectReason,
}) {
  if (!isOpen) return null;

  const handleNext = () => {
    if (selectedReason === "재료 소진" && currentStep === 1) {
      onNext();
    } else {
      onClose();
    }
  };

  return (
    <CancelModalContainer>
      <CancelModalWrap>
        <CancelModalContent>
          {currentStep === 1 && (
            <>
              <CancelText>취소하시려는 이유를 골라주세요.</CancelText>
              <CheckBoxWrap>
                <Checkbox
                  text="재료 소진"
                  onClick={() => onSelectReason("재료 소진")}
                  checked={selectedReason === "재료 소진"}
                />
                <Checkbox
                  text="라스트오더 종료"
                  onClick={() => onSelectReason("라스트오더 종료")}
                  checked={selectedReason === "라스트오더 종료"}
                />
                <Checkbox
                  text="기타"
                  onClick={() => onSelectReason("기타")}
                  checked={selectedReason === "기타"}
                />
              </CheckBoxWrap>
            </>
          )}
          {currentStep === 2 && selectedReason === "재료 소진" && (
            <>
              <SelectedTitle>재료 소진된 메뉴를 골라주세요.</SelectedTitle>
              <MenuContainer></MenuContainer>
            </>
          )}
        </CancelModalContent>
        <CancelBtnContainer>
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
          <CancelBtn
            onClick={handleNext}
            active={selectedReason && currentStep === 1}
          >
            {currentStep === 1
              ? selectedReason === "재료 소진"
                ? "다음"
                : "완료"
              : "완료"}
          </CancelBtn>
        </CancelBtnContainer>
      </CancelModalWrap>
    </CancelModalContainer>
  );
}
