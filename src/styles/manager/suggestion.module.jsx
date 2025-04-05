import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 110px;
  padding: 40px 40px 0;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const PckContainer = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  margin-top: 60px;
  padding: 90px;
  display: flex;
`;

export const PckContent = styled.div`
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 기본 2열
  gap: 40px 85px;
  align-content: start;
  width: 100%;

  @media (min-width: 1120px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
