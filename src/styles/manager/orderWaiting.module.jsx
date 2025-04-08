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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 20px);
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
`;

export const OrderContent = styled.div`
  position: relative;
  background-color: white;
  width: 269px;
  height: 291px;
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
  cursor: pointer;

  &:hover {
    background-color: #bfbfbf; /* 좀 더 진한 회색으로 hover 느낌 */
  }
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
  cursor: pointer;

  &:hover {
    background-color: #3fc7a4; /* 좀 더 진한 민트색 */
  }
`;

export const MoreOrders = styled.div`
  font-size: 14px;
  color: #888888;
`;

export const LoaderWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
