import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StatusBar from "../../components/chatbot/StatusBar";
import OrderBox from "../../components/chatbot/OrderBox";
import chatbot from "../../assets/icon/chatbot.svg";
import {
  SummaryContainer,
  SummaryContentWrap,
  OrderContent,
  IconWrap,
  ChatIcon,
  SwiperContainer,
} from "../../styles/chatbot/orderSummary.module";
import { Container } from "../../styles/chatbot/chatBot.module";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function OrderSummaryPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container>
      <SummaryContainer>
        <SummaryContentWrap>
          <OrderContent>
            <StatusBar />
            <SwiperContainer
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1.2}
                spaceBetween={-40}
                onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                speed={700}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide style={{ marginLeft: "40px" }}>
                  <OrderBox />
                </SwiperSlide>
                <SwiperSlide>
                  <OrderBox />
                </SwiperSlide>
                <SwiperSlide>
                  <OrderBox />
                </SwiperSlide>
              </Swiper>
            </SwiperContainer>
            <IconWrap>
              <ChatIcon src={chatbot} onClick={() => navigate("/chatbot")} />
            </IconWrap>
          </OrderContent>
        </SummaryContentWrap>
      </SummaryContainer>
    </Container>
  );
}
