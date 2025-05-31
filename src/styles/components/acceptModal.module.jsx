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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 590px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.div`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
`;

export const TimeBoxWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  gap: 35px;
`;

export const TimeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 110px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 600;
  background-color: #e4e4e4;

  &:hover {
    background: #7878f0;
    color: #ffffff;
  }
`;

export const TimeInput = styled.input`
  width: 450px;
  height: 50px;
  font-size: 17px;
  font-weight: 650;
  border: 2px solid #ccc;
  border-radius: 18px;
  text-align: center;
  line-height: 50px;
  margin-top: 20px;
  margin-bottom: 180px;
`;

export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 40px;
  background-color: ${({ disabled }) => (disabled ? "#D9D9D9" : "#7878F0")};

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      background-color: #4b4ee0; 
    }
  `}
`;

export const BackButton = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 22px;
  height: 16px;
`;
