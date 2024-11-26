import styled from "styled-components";

export const CategoryBar = styled.div`
  background-color: #b2b2b2;
  height: 80px;
`;

export const CategoryBox1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  background-color: #fd961f;
  font-size: 25px;
  color: white;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuListWrap = styled.div`
  padding: 20px;
`;

export const OrderContainer = styled.div``;
export const OrderContent = styled.div``;
export const OrderTitle = styled.div``;
export const MenuContainer = styled.div``;
export const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuList = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const TableNum = styled.div`
  color: black;
`;
export const OrderedMenu = styled.div``;
export const MenuName = styled.div``;
export const MenuQuantity = styled.div``;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  paddig: 20px;
`;

export const ModalContent = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #fd961f;
  color: #ffffff;
`;
