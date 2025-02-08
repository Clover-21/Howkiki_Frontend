import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../../styles/components/packageBox.module";

export default function ContentBox({ number, onClick }) {
  return (
    <SuggestionWrap onClick={onClick}>
      <ContentContainer>
        <NumberContainer>
          <Number>{number}</Number>
        </NumberContainer>
        <ContentText></ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
