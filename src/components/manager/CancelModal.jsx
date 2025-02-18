import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "./CheckBox";
import Line from "./Line";
import {
  CancelModalContainer,
  CancelModalWrap,
  CancelModalContent,
  CancelText,
  CancelBtnContainer,
  CloseBtn,
  CancelBtn,
  CheckBoxWrap,
  SelectedTitle,
  MenuContainer,
  MenuContent,
  CheckboxWrapper,
  MenuContentWrapper,
} from "../../styles/components/cancelModal.module";

const API_URL = process.env.REACT_APP_API_URL;

const host = window.location.hostname === "localhost" ? API_URL : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function CancelModal({
  isOpen,
  onClose,
  currentStep,
  onNext,
  selectedReason,
  onSelectReason,
  canceledOrder,
}) {
  const [selectedMenus, setSelectedMenus] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setSelectedMenus([]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReasonSelect = (reason) => {
    if (selectedReason === reason) {
      // 이미 선택된 이유라면 해제
      onSelectReason(null);
    } else {
      // 이유 선택
      onSelectReason(reason);
    }
  };

  const handleMenuSelect = (menuName) => {
    console.log("클릭된 메뉴:", menuName);
    setSelectedMenus((prevSelectedMenus) => {
      if (prevSelectedMenus.includes(menuName)) {
        // 이미 선택된 메뉴라면 해제
        return prevSelectedMenus.filter((item) => item !== menuName);
      } else {
        // 메뉴 선택
        return [...prevSelectedMenus, menuName];
      }
    });
  };

  const isStep1ButtonActive = selectedReason;
  const isStep2ButtonActive = selectedMenus.length > 0;

  const handleNext = async () => {
    if (currentStep === 1) {
      if (selectedReason === "재료 소진") {
        onNext();
      } else if (
        selectedReason === "라스트오더 종료" ||
        selectedReason === "기타"
      ) {
        const cancelReason =
          selectedReason === "라스트오더 종료" ? "LAST_ORDER_ENDED" : "ETC";

        try {
          await apiClient.patch(
            `/stores/1/orders/${canceledOrder.orderId}/admin`,
            {
              cancelReason,
              soldOutMenu: null,
            }
          );

          onClose();
          window.location.reload();
        } catch (error) {
          console.error("주문 취소 오류:", error);
        }
      }
    } else if (currentStep === 2) {
      if (selectedReason === "재료 소진") {
        const soldOutMenu = selectedMenus.join(", ");

        try {
          await apiClient.patch(
            `/stores/1/orders/${canceledOrder.orderId}/admin`,
            {
              cancelReason: "OUT_OF_STOCK",
              soldOutMenu,
            }
          );

          onClose();
          window.location.reload();
        } catch (error) {
          console.error("주문 취소 오류:", error);
        }
      }
    }
  };

  return (
    <CancelModalContainer onClick={onClose}>
      <CancelModalWrap onClick={(e) => e.stopPropagation()}>
        <CancelModalContent>
          {currentStep === 1 && (
            <>
              <CancelText>취소하시려는 이유를 골라주세요.</CancelText>
              <CheckBoxWrap>
                <Checkbox
                  text="재료 소진"
                  onChange={() => handleReasonSelect("재료 소진")}
                  checked={selectedReason === "재료 소진"}
                />
                <Checkbox
                  text="라스트오더 종료"
                  onChange={() => handleReasonSelect("라스트오더 종료")}
                  checked={selectedReason === "라스트오더 종료"}
                />
                <Checkbox
                  text="기타"
                  onChange={() => handleReasonSelect("기타")}
                  checked={selectedReason === "기타"}
                />
              </CheckBoxWrap>
            </>
          )}
          {currentStep === 2 && selectedReason === "재료 소진" && (
            <>
              <SelectedTitle>재료 소진된 메뉴를 골라주세요.</SelectedTitle>
              <MenuContainer>
                {canceledOrder?.orderDetail.map((menu, index) => (
                  <MenuContentWrapper key={index}>
                    <MenuContent>
                      <CheckboxWrapper>
                        <Checkbox
                          text={menu.menuName}
                          onChange={() => handleMenuSelect(menu.menuName)}
                          checked={selectedMenus.includes(menu.menuName)}
                        />
                      </CheckboxWrapper>
                    </MenuContent>
                    <Line />
                  </MenuContentWrapper>
                ))}
              </MenuContainer>
            </>
          )}
        </CancelModalContent>
        <CancelBtnContainer>
          <CloseBtn onClick={onClose}>닫기</CloseBtn>
          <CancelBtn
            onClick={handleNext}
            active={
              currentStep === 1 ? isStep1ButtonActive : isStep2ButtonActive
            }
          >
            {currentStep === 1
              ? selectedReason === "재료 소진"
                ? "다음"
                : "완료"
              : "완료"}
          </CancelBtn>
        </CancelBtnContainer>
      </CancelModalWrap>
    </CancelModalContainer>
  );
}
