import React, { useState } from "react";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";
import PackageModal from "../../components/PackageModal";
import { Container } from "../../styles/manager/suggestion.module";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "../../styles/pagination.module";

export default function PackagingPage() {
  const [isPackageModalOpen, setIsPackageModalOpen] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null); // 선택된 번호 상태 추가

  // 임의로 지정된 번호
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 4;

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

  const handlePackageOrder = (number) => {
    setSelectedNumber(number); // 클릭된 번호를 상태에 저장
    setIsPackageModalOpen(true); // 모달 열기
  };

  return (
    <>
      <Header />
      <Container>
        {currentItems.map((num) => (
          <ContentBox
            key={num}
            number={num}
            onClick={() => handlePackageOrder(num)} // 클릭 시 해당 번호 전달
          />
        ))}
      </Container>
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
      <PackageModal
        isOpen={isPackageModalOpen}
        onClose={() => setIsPackageModalOpen(false)}
        number={selectedNumber} // 선택된 번호를 PackageModal로 전달
      />
    </>
  );
}
