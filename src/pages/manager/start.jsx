import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon/logo.svg";
import arrow from "../../assets/icon/arrow.svg";
import { apiClient } from "../../api/apiClient";
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
  const isProcessing = useRef(false); // 중복 실행 방지용 ref

  const handleInputChange = (e) => {
    setStoreName(e.target.value);
  };

  const handleStoreInfo = async (storeName) => {
    if (!storeName || isProcessing.current) return;

    isProcessing.current = true;

    try {
      const response = await apiClient.get(
        `/stores?storeName=${encodeURIComponent(storeName)}`
      );
      const storeId = response.data.data.storeId;
      const token = response.data.data.sessionToken;

      // 가게별 storeId와 token을 저장
      localStorage.setItem(`${storeName}_storeId`, storeId);
      sessionStorage.setItem(`${storeId}_token`, token);

      // 현재 선택된 가게를 따로 저장
      localStorage.setItem("currentStore", storeName);

      navigate(`/${storeId}/waiting`);
    } catch (error) {
      console.error("가게 정보 받기 실패:", error);
    } finally {
      isProcessing.current = false;
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleStoreInfo(storeName);
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
            <OkBtn
              disabled={!storeName}
              onClick={() => handleStoreInfo(storeName)}
            />
            <Arrow src={arrow} />
          </BtnWrap>
        </InputWrap>
      </StartContent>
    </StartContainer>
  );
}
