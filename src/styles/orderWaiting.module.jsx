import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 150px;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  width: calc(100% - 200px);
  gap: 30px;
`;
export const OrderContent = styled.div`
  position: relative;
  background-color: white;
  width: 1210px;
  height: 210px;
  border-radius: 30px;
  padding: 25px;
`;

export const OrderTitle = styled.div``;
export const MenuContainer = styled.div``;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TableNum = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
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
  bottom: 18px;
  right: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`;
export const OrderOkBtn = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #7878f0;
  border-radius: 10px;
`;
export const OrderCancelBtn = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 15px;
  background-color: #b2b2b2;
  border-radius: 10px;
`;
