import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {
  ListContainer,
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
  ModalText,
  CancelModalContainer,
  CancelModal,
  CancelModalContent,
  CancelBtnContainer,
  CancelBtn,
} from "../styles/orderWaiting.module";
import useModal from "../hooks/useModal";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

const getPreviousData = () => {
  const storedData = localStorage.getItem("previousData");
  return storedData ? JSON.parse(storedData) : null;
};

export default function OrderWaitingPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const [orderData, setOrderData] = useState(null);
  const [previousData, setPreviousData] = useState(getPreviousData);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const intervalRef = useRef(null);

  // 주문 목록을 가져오는 함수
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/stores/1/orders`);
      const currentData = response.data;

      // localStorage에서 이전 데이터 가져오기
      const storedPreviousData = localStorage.getItem("previousData");
      const parsedPreviousData = storedPreviousData
        ? JSON.parse(storedPreviousData)
        : null;

      if (!parsedPreviousData) {
        console.log("이전 데이터가 없습니다. 첫 번째 호출입니다.");
      } else {
        const currentOrderIds = currentData.data.orders.map(
          (order) => order.id
        );
        const previousOrderIds = parsedPreviousData.data.orders.map(
          (order) => order.id
        );

        if (
          currentOrderIds.length > previousOrderIds.length ||
          !currentOrderIds.every((id) => previousOrderIds.includes(id))
        ) {
          console.log("새로운 주문이 감지됨: 모달 열림");
          openModal();
        }
      }

      // 주문 목록 최신순으로 정렬 (createdAt 기준)
      const sortedOrders = [...currentData.data.orders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      // 데이터 업데이트
      setOrderData({
        ...currentData,
        data: { ...currentData.data, orders: sortedOrders },
      });
      setPreviousData(currentData); // 상태로도 업데이트
      localStorage.setItem("previousData", JSON.stringify(currentData)); // localStorage 업데이트
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

  useEffect(() => {
    if (previousData) {
      localStorage.setItem("previousData", JSON.stringify(previousData));
    }
  }, [previousData]);

  useEffect(() => {
    console.log("모달 상태 변화:", isOpen);
  }, [isOpen]);

  const handleCancelClick = () => {
    setIsCancelModalOpen(true); // 취소 모달 열기
  };

  return (
    <>
      <Header />
      <ListContainer>
        <SideBar />
        <MenuListWrap>
          <OrderContainer>
            {orderData?.data.orders &&
              orderData.data.orders.map((order, i) => (
                <OrderContent key={i}>
                  <TableNum>{order.tableNumber}번</TableNum>
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
                    <OrderCancelBtn onClick={handleCancelClick}>
                      취소
                    </OrderCancelBtn>
                    <OrderOkBtn>수락</OrderOkBtn>
                  </BtnContainer>
                </OrderContent>
              ))}
          </OrderContainer>
        </MenuListWrap>
      </ListContainer>
      {isCancelModalOpen && (
        <CancelModalContainer>
          <CancelModal>
            <CancelModalContent>
              취소하시려는 이유를 골라주세요.
            </CancelModalContent>
            <CancelBtnContainer>
              <CancelBtn
                selected="close"
                onClick={() => setIsCancelModalOpen(false)}
              >
                닫기
              </CancelBtn>
              <CancelBtn selected="next">다음</CancelBtn>
            </CancelBtnContainer>
          </CancelModal>
        </CancelModalContainer>
      )}
      {isOpen && (
        <ModalContainer>
          <Modal>
            <ModalContent>
              <ModalText>새로운 주문</ModalText>이 도착하였습니다!
            </ModalContent>
            <Button onClick={closeModal}>주문확인</Button>
          </Modal>
        </ModalContainer>
      )}
    </>
  );
}
