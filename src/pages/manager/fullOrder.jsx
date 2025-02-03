import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import {
  ListContainer,
  OrderContainer,
  OrderContent,
  MenuContainer,
  MenuContent,
  TableNum,
  MenuName,
  MenuQuantity,
} from "../../styles/manager/orderWaiting.module";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "../../styles/pagination.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function PayCompletePage() {
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // 주문 데이터 가져오기 함수
  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(`${host}/stores/1/orders/all`);
      setOrderData(response.data);
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  // pagination 관련 변수
  const itemsPerPage = 8;
  const numbers = orderData?.data || [];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(numbers.length / itemsPerPage);

  const currentItems = numbers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header />
      <ListContainer>
        <SideBar />
        <OrderContainer>
          {numbers.length > 0 ? (
            currentItems.map((order, i) => (
              <OrderContent key={i}>
                <TableNum>{order.tableNumber}번</TableNum>
                <MenuContainer>
                  {order.orderDetail?.map((menu, i) => (
                    <MenuContent key={i}>
                      <MenuName>{menu.menuName}</MenuName>
                      <MenuQuantity>{menu.quantity}</MenuQuantity>
                    </MenuContent>
                  ))}
                </MenuContainer>
              </OrderContent>
            ))
          ) : (
            <div>주문이 없습니다.</div>
          )}
        </OrderContainer>
        <PaginationContainer>
          <PageButton
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            {"<"}
          </PageButton>
          <PageNumber>{currentPage}</PageNumber>
          <PageButton
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            {">"}
          </PageButton>
        </PaginationContainer>
      </ListContainer>
    </>
  );
}
