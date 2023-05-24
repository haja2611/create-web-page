import React from "react";
import "../feedbb/Feedback.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Feedback() {
  return (
    <>
      {" "}
      <div class="feedbpage">
        <div className="feedbmovimg"></div>
        <div className="feesbtitles">
          <h6 className="feedb-title1">OUR FEEDBAKCS</h6>

          <h2 className="feedb-title2">What They’re Talking About Company</h2>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="hpad">
            <div className="feedbackimg1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feedbackimg2"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
