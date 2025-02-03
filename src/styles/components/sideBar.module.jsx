import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 253px;
  height: 1000px;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const SideBarWrap = styled.div`
  margin-top: 170px;
`;

export const SideBarLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80px;
`;

export const SideBarName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 211px;
  height: 66px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) =>
    props.selected ? "rgba(217, 217, 217, 0.5)" : ""};
`;
