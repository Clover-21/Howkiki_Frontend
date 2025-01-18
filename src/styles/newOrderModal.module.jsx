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
