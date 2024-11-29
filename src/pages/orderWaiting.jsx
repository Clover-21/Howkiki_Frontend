import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  CategoryBar,
  CategoryBox1,
  ListContainer,
  MenuList,
  MenuListWrap,
  OrderContainer,
  OrderContent,
  MenuContainer,
  MenuContent,
  TableNum,
  MenuName,
  MenuQuantity,
  BtnContainer,
  OrderOkBtn,
  OrderCancelBtn,
  ModalContainer,
  Modal,
  Button,
  ModalContent,
} from "../styles/main.module";
import useModal from "../hooks/useModal";
import Line from "../components/Line";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function OrderWaitingPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const [orderData, setOrderData] = useState(null);
  const [previousData, setPreviousData] = useState(null);
  const intervalRef = useRef(null);

  // 주문 목록을 가져오는 함수
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`${host}/stores/1/orders`);
      const currentData = response.data;

      // 이전 데이터와 비교
      if (previousData) {
        const currentOrderIds = currentData.data.orders.map(
          (order) => order.id
        );
        const previousOrderIds = previousData.data.orders.map(
          (order) => order.id
        );

        // 새로운 주문이 추가된 경우 모달 열기
        if (
          currentOrderIds.length > previousOrderIds.length || //이전 상태 그대로에서 추가된 경우
          !currentOrderIds.every((id) => previousOrderIds.includes(id)) //이전 상태에서 없던 것이 추가된 경우(원래 있던 거에서 빠진 게 존재할 수도 있음)
        ) {
          openModal();
        }
      }

      // 데이터 업데이트
      setOrderData(currentData);
      setPreviousData(currentData);
      localStorage.setItem("previousData", JSON.stringify(currentData));
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    }
  };

  // 주기적으로 데이터 가져오기
  useEffect(() => {
    fetchOrderData();
    intervalRef.current = setInterval(fetchOrderData, 5000); // 5초마다 데이터 가져오기

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <Header />
      <CategoryBar>
        <CategoryBox1>주문접수</CategoryBox1>
      </CategoryBar>
      <ListContainer>
        <SideBar />
        <MenuListWrap>
          <MenuList>주문 목록</MenuList>
          <OrderContainer>
            {orderData?.data.orders &&
              orderData.data.orders.map((order, i) => (
                <OrderContent key={i}>
                  <TableNum>테이블{order.tableNumber}</TableNum>
                  <MenuContainer>
                    {order.menuSummary &&
                      order.menuSummary.map((menu, i) => (
                        <MenuContent key={i}>
                          <MenuName>{menu.menuName}</MenuName>
                          <MenuQuantity>{menu.quantity}</MenuQuantity>
                        </MenuContent>
                      ))}
                  </MenuContainer>
                  <BtnContainer>
                    <OrderOkBtn>주문수락</OrderOkBtn>
                    <OrderCancelBtn>주문취소</OrderCancelBtn>
                  </BtnContainer>
                  <Line />
                </OrderContent>
              ))}
          </OrderContainer>
        </MenuListWrap>
      </ListContainer>
      {isOpen && (
        <ModalContainer>
          <Modal>
            <ModalContent>새로운 주문이 도착하였습니다!</ModalContent>
            <Button onClick={closeModal}>주문확인</Button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}
