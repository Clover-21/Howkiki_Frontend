import React, { useState } from "react";
import UserCancelModal from "./UserCancelModal";
import {
  OrderWrap,
  OrderBox,
  StatusWrap,
  Status,
  CancelBtn,
  OrderNum,
  MenuComponent,
  Line2,
  OrderList,
  OrderContent,
  MenuWrap,
  MenuName,
  Quantity,
  MenuPrice,
  OrderPriceContainer,
  OrderPriceWrap,
  OrderText,
  OrderPrice,
} from "../../styles/chatbot/orderSummary.module";

export default function OrderSummaryBox({ status, orderId, orderData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusText = (status) => {
    switch (status) {
      case "NOT_YET_SENT":
        return "주문 접수중";
      case "AWAITING_ACCEPTANCE":
      case "IN_PROGRESS":
      case "COMPLETED":
        return "접수된 주문";
      case "USER_CANCELLED":
      case "ADMIN_CANCELLED":
        return "취소된 주문";
      default:
        return "접수 실패";
    }
  };

  return (
    <OrderWrap>
      <OrderBox>
        <StatusWrap>
          <Status status={status}>{getStatusText(status)}</Status>
          <CancelBtn
            disabled={status !== "NOT_YET_SENT"}
            onClick={() => setIsModalOpen(true)}
          >
            주문취소
          </CancelBtn>
        </StatusWrap>
        <OrderNum status={status}>주문 번호 {orderId}</OrderNum>
        {orderData.orderDetail.map((orderItem) => (
          <MenuComponent key={orderItem.id}>
            <Line2 />
            <OrderList>
              <OrderContent>
                <MenuWrap>
                  <MenuName status={status}>{orderItem.menuName}</MenuName>
                  <Quantity status={status}>{orderItem.quantity}개</Quantity>
                </MenuWrap>
                <MenuPrice status={status}>
                  ㄴ {orderItem.totalPrice.toLocaleString()}원
                </MenuPrice>
              </OrderContent>
            </OrderList>
          </MenuComponent>
        ))}
        <Line2 />
        <OrderPriceContainer>
          <OrderPriceWrap>
            <OrderText status={status}>주문 금액</OrderText>
            <OrderPrice status={status}>
              {orderData.orderPrice.toLocaleString()}원
            </OrderPrice>
          </OrderPriceWrap>
        </OrderPriceContainer>
      </OrderBox>
      <UserCancelModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={status}
        orderId={orderId}
      />
    </OrderWrap>
  );
}
