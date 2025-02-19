import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/manager/Header";
import PackageBox from "../../components/manager/PackageBox";
import PackageModal from "../../components/manager/PackageModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import {
  PckContainer,
  PckContent,
} from "../../styles/manager/suggestion.module";

const API_URL = process.env.REACT_APP_API_URL;

const host = window.location.hostname === "localhost" ? API_URL : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function PackagingPage() {
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [orderData, setOrderData] = useState([]);

  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(`/stores/1/orders/take-out`);
      setOrderData(response.data.data);
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    orderData,
    8
  );

  const handlePackageOrder = (order) => {
    setSelectedPackage(order);
    console.log(selectedPackage);
    setIsPackageModalOpen(true);
  };

  return (
    <>
      <Header />
      <PckContainer>
        <PckContent>
          {currentItems.map((order) => (
            <PackageBox
              key={order.orderId}
              number={order.orderId}
              onClick={() => handlePackageOrder(order)}
              data={order.orderDetail}
            />
          ))}
        </PckContent>
      </PckContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
      <PackageModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        data={selectedPackage}
      />
    </>
  );
}
