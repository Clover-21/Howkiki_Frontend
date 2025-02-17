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
  width: 590px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
`;

export const CancelModalContent = styled.div`
  height: 300px;
`;

export const CancelText = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 43px;
  margin-left: 47px;
`;

export const CheckBoxWrap = styled.div`
  margin-top: 30px;
  margin-left: 55px;
`;

export const CancelBtnContainer = styled.div`
  position: absolute;
  bottom: 30px;
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

export const SelectedTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

export const MenuContainer = styled.div`
  height: 240px;
  max-height: 240px;
  max-width: 550px;
  overflow-y: auto;
  margin-top: 10px;
  background-color: #efefef;
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
`;

export const MenuName = styled.div``;
