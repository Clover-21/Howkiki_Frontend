import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderSummaryBox from "../../components/chatbot/OrderBox";
import close from "../../assets/icon/close.svg";
import {
  SummaryContainer,
  SummaryContentWrap,
  SummaryTop,
  CloseIcon,
  SummaryTitle,
  Line,
  TableNum,
  TotalOrderPriceWrap,
  TotalBox,
  TotalContent,
  TotalText,
  TotalPrice,
} from "../../styles/chatbot/orderSummary.module";
import { Container } from "../../styles/chatbot/chatBot.module";

export default function OrderSummaryPage() {
  const navigate = useNavigate();
  const { tableNumber } = useParams();

  return (
    <Container>
      <SummaryContainer>
        <SummaryContentWrap>
          <SummaryTop>
            <CloseIcon
              src={close}
              onClick={() => navigate(`/chatbot/${tableNumber}`)}
            />
            <SummaryTitle>주문 내역</SummaryTitle>
          </SummaryTop>
          <Line />
          <TableNum>테이블 {tableNumber}</TableNum>
          <TotalOrderPriceWrap>
            <TotalBox>
              <TotalContent>
                <TotalText>총 2건의 주문 금액</TotalText>
                <TotalPrice>58,900원</TotalPrice>
              </TotalContent>
            </TotalBox>
          </TotalOrderPriceWrap>
          <OrderSummaryBox />
          <OrderSummaryBox />
        </SummaryContentWrap>
      </SummaryContainer>
    </Container>
  );
}
