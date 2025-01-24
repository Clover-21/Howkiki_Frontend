import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StartContainer,
  StartContent,
  Logo,
  BtnWrap,
  Btn,
} from "../styles/chatBotStart.module";
import logo from "../assets/icon/logo.svg";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <StartContent>
        <Logo src={logo} />
        <BtnWrap>
          <Btn onClick={() => navigate("/chatbot")}>시작하기</Btn>
        </BtnWrap>
      </StartContent>
    </StartContainer>
  );
}
