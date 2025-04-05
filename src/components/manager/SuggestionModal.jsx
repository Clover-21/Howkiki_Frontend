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

export default function SuggestionModal({ isOpen, onClose, data }) {
  const { storeId } = useParams();
  const [sugDetail, setSugDetail] = useState(null);

  useEffect(() => {
    if (!isOpen || !data?.suggestionId) {
      return;
    }

    const getSuggestion = async () => {
      try {
        const response = await apiClient.get(
          `/stores/${storeId}/suggestions/${data.suggestionId}`
        );
        setSugDetail(response.data.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
        setSugDetail(null);
      }
    };

    getSuggestion();
  }, [isOpen, data?.suggestionId]);

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
