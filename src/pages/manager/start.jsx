import React, { useState, useRef } from "react";
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
  const [storeName, setStoreName] = useState("");
  const isProcessing = useRef(false); // 중복 실행 방지용 ref

  const handleInputChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/waiting");
    }
  };

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
            <OkBtn disabled={!storeName} onClick={() => navigate("/waiting")} />
            <Arrow src={arrow} />
          </BtnWrap>
        </InputWrap>
      </StartContent>
    </StartContainer>
  );
}
