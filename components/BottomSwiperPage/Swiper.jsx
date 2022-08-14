import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import SwiperElement from "./SwiperElement";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function BottomSwiper({ children, width }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <img className="bg" src="./swiper-bg.svg" alt="" />

      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Pagination, Navigation]}
        className="myBottomSwiper"
        centeredSlides={true}
        slidesPerView={width <= 425 ? 1 : 3.8}
        loop={true}
        spaceBetween={100}
      >
        <SwiperSlide>
          <SwiperElement
            url={"./nature1.png"}
            title="Avoid plastic"
            text={
              "Taking on the issue of ensuring access to safe water requires worldwide effort."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperElement
            url={"./nature2.png"}
            title="Choose organic"
            text={
              "Taking on the issue of ensuring access to safe water requires worldwide effort."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperElement
            url={"./nature3.png"}
            title="Save water"
            text={
              "Taking on the issue of ensuring access to safe water requires worldwide effort."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperElement
            url={"./nature4.png"}
            title="Plant trees"
            text={
              "Taking on the issue of ensuring access to safe water requires worldwide effort."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperElement
            url={"./nature5.png"}
            title="Save energy"
            text={
              "Taking on the issue of ensuring access to safe water requires worldwide effort."
            }
          />
        </SwiperSlide>
        <div className="swiper__nav">
          <img src="./arrow-back.svg" alt="" className="prev" />
          <img src="./arrow-next.svg" alt="" className="next" />
        </div>
      </Swiper>
    </>
  );
}
