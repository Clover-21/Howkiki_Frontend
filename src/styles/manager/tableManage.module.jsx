import styled from "styled-components";

export const TableBoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 0;
  padding-top: 170px;
  justify-content: center;
  place-items: center;
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 253.66px;
  height: 231.33px;
  border-radius: 24.27px;
  font-size: 20.63px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MoreOrders = styled.div`
  font-size: 13.35px;
  color: #888888;
  margin-top: 10px;
`;

export const HasOrderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;
  height: 145px;
`;

export const HasOrderTableNum = styled.div`
  font-weight: 600;
  color: #000000;
  align-self: center;
`;

export const TableNum = styled.div`
  font-weight: 600;
  color: #bcbcbc;
  align-self: center;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
  font-size: 14.56px;
  margin-top: 15px;
`;

export const MenuName = styled.div``;

export const Quantity = styled.div``;

export const Line = styled.div`
  width: 88%;
  height: 1px;
  background-color: #cdcdcd;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const EmptyText = styled.div`
  font-size: 13.35px;
  color: #888888;
  margin-top: 10px;
`;

export const TotalPriceWrapper = styled.div`
  margin-right: 20px;
  margin-top: 10px;
  align-self: flex-end;
`;

export const TotalPrice = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #888888;
`;

export const PeopleNum = styled.div`
  color: #bcbcbc;
  margin-top: 15px;
`;
