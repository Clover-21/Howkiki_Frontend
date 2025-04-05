import React from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
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

export default function PackageModal({ isOpen, onClose, data }) {
  const { storeId } = useParams();
  if (!isOpen) return null;

  console.log(data);

  const formattedNumber = String(data.orderId).padStart(3, "0");

  const handlePaid = async () => {
    try {
      const response = await apiClient.patch(
        `/stores/${storeId}/orders/${data.orderId}/take-out/status-paid`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userSessionToken = response.data?.data?.userSessionToken;
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
