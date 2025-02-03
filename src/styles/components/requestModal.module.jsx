import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  width: 540.91px;
  height: 339.47px;
  background-color: #ffffff;
  border-radius: 24px;
  padding: 45px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
`;

export const ModalText = styled.div`
  display: flex;
  flex-direciton: row;
  font-size: 21.85px;
  font-weight: 600;
  margin-bottom: 18px;
`;

export const HighlightText = styled.div`
  color: #f25b64;
`;

export const BtnWrap = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 106px;
  height: 54px;
  border-radius: 16px;
  font-size: 20px;
  background-color: #7878f0;
  color: #ffffff;
`;

export const TableWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const TableText = styled.div`
  font-size: 21.85px;
`;

export const Num = styled.div`
  font-size: 23.06px;
`;

export const Icon = styled.div`
  font-size: 30px;
  margin-left: 3px;
  margin-right: 3px;
`;

export const RequestText = styled.div`
  font-size: 26px;
  font-weight: 700;
`;
