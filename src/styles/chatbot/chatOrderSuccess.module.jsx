import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const ChatContainer = styled.div`
  width: 100vw;
  height: 100dvh;
  max-width: 430px;
  background-color: #f2f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.div`
  font-size: 23px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const BtnContainer = styled.div``;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  border-radius: 20px;
  background-color: #5d60ef;
  font-size: 16px;
  color: #ffffff;
`;
