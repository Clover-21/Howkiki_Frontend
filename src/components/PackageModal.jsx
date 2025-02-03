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
} from "../styles/components/commonModal.module";

export default function PackageModal({ isOpen, onClose, number }) {
  if (!isOpen) return null;

  const formattedNumber = String(number).padStart(3, "0");

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>포장 {formattedNumber}</ModalTitle>
        <MenuContainer>
          <MenuContentWrapper>
            <MenuContent>
              <MenuName></MenuName>
              <MenuQuantity></MenuQuantity>
              <MenuPrice></MenuPrice>
            </MenuContent>
            <Line />
          </MenuContentWrapper>
        </MenuContainer>
        <PriceWrapper>
          <PriceWrap>
            <Text>주문 금액</Text>
            <Price>0원</Price>
          </PriceWrap>
          <PriceWrap>
            <Text>결제 완료된 금액</Text>
            <Price>- 0원</Price>
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
