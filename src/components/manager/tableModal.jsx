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
  PriceWrap,
  Price,
  Text,
  BtnContainer,
  PaidBtn,
  FinishBtn,
} from "../../styles/components/commonModal.module";

const API_URL = process.env.REACT_APP_API_URL;

export default function TableModal({ isOpen, onClose, table }) {
  const [orderData, setOrderData] = useState(null);

  const handlePaid = async () => {
    try {
      await axios.patch(
        `${API_URL}/stores/1/orders/tables/${table.id}/status-paid`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      onClose();
    } catch (error) {
      console.error("상태 업데이트 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    if (!isOpen || !table) return;

    const fetchTableOrder = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/stores/1/orders/tables/${table.id}`
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
        <PriceWrap>
          <Text>총 주문 금액</Text>
          <Price>
            {orderData?.tableTotalPrice
              ? `${orderData.tableTotalPrice}원`
              : "0원"}
          </Price>
        </PriceWrap>
        <BtnContainer>
          <FinishBtn
            onClick={onClose}
            $isEmpty={!orderData || orderData.orderList.length === 0}
          >
            닫기
          </FinishBtn>
          {orderData && orderData.orderList.length > 0 && (
            <PaidBtn onClick={handlePaid}>결제 완료</PaidBtn>
          )}
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
