import styled from "styled-components";

export const CancelModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const CancelModalWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 537.01px;
  height: 387.87px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
`;

export const CancelModalContent = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const CancelText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CheckBoxWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 440px;
  height: 210px;
  border: 1.5px solid #cdcdcd;
  border-radius: 16px;
`;

export const Line = styled.div`
  height: 1.5px;
  background-color: #cdcdcd;
`;

export const CancelBtnContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 40px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  background-color: #b2b2b2;
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
  background-color: ${({ active }) => (active ? "#7878F0" : "#b2b2b2")};
`;

export const MenuContainer = styled.div`
  height: 210px;
  max-height: 210px;
  width: 440px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const MenuContentWrapper = styled.div`
  background-color: #efefef;
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1px;
`;

export const MenuName = styled.div``;
