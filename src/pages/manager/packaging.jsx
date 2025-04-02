import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/manager/Header";
import PackageBox from "../../components/manager/PackageBox";
import PackageModal from "../../components/manager/PackageModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import { apiClient } from "../../api/apiClient";
import {
  PckContainer,
  PckContent,
} from "../../styles/manager/suggestion.module";

export default function PackagingPage() {
  const { storeId } = useParams();
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [orderData, setOrderData] = useState([]);
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

  const fetchOrderData = async () => {
    try {
      const response = await apiClient.get(
        `/stores/${storeId}/orders/take-out`
      );
      setOrderData(response.data.data ?? []);
    } catch (error) {
      console.error("주문 데이터 가져오기 실패:", error);
      setOrderData([]);
    }
  };

  useEffect(() => {
    if (storeId) {
      fetchOrderData();
    }
  }, [storeId]);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    orderData,
    itemsPerPage
  );

  const handlePackageOrder = (order) => {
    setSelectedPackage(order);
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
