import React, { useState } from "react";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";
import { Container } from "../../styles/manager/suggestion.module";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "../../styles/pagination.module";

export default function PackagingPage() {
  // 임의로 지정
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

  return (
    <>
      <Header />
      <Container>
        {currentItems.map((num) => (
          <ContentBox key={num} number={num} />
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
    </>
  );
}
