import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 200px;
  height: 1000px;
  border-right: 5px solid #dddddd; /* 테두리 추가 */
`;

export const SideBarLink = styled.div`
  height: 250px;
  border-bottom: 5px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "#ffffff" : "#dddddd")};
`;

export const SideBarName = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#000000" : "#535353")};
`;

export const Count = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => (props.selected ? "#000000" : "#535353")};
`;
