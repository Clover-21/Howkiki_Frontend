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
  width: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "300px" : "600px"};
  height: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "165px" : "400px"};
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
`;

export const ModalContent = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const ModalText = styled.div`
  font-size: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "15.85px" : "24px"};
`;

export const HighlightText = styled.div`
  color: #f25b64;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "64px" : "106px"};
  height: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "38px" : "54px"};
  border-radius: 10px;
  font-size: ${({ noticeName }) =>
    noticeName === "운영자의 주문 취소 알림" ? "12.68px" : "18px"};
  background-color: #5d60ef;
  color: #ffffff;
  margin-top: 30px;
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
