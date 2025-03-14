import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/manager/Header";
import SideBar from "../../components/manager/SideBar";
import OrderDetailModal from "../../components/manager/OrderDetailModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import ClipLoader from "react-spinners/ClipLoader";
import { apiClient } from "../../api/apiClient";
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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#7878F0",
  borderWidth: "6px",
};

const API_URL = process.env.REACT_APP_HTTPS_URL;

export default function FullOrderPage() {
  const { storeId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 850) {
        setItemsPerPage(2);
      } else if (window.innerWidth <= 1120) {
        setItemsPerPage(4);
      } else if (window.innerWidth <= 1400) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    orderData?.data || [],
    itemsPerPage
  );

  // 주문 데이터 가져오기 함수
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(`/stores/${storeId}/orders/all`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });

      // response.data.data가 없으면 빈 배열로 설정
      const orders = response.data.data || [];

      const sortedOrders = orders.sort((a, b) => {
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

  useEffect(() => {
    fetchOrderData();
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
                  {order.orderDetail.slice(0, 5)?.map((menu, i) => (
                    <MenuContent key={i}>
                      <MenuName>{menu.menuName}</MenuName>
                      <MenuQuantity>{menu.quantity}</MenuQuantity>
                    </MenuContent>
                  ))}
                  {order.orderDetail.length > 5 && (
                    <MoreOrders>
                      +외 {order.orderDetail.length - 5}개
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
    </>
  );
}
