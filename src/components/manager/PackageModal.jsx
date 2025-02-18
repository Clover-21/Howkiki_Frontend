import React from "react";
import axios from "axios";
import {
  ModalContainer,
  Modal,
  ModalTitle,
  MenuContainer,
  MenuContentWrapper,
  MenuContent,
  MenuName,
  MenuQuantity,
  Line,
  PriceWrap,
  Price,
  Text,
  BtnContainer,
  PaidBtn,
  FinishBtn,
} from "../../styles/components/commonModal.module";

const API_URL = process.env.REACT_APP_API_URL;

const host = window.location.hostname === "localhost" ? API_URL : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function PackageModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const formattedNumber = String(data.orderId).padStart(3, "0");

  const handlePaid = async () => {
    try {
      await apiClient.patch(
        `/stores/1/orders/tables/${data.tableNumber}/status-paid`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("상태 업데이트 중 에러 발생:", error);
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>포장 {formattedNumber}</ModalTitle>
        <MenuContainer>
          {data.orderDetail.map((order, i) => (
            <MenuContentWrapper key={i}>
              <MenuContent>
                <MenuName>{order.menuName}</MenuName>
                <MenuQuantity>{order.quantity}</MenuQuantity>
              </MenuContent>
              <Line />
            </MenuContentWrapper>
          ))}
        </MenuContainer>
        <PriceWrap>
          <Text>총 주문 금액</Text>
          <Price>{`${data.orderPrice}원`}</Price>
        </PriceWrap>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
          <PaidBtn onClick={handlePaid}>결제 완료</PaidBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
