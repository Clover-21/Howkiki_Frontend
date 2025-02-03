import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../../styles/components/suggestionBox.module";

export default function ContentBox({ number, onClick }) {
  return (
    <SuggestionWrap onClick={onClick}>
      <NumberContainer>
        <Number>{number}</Number>
      </NumberContainer>
      <ContentContainer>
        <ContentText></ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
