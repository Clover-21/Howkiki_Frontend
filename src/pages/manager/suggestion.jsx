import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/manager/Header";
import SuggestionBox from "../../components/manager/SuggestionBox";
import SuggestionModal from "../../components/manager/SuggestionModal";
import Pagination from "../../components/manager/Pagination";
import usePagination from "../../hooks/usePagination";
import { apiClient } from "../../api/apiClient";
import { Container } from "../../styles/manager/suggestion.module";

export default function SuggestionPage() {
  const { storeId } = useParams();
  const [suggestionData, setSuggestionData] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [isSugModalOpen, setIsSugModalOpen] = useState(false);

  // 건의사항 데이터 가져오기
  const getOrderData = async () => {
    try {
      const response = await apiClient.get(
        `/stores/${storeId}/suggestions/all`
      );
      setSuggestionData(response.data.data.suggestionList);
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

  const handleSuggestion = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setIsSugModalOpen(true);
  };

  return (
    <>
      <Header />
      <Container>
        {currentItems.map((item) => (
          <SuggestionBox
            key={item.suggestionId}
            num={item}
            onClick={() => handleSuggestion(item)}
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
        data={selectedSuggestion}
      />
    </>
  );
}
