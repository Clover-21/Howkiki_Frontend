import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

export const PageButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: ${(props) => (props.disabled ? "#B8B8B8" : "#000000")};
`;

export const PageNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;
