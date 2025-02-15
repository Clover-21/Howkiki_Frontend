import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/icon/logo.svg";
import arrow from "../../assets/icon/arrow.svg";
import {
  StartContainer,
  StartContent,
  Logo,
  InputWrap,
  StoreNameInput,
  BtnWrap,
  OkBtn,
  Arrow,
} from "../../styles/manager/start.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function StartPage() {
  const navigate = useNavigate();
  const [tokenData, setTokenData] = useState(null);
  const [storeName, setStoreName] = useState("");
  const isProcessing = useRef(false); // 중복 실행 방지용 ref

  const handleInputChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleNavigation = async () => {
    if (!storeName || tokenData || isProcessing.current) return;

    isProcessing.current = true;

    try {
      const response = await apiClient.get(`/session-tokens`);
      console.log("토큰 데이터:", response.data);

      const token = response.data.data;
      setTokenData(token);

      localStorage.setItem("adminToken", token);

      navigate("/waiting");
    } catch (error) {
      console.error("실패:", error);
    } finally {
      isProcessing.current = false;
    }
  };

  const requestSubscribe = async (token) => {
    if (!token) return;

    try {
      console.log("SSE 구독 요청 보냄, 토큰:", token);

      await apiClient.get(`/notification/subscribe`, {
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

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleNavigation();
    }
  };

  useEffect(() => {
    if (tokenData) {
      requestSubscribe(tokenData);
    }
  }, [tokenData]);

  return (
    <StartContainer>
      <StartContent>
        <Logo src={logo} />
        <InputWrap>
          <StoreNameInput
            placeholder="가게 이름을 입력하세요"
            value={storeName}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
          />
          <BtnWrap>
            <OkBtn disabled={!storeName} onClick={handleNavigation} />
            <Arrow src={arrow} />
          </BtnWrap>
        </InputWrap>
      </StartContent>
    </StartContainer>
  );
}
