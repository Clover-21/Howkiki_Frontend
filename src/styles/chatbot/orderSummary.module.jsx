import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 390px;
  height: 844px;
  background-color: #ffffff;
  overflow-y: auto;
  padding-bottom: 30px;

  ::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

export const SummaryContentWrap = styled.div``;

export const SummaryTop = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px;
  margin-top: 62px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  left: 10;
`;

export const SummaryTitle = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
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
  padding: 20px;
`;

export const TotalOrderPriceWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TotalBox = styled.div`
  width: 346px;
  height: 66px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;
`;

export const TotalContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 600;
`;

export const TotalText = styled.div``;

export const TotalPrice = styled.div``;

export const OrderWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const OrderBox = styled.div`
  width: 346px;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid #cdcdcd;
`;

export const StatusWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Status = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 33px;
  border-radius: 15px;
  border: 1.5px solid #5d60ef;
  background-color: rgba(83, 225, 185, 0.5);
  font-size: 11px;
  font-weight: 800;
  color: #5d60ef;
`;

export const CancelBtn = styled.div`
  border-radius: 12px;
  padding: 8px 12px 8px 12px;
  border: 2px solid #5d60ef;
  font-size: 11px;
  font-weight: 800;
  color: #5d60ef;
`;

export const OrderNum = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
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
  padding-top: 15px;
  padding-bottom: 15px;
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
  margin-top: 15px;
  margin-bottom: 18px;
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
