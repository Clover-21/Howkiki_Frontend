import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import logo from "../../assets/icon/logo.svg";
import {
  StartContainer,
  StartContent,
  Logo,
  BtnWrap,
  Btn,
} from "../../styles/chatbot/chatBotStart.module";
import { Container } from "../../styles/chatbot/chatBot.module";

export default function StartPage() {
  const navigate = useNavigate();
  const { storeId, tableNumber } = useParams();
  const [tokenData, setTokenData] = useState(null);

  const handleStart = async () => {
    try {
      const response = await apiClient.get(`/session-tokens`);
      const newToken = response.data.data;

      setTokenData(newToken);

      sessionStorage.setItem(`chatbot_token_${tableNumber}`, newToken);

      navigate(`/chatbot/${storeId}/${tableNumber}`);
    } catch (error) {
      console.error("토큰 발급 실패:", error);
    }
  };

  return (
    <Container>
      <StartContainer>
        <StartContent>
          <Logo src={logo} />
          <BtnWrap>
            <Btn onClick={handleStart}>시작하기</Btn>
          </BtnWrap>
        </StartContent>
      </StartContainer>
    </Container>
  );
}
