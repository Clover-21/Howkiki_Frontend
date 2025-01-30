import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 720.43px;
  height: 534.02px;
  background-color: #ffffff;
  border-radius: 20px;
`;

export const ModalTitle = styled.div`
  font-size: 24.27px;
  font-weight: 700;
  align-self: flex-start;
  margin-left: 40px;
  margin-bottom: 15px;
`;

export const MenuContainer = styled.div`
  height: 194.43px;
  max-height: 194.43px;
  max-width: 628.68px;
  overflow-y: auto;
  margin-top: 10px;
  background-color: #efefef;
`;

export const MenuContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 65px;
  background-color: #efefef;
  justify-content: center;
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 22px;
  font-size: 14.56px;
`;

export const MenuName = styled.div`
  flex-grow: 1;
  font-size: 16px;
`;

export const MenuQuantity = styled.div`
  width: 50px;
  text-align: center;
`;

export const MenuPrice = styled.div`
  width: 80px;
  text-align: right;
  font-size: 16px;
`;

export const Line = styled.div`
  width: 628.68px;
  background-color: #cdcdcd;
  height: 1px;
`;

export const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 83%;
  margin-bottom: 5px;
`;

export const Price = styled.div`
  white-space: nowrap;
`;

export const Text = styled.div`
  flex-grow: 1;
  font-size: 14.56px;
  font-weight: 700;
`;

export const Line2 = styled.div`
  width: 85%;
  height: 1px;
  background-color: #cdcdcd;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const Text2 = styled.div`
  flex-grow: 1;
  font-size: 17px;
  font-weight: 700;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 40px;
`;

export const FinishBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 81.07px;
  height: 38.84px;
  color: #ffffff;
  font-weight: 600;
  background-color: ${(props) => (props.$isEmpty ? "#7878F0" : "#D9D9D9")};
  border-radius: 7.28px;
`;

export const PaidBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103.4px;
  height: 38.84px;
  color: #ffffff;
  font-weight: 600;
  background-color: #7878f0;
  border-radius: 7.28px;
`;

export const TextWrapper = styled.div`
  width: 628.68px;
  padding: 20px;
`;
export const EmptyText = styled.div``;
