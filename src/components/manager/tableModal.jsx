import React, { useEffect, useState } from "react";
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
} from "../../styles/components/commonModal.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function TableModal({ isOpen, onClose, table }) {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    if (!isOpen || !table) return;

    const fetchTableOrder = async () => {
      try {
        const response = await apiClient.get(
          `/stores/1/orders/tables/${table.id}`
        );
        setOrderData(response.data.data);
      } catch (error) {
        console.error("테이블 주문 데이터 가져오기 실패:", error);
        setOrderData(null);
      }
    };
    fetchTableOrder();
  }, [isOpen, table]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>{`${table?.id}번 주문 현황`}</ModalTitle>
        <MenuContainer>
          {orderData && orderData.orderList.length > 0 ? (
            orderData.orderList.map((order, index) => (
              <MenuContentWrapper key={index}>
                <MenuContent>
                  <MenuName>{order.menuName}</MenuName>
                  <MenuQuantity>x{order.quantity}</MenuQuantity>
                  <MenuPrice>{order.totalPrice}원</MenuPrice>
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
            <Price>
              {orderData?.tableTotalPrice
                ? `${orderData.tableTotalPrice}원`
                : "0원"}
            </Price>
          </PriceWrap>
          <PriceWrap>
            <Text>결제 완료된 금액</Text>
            <Price>- 0원</Price>
          </PriceWrap>
          <Line2 />
          <PriceWrap>
            <Text2>주문 금액</Text2>
            <Price>
              {orderData?.tableTotalPrice
                ? `${orderData.tableTotalPrice}원`
                : "0원"}
            </Price>
          </PriceWrap>
        </PriceWrapper>
        <BtnContainer>
          <FinishBtn
            onClick={onClose}
            $isEmpty={!orderData || orderData.orderList.length === 0}
          >
            닫기
          </FinishBtn>
          {orderData && orderData.orderList.length > 0 && (
            <PaidBtn>결제 완료</PaidBtn>
          )}
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
