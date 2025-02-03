import React from "react";
import {
  PaginationContainer,
  PageButton,
  PageNumber,
} from "../../styles/pagination.module";

export default function Pagination({ currentPage, totalPages, goToPage }) {
  return (
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
  );
}
