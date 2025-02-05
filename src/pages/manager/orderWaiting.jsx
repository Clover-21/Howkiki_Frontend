import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/manager/Header";
import SideBar from "../../components/manager/SideBar";
import useModal from "../../hooks/useModal";
import OrderDetailModal from "../../components/manager/OrderDetailModal";
import CancelModal from "../../components/manager/CancelModal";
import AcceptModal from "../../components/manager/AcceptModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import ClipLoader from "react-spinners/ClipLoader";
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
  TableDataWrap,
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

export default function OrderWaitingPage() {
  const { isOpen } = useModal();
  const [orderData, setOrderData] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [canceldOrder, setCanceledOrder] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState("");
  const [isAcceptModalOpen, setIsAcceptlModalOpen] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const numbers = orderData?.data || [];
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    numbers,
    8
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

  const handleAcceptClick = (order) => {
    const orderId = order.orderId;
    setSelectedOrderId(orderId);
    setIsAcceptlModalOpen(true);
    setCurrentStep(1);
  };

  const handleEtcClick = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    }
  };

  const handleFinish = async () => {
    const orderId = selectedOrderId;
    try {
      await apiClient.patch(
        `/stores/1/orders/${orderId}/status?orderStatus=IN_PROGRESS`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/preparing");
    } catch (error) {
      console.error("상태 업데이트 중 에러 발생:", error);
    }
  };

  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(
        `/stores/1/orders?status=AWAITING_ACCEPTANCE`
      );
      console.log(response.data);
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

  useEffect(() => {
    console.log("모달 상태 변화:", isOpen);
  }, [isOpen]);

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
                      handleAcceptClick(order);
                    }}
                  >
                    수락
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
      <AcceptModal
        isOpen={isAcceptModalOpen}
        onClose={() => setIsAcceptlModalOpen(false)}
        currentStep={currentStep}
        onNext={handleEtcClick}
        onFinish={() => handleFinish("IN_PROGRESS")}
      />
    </>
  );
}
