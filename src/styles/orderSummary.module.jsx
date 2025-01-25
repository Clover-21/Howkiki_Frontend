import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 390px;
  height: 844px;
  position: relative;
  background-color: rgba(83, 225, 185);
`;

export const SummaryContentWrap = styled.div`
  width: 390px;
  height: 727px;
  position: absolute;
  bottom: 0;
  border-radius: 63px 63px 0 0;
  background-color: #ffffff;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const OrderBox = styled.div`
  width: 244px;
  height: 304px;
  border-radius: 17px;
  background-color: #f2f2f5;
  margin: 15px 0 166px 0;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
`;

export const IconWrap = styled.div`
  width: 390px;
  display: flex;
  flex-direction: flex-start;
  padding-left: 40px;
`;

export const ChatIcon = styled.img`
  width: 55px;
`;
