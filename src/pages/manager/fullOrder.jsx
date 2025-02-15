import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/manager/Header";
import SideBar from "../../components/manager/SideBar";
import OrderDetailModal from "../../components/manager/OrderDetailModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import ClipLoader from "react-spinners/ClipLoader";
import useSSE from "../../hooks/useSSE";
import NotificationModal from "../../components/NotificationModal";
import {
  ListContainer,
  OrderContainer,
  OrderContent,
  MenuContainer,
  MenuContent,
  TableNum,
  MenuName,
  MenuQuantity,
  MoreOrders,
} from "../../styles/manager/orderWaiting.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#7878F0",
  borderWidth: "6px",
};

export default function PayCompletePage() {
  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(null);

  const numbers = orderData?.data || [];
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    numbers,
    8
  );

  const { notice, isOpen, setIsOpen } = useSSE(token);

  // 주문 데이터 가져오기 함수
  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(`/stores/1/orders/all`);
      const sortedOrders = response.data.data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setOrderData({ ...response.data, data: sortedOrders });
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetchOrderData();

    const storedToken = localStorage.getItem("adminToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <Header />
      <ListContainer>
        <SideBar />
        <OrderContainer>
          {isLoading ? (
            <ClipLoader
              color="#fff"
              loading={isLoading}
              cssOverride={override}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            currentItems.map((order, i) => (
              <OrderContent key={i} onClick={() => handleOrderClick(order)}>
                <TableNum>{order.tableNumber}번</TableNum>
                <MenuContainer>
                  {order.orderDetail?.map((menu, i) => (
                    <MenuContent key={i}>
                      <MenuName>{menu.menuName}</MenuName>
                      <MenuQuantity>{menu.quantity}</MenuQuantity>
                    </MenuContent>
                  ))}
                  {order.orderDetail.length > 4 && (
                    <MoreOrders>
                      +외 {order.orderDetail.length - 4}개
                    </MoreOrders>
                  )}
                </MenuContainer>
              </OrderContent>
            ))
          )}
        </OrderContainer>
      </ListContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
      <OrderDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        selectedOrder={selectedOrder}
      />
      <NotificationModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        notice={notice}
      />
    </>
  );
}
