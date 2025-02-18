import React, { useState, useEffect } from "react";
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

export default function StartPage() {
  const navigate = useNavigate();
  const { tableNumber } = useParams();
  const [tokenData, setTokenData] = useState(null);

  const handleStart = async () => {
    try {
      const response = await axios.get(`${API_URL}/session-tokens`);
      const token = response.data.data;
      setTokenData(token);
      localStorage.setItem(`chatbot_token_${tableNumber}`, token);
      navigate(`/chatbot/${tableNumber}`);
    } catch (error) {
      console.error("토큰 발급 실패:", error);
    }
  };

  const requestSubscribe = async (token) => {
    if (!token) return;

    try {
      console.log("SSE 구독 요청 보냄, 토큰:", token);

      await axios.get(`${API_URL}/notification/subscribe`, {
        headers: {
          sessionToken: token,
          Accept: "text/event-stream",
          "Cache-Control": "no-cache",
        },
      });
    } catch (error) {
      console.error("SSE 구독 실패:", error);
    }
  };

  useEffect(() => {
    if (tokenData) {
      requestSubscribe(tokenData);
    }
  }, [tokenData]);

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
