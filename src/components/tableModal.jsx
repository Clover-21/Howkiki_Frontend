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
  TextWrapper,
  EmptyText,
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

export default function TableModal({
  isOpen,
  onClose,
  table,
  menu,
  totalPrice,
}) {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>{`${table?.name} 주문 현황`}</ModalTitle>
        <MenuContainer>
          {menu.length ? (
            menu.map((order, index) => (
              <MenuContentWrapper key={index}>
                <MenuContent>
                  <MenuName>{order.name}</MenuName>
                  <MenuQuantity>x{order.quantity}</MenuQuantity>
                  <MenuPrice>{order.price.toLocaleString()}원</MenuPrice>
                </MenuContent>
                <Line />
              </MenuContentWrapper>
            ))
          ) : (
            <TextWrapper>
              <EmptyText>주문이 없습니다.</EmptyText>
            </TextWrapper>
          )}
        </MenuContainer>
        <PriceWrapper>
          <PriceWrap>
            <Text>주문 금액</Text>
            <Price>{totalPrice.toLocaleString()}원</Price>
          </PriceWrap>
          <PriceWrap>
            <Text>결제 완료된 금액</Text>
            <Price>- {totalPrice.toLocaleString()}원</Price>
          </PriceWrap>
          <Line2 />
          <PriceWrap>
            <Text2>주문 금액</Text2>
            <Price>{(totalPrice - totalPrice).toLocaleString()}원</Price>{" "}
          </PriceWrap>
        </PriceWrapper>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
          {menu.length > 0 && <PaidBtn>결제 완료</PaidBtn>}
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
