import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 844px;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 165px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const ModalText = styled.p`
  font-size: 15.85px;
  font-weight: 600;

  span {
    color: #f25b64;
    font-weight: 700;
  }
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 64px;
  height: 38px;
  background-color: #5d60ef;
  border-radius: 12px;
`;

export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 38px;
  color: #ffffff;
  font-size: 12.68px;
  font-weight: 600;
  background-color: #7878f0;
  border-radius: 12px;
`;
