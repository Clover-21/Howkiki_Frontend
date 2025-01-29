import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../styles/components/contentBox.module";

export default function ContentBox({ number }) {
  return (
    <SuggestionWrap>
      <NumberContainer>
        <Number>{number}</Number>
      </NumberContainer>
      <ContentContainer>
        <ContentText></ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
