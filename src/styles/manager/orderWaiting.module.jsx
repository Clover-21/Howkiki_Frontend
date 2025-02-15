import styled from "styled-components";

export const ListContainer = styled.div`
  width: calc(100% - 253px);
  height: calc(100% - 120px);
  margin-top: 120px;
  margin-left: 253px;
  padding-top: 35px;
  padding-left: 2.5%;
  padding-right: 2.5%;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const OrderContent = styled.div`
  position: relative;
  background-color: white;
  width: calc(25% - 20px);
  width: 269.79px;
  height: 291.64px;
  border-radius: 28.5px;
  padding: 25px;
`;

export const OrderTitle = styled.div``;

export const MenuContainer = styled.div``;

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const TableNum = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 18px;
`;
export const OrderedMenu = styled.div``;

export const MenuName = styled.div`
  margin-bottom: 5px;
`;
export const MenuQuantity = styled.div`
  margin-left: 10px;
`;
export const BtnContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const OrderCancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 49px;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  background-color: #d9d9d9;
  border-bottom-left-radius: 28.41px;
`;

export const OrderOkBtn = styled.div`
  width: 50%;
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  background-color: #53e1b9;
  border-bottom-right-radius: 28.41px;
`;

export const MoreOrders = styled.div`
  font-size: 14px;
  color: #888888;
`;
