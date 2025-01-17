import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, CategoryName } from "../styles/header.module";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);

  const handleClick = (path) => {
    setSelectedBar(path);
    navigate(path);
  };
  return (
    <HeaderContainer>
      <CategoryName
        selected={selectedBar === "/"}
        onClick={() => handleClick("/")}
      >
        주문 접수
      </CategoryName>
      <CategoryName
        selected={selectedBar === "/tablemanage"}
        onClick={() => handleClick("/tablemanage")}
      >
        테이블
      </CategoryName>
      <CategoryName
        selected={selectedBar === "/packaging"}
        onClick={() => handleClick("/packaging")}
      >
        포장
      </CategoryName>
      <CategoryName
        selected={selectedBar === "/suggestion"}
        onClick={() => handleClick("/suggestion")}
      >
        건의 사항
      </CategoryName>
    </HeaderContainer>
  );
};

export default Header;
