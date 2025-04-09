import styled from "styled-components";

export const StyledInput = styled.input`
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  border: 2.5px solid gainsboro;
  border-radius: 0.4rem;

  &:hover {
    border-color: #7878F0;
  }


  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #7878F0;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  padding: 23px;
  margin-left: 15px;
`;

export const StyledP = styled.div`
  font-size: 17px;
`;
