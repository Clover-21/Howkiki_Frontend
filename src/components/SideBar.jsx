import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [waitingCount, setWaitingCount] = useState(0);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/stores/1/orders`);
      const pendingOrders = response.data.filter(
        (order) => order.status === "PENDING"
      );
      setWaitingCount(pendingOrders.length);
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const handleClick = (path) => {
    setSelectedBar(path);
    navigate(path);
  };

  return (
    <SideBarContainer>
      <SideBarLink
        onClick={() => handleClick("/")}
        selected={selectedBar === "/"}
      >
        <SideBarName selected={selectedBar === "/"}>접수대기</SideBarName>
        <Count selected={selectedBar === "/"}>{waitingCount}</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("/preparing")}
        selected={selectedBar === "/preparing"}
      >
        <SideBarName selected={selectedBar === "/preparing"}>
          처리중
        </SideBarName>
        <Count selected={selectedBar === "/preparing"}>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("/complete")}
        selected={selectedBar === "/complete"}
      >
        <SideBarName selected={selectedBar === "/complete"}>완료</SideBarName>
        <Count selected={selectedBar === "/complete"}>3</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("/check")}
        selected={selectedBar === "/check"}
      >
        <SideBarName selected={selectedBar === "/check"}>주문조회</SideBarName>
      </SideBarLink>
    </SideBarContainer>
  );
}
