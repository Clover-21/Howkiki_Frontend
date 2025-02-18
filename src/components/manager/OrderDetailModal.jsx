import React from "react";
import {
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitle,
  MenuContainer,
  MenuContentWrapper,
  MenuContent,
  MenuName,
  MenuQuantity,
  Line,
  BtnContainer,
  CloseBtn,
} from "../../styles/components/orderDetailModal.module";

export default function OrderDetailModal({ isOpen, onClose, selectedOrder }) {
  if (!isOpen) return null;
  return (
    <ModalContainer>
      <Modal>
        <ModalContent>
          <ModalTitle>
            {selectedOrder.tableNumber}번 테이블 상세 주문 내역
          </ModalTitle>
          <MenuContainer>
            {selectedOrder?.orderDetail.map((menu, index) => (
              <MenuContentWrapper key={index}>
                <MenuContent>
                  <MenuName>{menu.menuName}</MenuName>
                  <MenuQuantity>{menu.quantity}</MenuQuantity>
                </MenuContent>
                <Line />
              </MenuContentWrapper>
            ))}
          </MenuContainer>
        </ModalContent>
        <BtnContainer>
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
