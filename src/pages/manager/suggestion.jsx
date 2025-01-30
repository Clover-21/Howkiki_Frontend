import React, { useState } from "react";
import Header from "../../components/Header";
import ContentBox from "../../components/ContentBox";
import SuggestionModal from "../../components/SuggestionModal";
import { Container } from "../../styles/manager/suggestion.module";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "../../styles/pagination.module";

export default function SuggestionPage() {
  const [isSugModalOpen, setIsSugModalOpen] = useState(false);
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

  const handleSuggestion = () => {
    setIsSugModalOpen(true);
  };

  return (
    <>
      <Header />
      <Container>
        {currentItems.map((num) => (
          <ContentBox key={num} number={num} onClick={handleSuggestion} />
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
      <SuggestionModal
        isOpen={isSugModalOpen}
        onClose={() => setIsSugModalOpen(false)}
      />
    </>
  );
}
