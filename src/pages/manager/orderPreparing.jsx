import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/manager/Header";
import SideBar from "../../components/manager/SideBar";
import CancelModal from "../../components/manager/CancelModal";
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
  BtnContainer,
  OrderOkBtn,
  OrderCancelBtn,
  MoreOrders,
} from "../../styles/manager/orderWaiting.module";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "#7878F0",
  borderWidth: "6px",
};

export default function OrderPreparingPage() {
  const { storeId } = useParams();
  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [canceldOrder, setCanceledOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setIsDetailModalOpen(true);
  };

  const handleCancelClick = (order) => {
    setCanceledOrder(order);
    setIsCancelModalOpen(true);
    setCurrentStep(1);
    setSelectedReason("");
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (selectedReason !== "재료 소진") {
        return;
      }
      setCurrentStep(2);
    } else {
      setIsCancelModalOpen(false);
    }
  };

  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
  };

  const handleFinish = async (order) => {
    const orderId = order.orderId;
    try {
      await apiClient.patch(
        `/stores/${storeId}/orders/${orderId}/status?orderStatus=COMPLETED`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  // 주문 데이터 가져오기 함수
  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(
        `/stores/${storeId}/orders?status=IN_PROGRESS`
      );
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
                  {order.orderDetail?.slice(0, 3).map((menu, i) => (
                    <MenuContent key={i}>
                      <MenuName>{menu.menuName}</MenuName>
                      <MenuQuantity>{menu.quantity}</MenuQuantity>
                    </MenuContent>
                  ))}
                  {order.orderDetail.length > 3 && (
                    <MoreOrders>
                      +외 {order.orderDetail.length - 3}개
                    </MoreOrders>
                  )}
                </MenuContainer>
                <BtnContainer>
                  <OrderCancelBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancelClick(order);
                    }}
                  >
                    취소
                  </OrderCancelBtn>
                  <OrderOkBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFinish(order, "COMPLETED");
                      window.location.reload();
                    }}
                  >
                    완료
                  </OrderOkBtn>
                </BtnContainer>
              </OrderContent>
            ))
          )}
        </OrderContainer>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPage={goToPage}
        />
      </ListContainer>
      <OrderDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        selectedOrder={selectedOrder}
      />
      <CancelModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        currentStep={currentStep}
        onNext={handleNextStep}
        selectedReason={selectedReason}
        onSelectReason={handleSelectReason}
        canceledOrder={canceldOrder}
      />
    </>
  );
}
