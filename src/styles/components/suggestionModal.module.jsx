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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 755.63px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const SuggestionContainer = styled.div`
  width: 693.25px;
  height: 286.43px;
  padding: 25px;
  background-color: #efefef;
  font-size: 18px;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 35px;
`;

export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81.07px;
  height: 38.84px;
  color: #ffffff;
  font-weight: 600;
  background-color: #7878f0;
  border-radius: 7.28px;
`;
