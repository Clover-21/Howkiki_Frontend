import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import useModal from "../../hooks/useModal";
import CancelModal from "../../components/CancelModal";
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
} from "../../styles/manager/orderWaiting.module";

const host =
  window.location.hostname === "localhost"
    ? "http://15.164.233.144:8080"
    : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function OrderPreparingPage() {
  const [orderData, setOrderData] = useState(null);
  const [canceldOrder, setCanceledOrder] = useState(null);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReason, setSelectedReason] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleFinish = async (order, status) => {
    const orderId = order.orderId;
    try {
      await axios.patch(
        `${host}/stores/1/orders/${orderId}/status`,
        {
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/readycomplete");
    } catch (error) {
      console.error("상태 업데이트 중 에러 발생:", error);
    }
  };

  // 주문 데이터 가져오기 함수
  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(
        `${host}/stores/1/orders?status=COMPLETED`
      );
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

  return (
    <>
      <Header />
      <ListContainer>
        <SideBar />
        <OrderContainer>
          {orderData?.data.orders?.length > 0 ? (
            orderData.data.orders.map((order, i) => (
              <OrderContent key={i}>
                <TableNum>{order.tableNumber}번</TableNum>
                <MenuContainer>
                  {order.menuSummary?.map((menu, i) => (
                    <MenuContent key={i}>
                      <MenuName>{menu.menuName}</MenuName>
                      <MenuQuantity>{menu.quantity}</MenuQuantity>
                    </MenuContent>
                  ))}
                </MenuContainer>
                <BtnContainer>
                  <OrderCancelBtn onClick={() => handleCancelClick(order)}>
                    취소
                  </OrderCancelBtn>
                  <OrderOkBtn onClick={() => handleFinish("COMPLETED")}>
                    수락
                  </OrderOkBtn>
                </BtnContainer>
              </OrderContent>
            ))
          ) : (
            <div>주문이 없습니다.</div>
          )}
        </OrderContainer>
      </ListContainer>
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
