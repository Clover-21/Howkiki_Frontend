import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SideBarContainer,
  SideBarLink,
  SideBarName,
  Count,
} from "../styles/sideBar.module";

export default function SideBar() {
  const [selectedBar, setSelectedBar] = useState("");
  const navigate = useNavigate();

  const handleClick = (bar, path) => {
    setSelectedBar(bar);
    navigate(path);
  };

  return (
    <SideBarContainer>
      <SideBarLink
        onClick={() => handleClick("접수대기", "/")}
        selected={selectedBar === "접수대기"}
      >
        <SideBarName>접수대기</SideBarName>
        <Count>1</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("처리중", "/preparing")}
        selected={selectedBar === "처리중"}
      >
        <SideBarName>처리중</SideBarName>
        <Count>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("완료", "/complete")}
        selected={selectedBar === "완료"}
      >
        <SideBarName>완료</SideBarName>
        <Count>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("주문조회", "/check")}
        selected={selectedBar === "주문조회"}
      >
        <SideBarName>주문조회</SideBarName>
      </SideBarLink>
    </SideBarContainer>
  );
}
