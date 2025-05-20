import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent1,
  ModalTitle,
  BtnContainer,
  Button,
} from "../../styles/components/userCancelModal.module";

export default function PaymentModal({ isOpen, onClose, onSuccess }) {
  if (!isOpen) return null;

  const handleSuccess = () => {
    onClose();
    onSuccess(); // 결제 완료 시 SuccessModal 열기
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalContent1>
          <ModalTitle>결제를 진행해주세요!</ModalTitle>
        </ModalContent1>
        <BtnContainer>
          <PaymentBtn
            productName="주문 상품"
            amount={10000} // 예시 금액, API에서 받아오도록 개선 가능
            merchantUid={`mid_${Date.now()}`}
            onSuccess={handleSuccess}
          />
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
