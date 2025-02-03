import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SummaryContainer,
  SummaryContentWrap,
  OrderContent,
  IconWrap,
  ChatIcon,
} from "../../styles/chatbot/orderSummary.module";
import StatusBar from "../../components/chatbot/StatusBar";
import OrderBox from "../../components/chatbot/OrderBox";
import chatbot from "../../assets/icon/chatbot.svg";

export default function OrderSummaryPage() {
  const navigate = useNavigate();

  return (
    <SummaryContainer>
      <SummaryContentWrap>
        <OrderContent>
          <StatusBar />
          <OrderBox />
          <IconWrap>
            <ChatIcon src={chatbot} onClick={() => navigate("/chatbot")} />
          </IconWrap>
        </OrderContent>
      </SummaryContentWrap>
    </SummaryContainer>
  );
}
