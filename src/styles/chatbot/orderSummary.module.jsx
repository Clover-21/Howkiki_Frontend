import styled from "styled-components";

export const SummaryContainer = styled.div`
  width: 390px;
  height: 844px;
  position: relative;
  background-color: rgba(83, 225, 185);
`;

export const SummaryContentWrap = styled.div`
  width: 390px;
  height: 727px;
  position: absolute;
  bottom: 0;
  border-radius: 63px 63px 0 0;
  background-color: #ffffff;
`;

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 70px;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #a9a9a9;

    &.swiper-pagination-bullet-active {
      background-color: #5d60ef;
    }
  }
`;

export const IconWrap = styled.div`
  width: 390px;
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
`;

export const ChatIcon = styled.img`
  width: 55px;
`;
