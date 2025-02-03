import React, { useState } from "react";
import Header from "../../components/manager/Header";
import ContentBox from "../../components/manager/PackageBox";
import PackageModal from "../../components/manager/PackageModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import {
  PckContainer,
  PckContent,
} from "../../styles/manager/suggestion.module";

export default function PackagingPage() {
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numbers = [1, 2, 3, 4, 5, 6];
  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    numbers,
    8
  );

  const handlePackageOrder = (number) => {
    setSelectedNumber(number); // 클릭된 패키지 정보 저장
    setIsPackageModalOpen(true); // 모달 열기
  };

  return (
    <>
      <Header />
      <PckContainer>
        <PckContent>
          {currentItems.map((num) => (
            <ContentBox
              key={num}
              number={num}
              onClick={() => handlePackageOrder(num)}
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
        number={selectedNumber}
      />
    </>
  );
}
