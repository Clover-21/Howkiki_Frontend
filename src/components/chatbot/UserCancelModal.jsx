import React from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  ModalText,
  BtnContainer,
  Button,
} from "../../styles/components/userCancelModal.module";

export default function UserCancelModal({ isOpen, onClose, status, orderId }) {
  const { storeId } = useParams();
  if (!isOpen) return null;

  const handleCancel = async () => {
    if (status !== "NOT_YET_SENT") {
      return;
    }
    try {
      const response = await apiClient.patch(
        `/stores/${storeId}/orders/${orderId}/user`
      );
      console.log("주문 취소 성공:", response.data);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("상태 업데이트 중 에러 발생:", error);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalTitle>주문 취소</ModalTitle>
          <ModalText>주문을 취소하시겠습니까?</ModalText>
        </ModalContent>
        <BtnContainer>
          <Button className="cancel" onClick={onClose}>
            취소
          </Button>
          <Button className="confirm" onClick={handleCancel}>
            확인
          </Button>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
