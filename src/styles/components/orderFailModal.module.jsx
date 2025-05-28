import styled from "styled-components";

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
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 165px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const ModalTitle = styled.div`
  margin-top: 10px;
  font-size: 19px;
  font-weight: bold;
  color: #f25b64;
`;

export const ModalSubTitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
`;

export const ModalText = styled.div`
  margin-top: 5px;
  font-size: 15px;
  color: #717171;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 38px;
  border-radius: 10px;
  font-size: 12.68px;
  background-color: #5d60ef;
  color: #ffffff;

  &.cancel {
    background: #b2b2b2;
  }
`;
