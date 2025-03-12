import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../../styles/components/suggestionBox.module";

export default function SuggestionBox({ num, onClick }) {
  if (!num) return null;

  return (
    <SuggestionWrap onClick={onClick}>
      <NumberContainer>
        <Number>{num.suggestionId}</Number>
      </NumberContainer>
      <ContentContainer>
        <ContentText>{num.content}</ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
