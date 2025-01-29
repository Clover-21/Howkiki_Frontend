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
  MenuPrice,
  Line,
  PriceWrapper,
  PriceWrap,
  Price,
  Text,
  Line2,
  Text2,
  BtnContainer,
  PaidBtn,
  FinishBtn,
} from "../styles/components/tableModal.module";

export default function TableModal({ isOpen, onClose, table, menu }) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>{`${table?.name} 주문 현황`}</ModalTitle>
        <MenuContainer>
          {menu.map((menu, index) => (
            <MenuContentWrapper key={index}>
              <MenuContent>
                <MenuName>{menu.name}</MenuName>
                <MenuQuantity>x{menu.quantity}</MenuQuantity>
                <MenuPrice>{menu.price}</MenuPrice>
              </MenuContent>
              <Line />
            </MenuContentWrapper>
          ))}
        </MenuContainer>
        <PriceWrapper>
          <PriceWrap>
            <Text>주문 금액</Text>
            <Price>30,500원</Price>
          </PriceWrap>
          <PriceWrap>
            <Text>결제 완료된 금액</Text>
            <Price>- 30,500원</Price>
          </PriceWrap>
          <Line2 />
          <PriceWrap>
            <Text2>주문 금액</Text2>
            <Price>0원</Price>
          </PriceWrap>
        </PriceWrapper>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
          <PaidBtn>결제 완료</PaidBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
