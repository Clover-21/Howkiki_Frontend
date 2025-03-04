import React from "react";
import axios from "axios";
import { closeSSEConnection } from "../../hooks/useSSE";
import {
  ModalContainer,
  Modal,
  ModalTitle,
  MenuContainer,
  MenuContentWrapper,
  MenuContent,
  MenuName,
  MenuQuantity,
  MenuPrice,
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

  console.log(data);

  const formattedNumber = String(data.orderId).padStart(3, "0");

  const handlePaid = async () => {
    try {
      const response = await apiClient.patch(
        `/stores/1/orders/${data.orderId}/take-out/status-paid`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userSessionToken = response.data?.data?.userSessionToken;

      if (userSessionToken) {
        closeSSEConnection(userSessionToken);
      }

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
                <MenuQuantity>x{order.quantity}</MenuQuantity>
                <MenuPrice>{order.totalPrice.toLocaleString()}원</MenuPrice>
              </MenuContent>
              <Line />
            </MenuContentWrapper>
          ))}
        </MenuContainer>
        <PriceWrap>
          <Text>총 주문 금액</Text>
          <Price>{`${data.orderPrice.toLocaleString()}원`}</Price>
        </PriceWrap>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
          <PaidBtn onClick={handlePaid}>결제 완료</PaidBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
