import React from "react";
import {
  OrderBoxContainer,
  ContentWrap,
  TableNum,
  Text,
  Line,
  MenuContainer,
  MenuContent,
  MenuName,
  MenuCount,
  TotalPrice,
  Price,
  BtnWrap,
  CancelBtn,
} from "../styles/components/orderBox.module";

const StatusBar = () => {
  // API 연결하면, map 함수 사용할 예정
  return (
    <OrderBoxContainer>
      <ContentWrap>
        <TableNum>테이블 5번</TableNum>
        <Text>주문 내역</Text>
        <Line />
        <MenuContainer>
          <MenuContent>
            <MenuName>라구짜장과 계란튀김</MenuName>
            <MenuCount>1</MenuCount>
          </MenuContent>
          <MenuContent>
            <MenuName>소롱포</MenuName>
            <MenuCount>1</MenuCount>
          </MenuContent>
        </MenuContainer>
        <Line />
        <TotalPrice>
          <Price>22,500원</Price>
        </TotalPrice>
        <BtnWrap>
          <CancelBtn>주문 취소</CancelBtn>
        </BtnWrap>
      </ContentWrap>
    </OrderBoxContainer>
  );
};

export default StatusBar;
