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

export const CancelModalContainer = styled.div`
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

export const CancelModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
`;

export const CancelModalContent = styled.div`
  font-size: 20px;
  font-weight: bold;
  height: 300px;
`;

export const CancelBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CancelBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  background-color: ${({ selected }) =>
    selected === "close" ? "#B2B2B2" : "#7878F0"};
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 20px;
  paddig: 20px;
`;

export const ModalContent = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const ModalText = styled.span`
  color: #f25b64;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #5d60ef;
  color: #ffffff;
`;
