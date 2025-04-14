import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 430px; /* 최대 너비 제한 */
  background-color: #ffffff;
  overflow-y: auto;
  padding-bottom: 30px;
  margin: 0 auto; /* 화면 가운데 정렬 */

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const SummaryContentWrap = styled.div``;

export const NotYetOrder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SummaryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; // 간격 균형 잡기 위해 추가
  padding: 15px 20px;
  margin: 0 auto; // 가운데 정렬
  margin-top: 50px;
  max-width: 430px; // 모바일 기준 폭 제한
`;

export const CloseIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const RefreshIcon = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const SummaryTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  flex: 1;

  @media screen and (min-width: 430px) {
    font-size: 17px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cdcdcd;
`;

export const TableNum = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  padding: 15px;

  @media screen and (min-width: 430px) {
    font-size: 16px;
  }
`;

export const TotalOrderPriceWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 60px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;
`;

export const TotalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
  font-weight: 600;
`;

export const TotalText = styled.div`
  font-size: 14px;
`;

export const TotalPrice = styled.div`
  font-size: 14px;
`;

export const OrderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const OrderBox = styled.div`
  width: 90%;
  padding: 15px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;
  background-color: #ffffff;

  @media screen and (max-width: 375px) {
    padding: 12px;
  }
`;

export const StatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: 1.5px solid
    ${({ status }) =>
      status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
        ? "#cdcdcd"
        : "#5d60ef"};
  background-color: ${({ status }) => {
    if (status === "ADMIN_CANCELLED" || status === "USER_CANCELLED") {
      return "#ffffff";
    } else {
      return "rgba(83, 225, 185, 0.5)";
    }
  }};
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 800;
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#777777"
      : "#5d60ef"};

  @media screen and (min-width: 430px) {
    font-size: 12px;
  }
`;

export const CancelBtn = styled.button`
  border-radius: 12px;
  padding: 8px 12px;
  border: 2px solid ${({ disabled }) => (disabled ? "#cdcdcd" : "#5d60ef")};
  font-size: 11px;
  font-weight: 800;
  color: ${({ disabled }) => (disabled ? "#cdcdcd" : "#5d60ef")};
  cursor: pointer;

  @media screen and (min-width: 430px) {
    font-size: 12px;
  }
`;

export const OrderNum = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 7px;
  margin-bottom: 10px;
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#000000"};

  @media screen and (min-width: 430px) {
    font-size: 16px;
  }
`;

export const MenuComponent = styled.div``;

export const Line2 = styled.div`
  height: 1px;
  background-color: #cdcdcd;
`;

export const OrderList = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const MenuName = styled.div`
  font-size: 13px;
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#000000"};

  @media screen and (min-width: 430px) {
    font-size: 14px;
  }
`;

export const Quantity = styled.div`
  font-size: 13px;
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#000000"};

  @media screen and (min-width: 430px) {
    font-size: 14px;
  }
`;

export const MenuPrice = styled.div`
  font-size: 12px;
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#666666"};
  margin-left: 5px;

  @media screen and (min-width: 430px) {
    font-size: 13px;
  }
`;

export const OrderPriceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const OrderPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 700;
  width: 90%;

  @media screen and (min-width: 430px) {
    font-size: 15px;
  }
`;

export const OrderText = styled.div`
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#000000"};
`;

export const OrderPrice = styled.div`
  color: ${({ status }) =>
    status === "ADMIN_CANCELLED" || status === "USER_CANCELLED"
      ? "#cdcdcd"
      : "#000000"};
`;
