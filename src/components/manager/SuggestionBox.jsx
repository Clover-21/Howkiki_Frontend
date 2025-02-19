import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../../styles/components/suggestionBox.module";

export default function SuggestionBox({ data, onClick }) {
  const sugData = data.suggestionList;

  return (
    <SuggestionWrap onClick={onClick}>
      <NumberContainer>
        <Number>{sugData.suggestionId}</Number>
      </NumberContainer>
      <ContentContainer>
        <ContentText>{sugData.content}</ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
