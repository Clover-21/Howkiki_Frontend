import styled from "styled-components";

export const SuggestionWrap = styled.div``;

export const ContentContainer = styled.div`
  position: relative;
  width: 258px;
  height: 284px;
  border-radius: 24px;
  padding: 25px;
  background-color: #ffffff;
`;

export const NumberContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 51px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  background-color: #53e1b9;
`;

export const Number = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;
`;

export const ContentText = styled.div`
  width: 100%;
  height: 233px;
  margin-top: 51px;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14.56px;
  margin-bottom: 10px;
`;

export const MenuName = styled.div``;

export const MenuQuantity = styled.div``;

export const MoreOrders = styled.div`
  font-size: 14px;
  color: #888888;
`;
