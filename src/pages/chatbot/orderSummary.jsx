import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderSummaryBox from "../../components/chatbot/OrderSummaryBox";
import close from "../../assets/icon/close.svg";
import refresh from "../../assets/icon/refresh.svg";
import { apiClient } from "../../api/apiClient";
import {
  SummaryContainer,
  SummaryContentWrap,
  SummaryTop,
  CloseIcon,
  RefreshIcon,
  SummaryTitle,
  Line,
  TableNum,
  TotalOrderPriceWrap,
  TotalBox,
  TotalContent,
  TotalText,
  TotalPrice,
  NotYetOrder,
} from "../../styles/chatbot/orderSummary.module";
import { Container } from "../../styles/chatbot/chatBot.module";

export default function OrderSummaryPage() {
  const navigate = useNavigate();
  const { storeId, tableNumber } = useParams();
  const [orderData, setOrderData] = useState(null);

  const token = sessionStorage.getItem(`chatbot_token_${tableNumber}`);

  const getOrderSummanry = async () => {
    try {
      const response = await apiClient.get(`/stores/${storeId}/orders/user`, {
        headers: {
          sessionToken: token,
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
      });
      setOrderData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("주문 내역 가져오기 실패", error);
    }
  };

  useEffect(() => {
    getOrderSummanry();
  }, [token]);

  return (
    <Container>
      <SummaryContainer>
        <SummaryContentWrap>
          <SummaryTop>
            <CloseIcon
              src={close}
              onClick={() => navigate(`/chatbot/${storeId}/${tableNumber}`)}
            />
            <SummaryTitle>주문 내역</SummaryTitle>
            <RefreshIcon
              src={refresh}
              onClick={() => window.location.reload()}
            />
          </SummaryTop>
          <Line />
          {orderData &&
          orderData.orderList &&
          orderData.orderList.length > 0 ? (
            <>
              <TableNum>테이블 {orderData.tableNumber}</TableNum>
              <TotalOrderPriceWrap>
                <TotalBox>
                  <TotalContent>
                    <TotalText>
                      총 {orderData.orderList.length}건의 주문 금액
                    </TotalText>
                    <TotalPrice>
                      {orderData.tableTotalPrice.toLocaleString()}원
                    </TotalPrice>
                  </TotalContent>
                </TotalBox>
              </TotalOrderPriceWrap>
              {orderData.orderList.map((order) => (
                <OrderSummaryBox
                  key={order.id}
                  status={order.status}
                  orderId={order.orderId}
                  orderData={order}
                />
              ))}
            </>
          ) : (
            <NotYetOrder>주문 내역이 없습니다.</NotYetOrder> // 주문이 없을 때 표시할 메시지
          )}
        </SummaryContentWrap>
      </SummaryContainer>
    </Container>
  );
}
