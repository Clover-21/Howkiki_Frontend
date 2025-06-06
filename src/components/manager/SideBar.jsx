import React, { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  SideBarContainer,
  SideBarWrap,
  SideBarLink,
  SideBarName,
} from "../../styles/components/sideBar.module";

export default function SideBar() {
  const { storeId } = useParams();
  const location = useLocation(); // 현재 경로 확인
  const navigate = useNavigate();

  const [selectedBar, setSelectedBar] = useState(location.pathname);

  const handleClick = (path) => {
    setSelectedBar(path);
    navigate(path);
  };

  return (
    <SideBarContainer>
      <SideBarWrap>
        <SideBarLink
          onClick={() => handleClick(`/${storeId}/waiting`)}
          selected={selectedBar === `/${storeId}/waiting`}
        >
          <SideBarName selected={selectedBar === `/${storeId}/waiting`}>
            주문 대기
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick(`/${storeId}/preparing`)}
          selected={selectedBar === `/${storeId}/preparing`}
        >
          <SideBarName selected={selectedBar === `/${storeId}/preparing`}>
            처리중
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick(`/${storeId}/readycomplete`)}
          selected={selectedBar === `/${storeId}/readycomplete`}
        >
          <SideBarName selected={selectedBar === `/${storeId}/readycomplete`}>
            완료
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick(`/${storeId}/completeorder`)}
          selected={selectedBar === `/${storeId}/completeorder`}
        >
          <SideBarName selected={selectedBar === `/${storeId}/completeorder`}>
            판매 내역
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick(`/${storeId}/fullorder`)}
          selected={selectedBar === `/${storeId}/fullorder`}
        >
          <SideBarName selected={selectedBar === `/${storeId}/fullorder`}>
            주문 조회
          </SideBarName>
        </SideBarLink>
      </SideBarWrap>
    </SideBarContainer>
  );
}
