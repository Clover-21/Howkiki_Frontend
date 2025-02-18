import React from "react";
import axios from "axios";
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

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

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
