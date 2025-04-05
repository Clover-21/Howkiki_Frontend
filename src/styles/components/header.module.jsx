import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 170px;
  height: 120px;
  padding: 20px;
  background-color: #7878f0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const CategoryName = styled.div`
  color: white;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) =>
    props.selected ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};

  @media screen and (max-width: 865px) {
    font-size: 18px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  margin-top: 30px;
  width: 7.28px;
  height: 7.28px;
  border-radius: 50%;
  background-color: #ffffff;
  flex-grow: 0;
`;
