import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  SideBarContainer,
  SideBarWrap,
  SideBarLink,
  SideBarName,
} from "../../styles/components/sideBar.module";

export default function SideBar() {
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
          onClick={() => handleClick("/waiting")}
          selected={selectedBar === "/waiting"}
        >
          <SideBarName selected={selectedBar === "/waiting"}>
            접수대기
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick("/preparing")}
          selected={selectedBar === "/preparing"}
        >
          <SideBarName selected={selectedBar === "/preparing"}>
            처리중
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick("/readycomplete")}
          selected={selectedBar === "/readycomplete"}
        >
          <SideBarName selected={selectedBar === "/readycomplete"}>
            완료
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick("/paycomplete")}
          selected={selectedBar === "/paycomplete"}
        >
          <SideBarName selected={selectedBar === "/paycomplete"}>
            결제 완료
          </SideBarName>
        </SideBarLink>
        <SideBarLink
          onClick={() => handleClick("/fullorder")}
          selected={selectedBar === "/fullorder"}
        >
          <SideBarName selected={selectedBar === "/fullorder"}>
            주문조회
          </SideBarName>
        </SideBarLink>
      </SideBarWrap>
    </SideBarContainer>
  );
}
