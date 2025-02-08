import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SummaryContainer,
  SummaryContentWrap,
  OrderContent,
  IconWrap,
  ChatIcon,
} from "../../styles/chatbot/orderSummary.module";
import StatusBar from "../../components/chatbot/StatusBar";
import OrderBox from "../../components/chatbot/OrderBox";
import chatbot from "../../assets/icon/chatbot.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function OrderSummaryPage() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SummaryContainer>
      <SummaryContentWrap>
        <OrderContent>
          <StatusBar />
          <div
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
          </div>
          <IconWrap>
            <ChatIcon src={chatbot} onClick={() => navigate("/chatbot")} />
          </IconWrap>
        </OrderContent>
      </SummaryContentWrap>
    </SummaryContainer>
  );
}
