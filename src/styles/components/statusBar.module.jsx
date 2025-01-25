import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
`;

export const ProgressBar = styled.div`
  width: 80%;
  height: 12px;
  background-color: #eeeeee;
  border-radius: 8px;
  position: relative;
`;

export const Progress = styled.div`
  height: 12px;
  background-color: rgba(83, 225, 185, 0.5);
  border-radius: 8px;
  width: ${(props) => props.width};
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
  margin-top: 8px;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? "#53E1B9" : "#B5B5B5")};
`;
