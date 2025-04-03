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
        return "취소된 접수";
      default:
        return "상태 없음";
    }
  };

  return (
    <OrderWrap>
      <OrderBox>
        <StatusWrap>
          <Status>{getStatusText(status)}</Status>
          <CancelBtn
            disabled={status !== "NOT_YET_SENT"}
            onClick={() => setIsModalOpen(true)}
          >
            주문취소
          </CancelBtn>
        </StatusWrap>
        <OrderNum>주문 번호 {orderId}</OrderNum>
        {orderData.orderDetail.map((orderItem) => (
          <MenuComponent key={orderItem.id}>
            <Line2 />
            <OrderList>
              <OrderContent>
                <MenuWrap>
                  <MenuName>{orderItem.menuName}</MenuName>
                  <Quantity>{orderItem.quantity}개</Quantity>
                </MenuWrap>
                <MenuPrice>{orderItem.totalPrice}원</MenuPrice>
              </OrderContent>
            </OrderList>
          </MenuComponent>
        ))}
        <Line2 />
        <OrderPriceContainer>
          <OrderPriceWrap>
            <OrderText>주문 금액</OrderText>
            <OrderPrice>{orderData.orderPrice}원</OrderPrice>
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
