import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  HeaderContainer,
  Category,
  CategoryName,
  Circle,
} from "../../styles/components/header.module";

export default function Header() {
  const { storeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);

  const handleClick = (path) => {
    setSelectedBar(path);
    navigate(path);
  };
  return (
    <HeaderContainer>
      <Category
        selected={
          selectedBar === `/${storeId}/waiting` ||
          selectedBar === `/${storeId}/preparing` ||
          selectedBar === `/${storeId}/readycomplete` ||
          selectedBar === `/${storeId}/paycomplete` ||
          selectedBar === `/${storeId}/fullorder`
        }
        onClick={() => handleClick(`/${storeId}/waiting`)}
      >
        <CategoryName
          selected={
            selectedBar === `/${storeId}/waiting` ||
            selectedBar === `/${storeId}/preparing` ||
            selectedBar === `/${storeId}/readycomplete` ||
            selectedBar === `/${storeId}/paycomplete` ||
            selectedBar === `/${storeId}/fullorder`
          }
        >
          주문 접수
        </CategoryName>
        {selectedBar === `/${storeId}/waiting` ||
        selectedBar === `/${storeId}/preparing` ||
        selectedBar === `/${storeId}/readycomplete` ||
        selectedBar === `/${storeId}/paycomplete` ||
        selectedBar === `/${storeId}/fullorder` ? (
          <Circle />
        ) : null}
      </Category>
      <Category onClick={() => handleClick(`/${storeId}/tablemanage`)}>
        <CategoryName selected={selectedBar === `/${storeId}/tablemanage`}>
          테이블
        </CategoryName>
        {selectedBar === `/${storeId}/tablemanage` ? <Circle /> : null}
      </Category>
      <Category onClick={() => handleClick(`/${storeId}/packaging`)}>
        <CategoryName selected={selectedBar === `/${storeId}/packaging`}>
          포장
        </CategoryName>
        {selectedBar === `/${storeId}/packaging` ? <Circle /> : null}
      </Category>
      <Category onClick={() => handleClick(`/${storeId}/suggestion`)}>
        <CategoryName selected={selectedBar === `/${storeId}/suggestion`}>
          건의 사항
        </CategoryName>
        {selectedBar === `/${storeId}/suggestion` ? <Circle /> : null}
      </Category>
    </HeaderContainer>
  );
}
