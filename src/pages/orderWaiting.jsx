import React, { useState, useEffect } from "react";
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

export default function OrderWaitingPage() {
  const { isOpen, openModal, closeModal } = useModal();
  const [orderData, setOrderData] = useState(null);
  /*const [orderDetail, setOrderDetail] = useState(null);*/

  // 주문 목록을 가져오는 함수
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/stores/1/orders`);
      console.log(response.data);
      setOrderData(response.data);
      openModal();
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    }
  };
  /*
  // 주문 상세 데이터를 가져오는 함수
  const fetchOrderDetail = async (orderId) => {
    try {
      const response = await axios.get(
        `http://15.164.233.144:8080/stores/${storeId}/orders/${orderId}`
      );
      setOrderDetail(response.data);
    } catch (error) {
      console.error("주문 상세 가져오기 실패:", error);
    }
  };
*/
  useEffect(() => {
    fetchOrderData();
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
      {isOpen && orderData && (
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
