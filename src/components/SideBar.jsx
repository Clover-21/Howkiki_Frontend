import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SideBarContainer,
  SideBarLink,
  SideBarName,
  Count,
} from "../styles/sideBar.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function SideBar() {
  const location = useLocation(); // 현재 경로 확인
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);
  const [waitingCount, setWaitingCount] = useState(0);
  const [preparingCount, setPreparingCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);

  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/stores/1/orders`);
      console.log(response.data);
      const pendingOrders = response.data.data.orders.filter(
        (order) => order.status === "PENDING"
      );
      setWaitingCount(pendingOrders.length);
    } catch (error) {
      console.error("주문 데이터 실패:", error);
    }
  };
  useEffect(() => {
    // 첫 번째 호출
    fetchOrderData();

    // 5초마다 폴링
    const interval = setInterval(fetchOrderData, 5000);

    // 컴포넌트가 unmount 될 때 폴링 정리
    return () => clearInterval(interval);
  }, []); // 빈 배열을 사용하여 최초 렌더링 때만 실행

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
        <Count selected={selectedBar === "/preparing"}>{preparingCount}</Count>
      </SideBarLink>
      <SideBarLink
        onClick={() => handleClick("/complete")}
        selected={selectedBar === "/complete"}
      >
        <SideBarName selected={selectedBar === "/complete"}>완료</SideBarName>
        <Count selected={selectedBar === "/complete"}>{completeCount}</Count>
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
