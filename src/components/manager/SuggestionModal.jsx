import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../api/apiClient";
import {
  ModalContainer,
  Modal,
  SuggestionContainer,
  BtnContainer,
  FinishBtn,
} from "../../styles/components/suggestionModal.module";

export default function PackageModal({ isOpen, onClose, data }) {
  const { storeId } = useParams();
  const [sugDetail, setSugDetail] = useState(null);

  useEffect(() => {
    if (!isOpen || !data?.suggestionList?.suggestionId) return;

    const getSuggestion = async () => {
      try {
        const response = await apiClient.get(
          `/stores/${storeId}/suggestions/${data.suggestionList.suggestionId}`
        );
        setSugDetail(response.data);
      } catch (error) {
        console.error("테이블 주문 데이터 가져오기 실패:", error);
        setSugDetail(null);
      }
    };
    getSuggestion();
  }, [isOpen, data]);

  if (!isOpen || !sugDetail) return null;

  return (
    <ModalContainer>
      <Modal>
        <SuggestionContainer>{sugDetail?.content}</SuggestionContainer>
        <BtnContainer>
          <FinishBtn onClick={onClose}>닫기</FinishBtn>
        </BtnContainer>
      </Modal>
    </ModalContainer>
  );
}
