import styled from "styled-components";

export const StartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(83, 225, 185, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StoreNameInput = styled.input`
  width: 280px;
  height: 50px;
  padding: 20px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  outline: none;
`;

export const BtnWrap = styled.div`
  position: relative;
`;

export const OkBtn = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#A8A8A8" : "#5D60EF")};
  margin-left: -45px;
  margin-top: 27px;
`;

export const Arrow = styled.img`
  position: absolute;
  top: 52%;
  transform: translateX(-152%);
  width: 17px;
`;
