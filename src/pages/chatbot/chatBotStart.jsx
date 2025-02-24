import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  StartContainer,
  StartContent,
  Logo,
  BtnWrap,
  Btn,
} from "../../styles/chatbot/chatBotStart.module";
import { Container } from "../../styles/chatbot/chatBot.module";
import logo from "../../assets/icon/logo.svg";

const API_URL = process.env.REACT_APP_API_URL;

const host = window.location.hostname === "localhost" ? API_URL : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function StartPage() {
  const navigate = useNavigate();
  const { tableNumber } = useParams();
  const [tokenData, setTokenData] = useState(null);

  const handleStart = async () => {
    try {
      const response = await apiClient.get(`/session-tokens`);
      const newToken = response.data.data;

      setTokenData(newToken);

      sessionStorage.setItem(`chatbot_token_${tableNumber}`, newToken);

      navigate(`/chatbot/${tableNumber}`);
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
