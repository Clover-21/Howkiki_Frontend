import React from "react";
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

export default function PackageModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;

  const formattedNumber = String(data.orderId).padStart(3, "0");

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
          <PaidBtn>결제 완료</PaidBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
