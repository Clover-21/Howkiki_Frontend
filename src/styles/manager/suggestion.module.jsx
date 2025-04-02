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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(2, auto);
  gap: 40px 85px;
  justify-content: center;
  align-content: start;
  width: 100%;
`;
