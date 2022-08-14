import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function SwiperPage({ width }) {
  const orange = "#FFBD9E";
  const red = "#FFADAD";
  const violet = "#CBCBFF";

  return (
    <div className="container container--swiper">
      <Swiper
        pagination={width <= 770 && true}
        navigation={width >= 770 && true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            color={orange}
            title={"Travel In Japan: The True Experience"}
            text={
              "When pattern is mentioned in interior design, it is easy to asso- ciate it with a geometric patterned wallpaper or colourful prints on interior fabrics."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            color={red}
            title={"Helping Wild Turtles To Travel In Japan"}
            text={
              "The scale of the challenges facing our planet can seem daunting, but we can all do something. Challenges facing our planet can seem daunting, but we can all do something."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            color={violet}
            title={"Threats of Modern Indusrial World "}
            text={
              "The scale of the challenges facing our planet can seem daunting, but we can all do something. Easy to asso- ciate it with a geometric patterned wallpaper."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
