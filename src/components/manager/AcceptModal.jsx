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
} from "../../styles/components/acceptModal.module";

export default function AcceptModal({
  isOpen,
  onClose,
  currentStep,
  onNext,
  onFinish,
}) {
  const [time, setTime] = useState("");

  const handleInputChange = (e) => {
    setTime(e.target.value);
  };

  const handleFinishClick = () => {
    if (time) {
      onFinish("AWAITING_ACCEPTANCE", time);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && time) {
      onFinish("AWAITING_ACCEPTANCE", time);
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
                <TimeBox onClick={() => onFinish("AWAITING_ACCEPTANCE", "5분")}>
                  5분
                </TimeBox>
                <TimeBox onClick={() => onFinish("AWAITING_ACCEPTANCE", "5분")}>
                  10분
                </TimeBox>
              </TimeBoxWrap>
              <TimeBoxWrap>
                <TimeBox onClick={() => onFinish("AWAITING_ACCEPTANCE", "5분")}>
                  15분
                </TimeBox>
                <TimeBox onClick={onNext}>기타</TimeBox>
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
