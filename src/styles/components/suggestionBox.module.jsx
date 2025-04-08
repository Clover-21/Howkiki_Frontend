import styled from "styled-components";

export const SuggestionWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  width: 100%;
  margin-bottom: 15px;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 140px;
  border-radius: 14px;
  background-color: #53e1b9;

  @media (max-width: 1200px) {
    width: 55px;
  }
`;

export const Number = styled.div`
  color: #ffffff;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 25px;
  }
`;

export const ContentContainer = styled.div`
  width: 93%;
  border-radius: 20px;
  padding: 25px;
  background-color: #ffffff;
`;

export const ContentText = styled.div`
  font-size: 17px;
`;
