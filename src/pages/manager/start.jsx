import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function StartPage() {
  const navigate = useNavigate();
  const [storeName, setStoreName] = useState("");

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
