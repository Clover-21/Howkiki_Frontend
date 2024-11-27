import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SideBarContainer,
  SideBarLink,
  SideBarName,
  Count,
} from "../styles/sideBar.module";

export default function SideBar() {
  const location = useLocation(); // 현재 경로 확인
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);

  const handleClick = (bar, path) => {
    setSelectedBar(path); // 경로로 상태 업데이트
    navigate(path); // 페이지 이동
  };

  return (
    <SideBarContainer>
      <SideBarLink
        onClick={() => handleClick("접수대기", "/")}
        selected={selectedBar === "/"}
      >
        <SideBarName selected={selectedBar === "/"}>접수대기</SideBarName>
        <Count selected={selectedBar === "/"}>10</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("처리중", "/preparing")}
        selected={selectedBar === "/preparing"}
      >
        <SideBarName selected={selectedBar === "/preparing"}>
          처리중
        </SideBarName>
        <Count selected={selectedBar === "/preparing"}>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("완료", "/complete")}
        selected={selectedBar === "/complete"}
      >
        <SideBarName selected={selectedBar === "/complete"}>완료</SideBarName>
        <Count selected={selectedBar === "/complete"}>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("주문조회", "/check")}
        selected={selectedBar === "/check"}
      >
        <SideBarName selected={selectedBar === "/check"}>주문조회</SideBarName>
      </SideBarLink>
    </SideBarContainer>
  );
}
