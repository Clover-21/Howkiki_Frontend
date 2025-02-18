import React from "react";
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

export default function OrderSummaryBox() {
  const orders = [1, 2, 3, 4, 5];
  // API 연결하면, 변수와 map 함수 사용할 예정
  return (
    <OrderWrap>
      <OrderBox>
        <StatusWrap>
          <Status>주문 접수중</Status>
          <CancelBtn>주문취소</CancelBtn>
        </StatusWrap>
        <OrderNum>주문 번호</OrderNum>
        {orders.map((order) => (
          <MenuComponent key={order}>
            <Line2 />
            <OrderList>
              <OrderContent>
                <MenuWrap>
                  <MenuName>소롱포</MenuName>
                  <Quantity>1개</Quantity>
                </MenuWrap>
                <MenuPrice>ㄴ 7,500원</MenuPrice>
              </OrderContent>
            </OrderList>
          </MenuComponent>
        ))}
        <Line2 />
        <OrderPriceContainer>
          <OrderPriceWrap>
            <OrderText>주문 금액</OrderText>
            <OrderPrice>37,500원</OrderPrice>
          </OrderPriceWrap>
        </OrderPriceContainer>
      </OrderBox>
    </OrderWrap>
  );
}
