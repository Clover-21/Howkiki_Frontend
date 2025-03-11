import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 430px; /* 최대 너비 제한 */
  background-color: #ffffff;
  overflow-y: auto;
  padding-bottom: 30px;
  margin: 0 auto; /* 화면 가운데 정렬 */

  @media screen and (min-width: 768px) {
    max-width: 500px; /* 태블릿에서는 좀 더 넓게 */
    max-height: 800px;
  }

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

  @media screen and (max-width: 375px) {
    margin-top: 15px;
  }
`;

export const SummaryTop = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px;
  margin-top: 50px;

  @media screen and (max-width: 375px) {
    margin-top: 40px;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  left: 10px; /* 위치 수정 */
  cursor: pointer;
`;

export const SummaryTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cdcdcd;
`;

export const TableNum = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 15px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 20px;
  }
`;

export const TotalOrderPriceWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TotalBox = styled.div`
  width: 90%;
  height: 60px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;

  @media screen and (max-width: 375px) {
    height: 55px;
  }
`;

export const TotalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 45%;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
`;

export const TotalText = styled.div`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const TotalPrice = styled.div`
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
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
    padding: 12px; /* 작은 화면에서 패딩 줄임 */
    border-radius: 12px; /* 둥근 모서리 조정 */
  }

  @media screen and (min-width: 768px) {
    max-width: 400px; /* 태블릿에서는 좀 더 넓게 */
  }
`;

export const StatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 30px;
  border-radius: 15px;
  border: 1.5px solid #5d60ef;
  background-color: rgba(83, 225, 185, 0.5);
  font-size: 11px;
  font-weight: 800;
  color: #5d60ef;

  @media screen and (max-width: 375px) {
    width: 65px;
    height: 28px;
    font-size: 10px;
  }
`;

export const CancelBtn = styled.div`
  border-radius: 12px;
  padding: 8px 12px;
  border: 2px solid ${({ disabled }) => (disabled ? "#cdcdcd" : "#5d60ef")};
  font-size: 11px;
  font-weight: 800;
  color: ${({ disabled }) => (disabled ? "#cdcdcd" : "#5d60ef")};
  cursor: pointer;
`;

export const OrderNum = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 10px;
  margin-left: 7px;
  margin-bottom: 10px;
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
`;

export const Quantity = styled.div`
  font-size: 13px;
`;

export const MenuPrice = styled.div`
  font-size: 12px;
  color: #666666;
  margin-left: 5px;
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
`;

export const OrderText = styled.div``;

export const OrderPrice = styled.div``;
