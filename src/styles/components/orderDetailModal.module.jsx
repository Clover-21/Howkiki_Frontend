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
  align-items: center;
  flex-direction: column;
  width: 630px;
  height: 450px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
`;

export const ModalContent = styled.div``;

export const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const MenuContainer = styled.div`
  height: 248px;
  max-height: 248px;
  width: 550px;
  margin-top: 10px;
  background-color: #efefef;
  overflow: auto; // 스크롤을 활성화

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const MenuName = styled.div`
  font-size: 17px;
`;

export const MenuQuantity = styled.div`
  font-size: 17px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #cdcdcd;
`;

export const BtnContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 86px;
  height: 44px;
  border-radius: 12px;
  background-color: #7878f0;
  color: #ffffff;
  font-weight: 600;
`;
