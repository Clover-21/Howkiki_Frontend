import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/manager/Header";
import SuggestionBox from "../../components/manager/SuggestionBox";
import SuggestionModal from "../../components/manager/SuggestionModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import { Container } from "../../styles/manager/suggestion.module";

const API_URL = process.env.REACT_APP_API_URL;

const host = window.location.hostname === "localhost" ? API_URL : "api";

export const apiClient = axios.create({
  baseURL: host,
});

export default function SuggestionPage() {
  const [suggestionData, setSuggestionData] = useState([]);
  const [isSugModalOpen, setIsSugModalOpen] = useState(false);

  const getOrderData = async () => {
    try {
      const response = await apiClient.get(`/stores/1/suggestions/all`);
      setSuggestionData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("건의 사항 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(
    suggestionData.length > 0 ? suggestionData : [],
    4
  );

  const handleSuggestion = () => {
    setIsSugModalOpen(true);
  };

  return (
    <>
      <Header />
      <Container>
        {currentItems.map((num) => (
          <SuggestionBox
            key={num}
            data={suggestionData}
            onClick={handleSuggestion}
          />
        ))}
      </Container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
      <SuggestionModal
        isOpen={isSugModalOpen}
        onClose={() => setIsSugModalOpen(false)}
        data={suggestionData}
      />
    </>
  );
}
