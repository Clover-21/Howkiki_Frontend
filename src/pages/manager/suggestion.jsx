import React from "react";
import Header from "../../components/Header";
import {
  SuggestionContainer,
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
} from "../../styles/manager/suggestion.module";

export default function SuggestionPage() {
  return (
    <>
      <Header />
      <SuggestionContainer>
        <SuggestionWrap>
          <NumberContainer>
            <Number>1</Number>
          </NumberContainer>
          <ContentContainer>
            <ContentText></ContentText>
          </ContentContainer>
        </SuggestionWrap>
      </SuggestionContainer>
    </>
  );
}
