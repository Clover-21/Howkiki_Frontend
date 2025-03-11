import styled from "styled-components";

export const StartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(83, 225, 185, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 500px;
    max-height: 800px;
    margin: auto;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const StartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;
  margin-bottom: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 45px;
  border-radius: 15px;
  background-color: #ffffff;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Btn = styled.div`
  font-weight: 700;
  color: #5d60ef;
  cursor: pointer;
`;
