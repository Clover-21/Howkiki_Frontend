import React from "react";
import {
  SuggestionWrap,
  NumberContainer,
  Number,
  ContentContainer,
  ContentText,
  MenuContainer,
  MenuName,
  MenuQuantity,
} from "../../styles/components/packageBox.module";

export default function ContentBox({ number, onClick, data }) {
  return (
    <SuggestionWrap onClick={onClick}>
      <ContentContainer>
        <NumberContainer>
          <Number>{number}</Number>
        </NumberContainer>
        <ContentText>
          {data.map((order, i) => (
            <MenuContainer key={i}>
              <MenuName>{order.menuName}</MenuName>
              <MenuQuantity>{order.quantity}</MenuQuantity>
            </MenuContainer>
          ))}
        </ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
