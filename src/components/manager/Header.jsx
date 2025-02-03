import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Category,
  CategoryName,
  Circle,
} from "../../styles/components/header.module";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);

  const handleClick = (path) => {
    setSelectedBar(path);
    navigate(path);
  };
  return (
    <HeaderContainer>
      <Category
        selected={
          selectedBar === "/waiting" ||
          selectedBar === "/preparing" ||
          selectedBar === "/readycomplete" ||
          selectedBar === "/paycomplete" ||
          selectedBar === "/fullorder"
        }
        onClick={() => handleClick("/waiting")}
      >
        <CategoryName
          selected={
            selectedBar === "/waiting" ||
            selectedBar === "/preparing" ||
            selectedBar === "/readycomplete" ||
            selectedBar === "/paycomplete" ||
            selectedBar === "/fullorder"
          }
        >
          주문 접수
        </CategoryName>
        {selectedBar === "/waiting" ||
        selectedBar === "/preparing" ||
        selectedBar === "/readycomplete" ||
        selectedBar === "/paycomplete" ||
        selectedBar === "/fullorder" ? (
          <Circle />
        ) : null}
      </Category>
      <Category onClick={() => handleClick("/tablemanage")}>
        <CategoryName selected={selectedBar === "/tablemanage"}>
          테이블
        </CategoryName>
        {selectedBar === "/tablemanage" ? <Circle /> : null}
      </Category>
      <Category onClick={() => handleClick("/packaging")}>
        <CategoryName selected={selectedBar === "/packaging"}>
          포장
        </CategoryName>
        {selectedBar === "/packaging" ? <Circle /> : null}
      </Category>
      <Category onClick={() => handleClick("/suggestion")}>
        <CategoryName selected={selectedBar === "/suggestion"}>
          건의 사항
        </CategoryName>
        {selectedBar === "/suggestion" ? <Circle /> : null}
      </Category>
    </HeaderContainer>
  );
}
