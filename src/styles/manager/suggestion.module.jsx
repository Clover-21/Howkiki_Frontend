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
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

export const PckContent = styled.div`
  max-width: 1300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px 85px;
`;
