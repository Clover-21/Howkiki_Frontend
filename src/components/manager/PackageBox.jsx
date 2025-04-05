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
  MoreOrders,
} from "../../styles/components/packageBox.module";

export default function PackageBox({ number, onClick, data }) {
  return (
    <SuggestionWrap onClick={onClick}>
      <ContentContainer>
        <NumberContainer>
          <Number>{number}</Number>
        </NumberContainer>
        <ContentText>
          {data.slice(0, 5)?.map((order, i) => (
            <MenuContainer key={i}>
              <MenuName>{order.menuName}</MenuName>
              <MenuQuantity>{order.quantity}</MenuQuantity>
            </MenuContainer>
          ))}
          {data.length > 5 && <MoreOrders>+외 {data.length - 5}개</MoreOrders>}
        </ContentText>
      </ContentContainer>
    </SuggestionWrap>
  );
}
