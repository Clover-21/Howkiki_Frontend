import React, { useState, useEffect } from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalText,
  TimeBoxWrap,
  TimeBox,
  TimeInput,
  FinishBtn,
} from "../styles/components/acceptModal.module";

export default function AcceptModal({ isOpen, onClose, currentStep, onNext }) {
  const [time, setTime] = useState("");

  const handleInputChange = (e) => {
    setTime(e.target.value);
  };

  const handleFinishClick = () => {
    if (time) {
      onClose();
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && time) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setTime("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          {currentStep === 1 && (
            <>
              <ModalText>준비 예상 시간을 선택해주세요.</ModalText>
              <TimeBoxWrap>
                <TimeBox onClick={onClose}>5분</TimeBox>
                <TimeBox onClick={onClose}>10분</TimeBox>
              </TimeBoxWrap>
              <TimeBoxWrap>
                <TimeBox onClick={onClose}>15분</TimeBox>
                <TimeBox onClick={onNext}>기타</TimeBox> {/* 기타 버튼 */}
              </TimeBoxWrap>
            </>
          )}
          {currentStep === 2 && (
            <>
              <ModalText>준비 예상 시간을 입력해주세요.</ModalText>
              <TimeInput
                value={time}
                onChange={handleInputChange}
                onKeyDown={handleEnter}
              />
              <FinishBtn onClick={handleFinishClick} disabled={!time}>
                완료
              </FinishBtn>
            </>
          )}
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
}
