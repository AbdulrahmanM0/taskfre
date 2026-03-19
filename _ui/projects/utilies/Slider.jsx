"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Title from "@/components/Title";
import Tabs from "./Tabs";
import Image from "next/image";
import Card from "./Card";

function Slider() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex justify-between items-center gap-4 mb-clamp-40">
        <Title value={"المشاريع"} />
        <div className="flex gap-clamp-16">
          {/* Next Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className="border border-[#1A2E2D] h-clamp-80 w-clamp-80 rounded-[10px] flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-clamp-40 h-clamp-20"
              width="39"
              height="21"
              viewBox="0 0 39 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.1623 11.252C38.7067 10.7076 38.7067 9.82488 38.1623 9.28045L29.2902 0.408336C28.7457 -0.136102 27.863 -0.136102 27.3186 0.408336C26.7741 0.952772 26.7741 1.83548 27.3186 2.37992L35.2049 10.2662L27.3186 18.1526C26.7741 18.697 26.7741 19.5797 27.3186 20.1241C27.863 20.6686 28.7457 20.6686 29.2902 20.1241L38.1623 11.252ZM0 10.2662V11.6604H37.1765V10.2662V8.87212H0V10.2662Z"
                fill="#1A2E2D"
              />
            </svg>
          </button>

          {/* Prev Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className="border border-[#1A2E2D] h-clamp-80 w-clamp-80 rounded-[10px] flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <svg
              className="w-clamp-40 h-clamp-20"
              width="39"
              height="21"
              viewBox="0 0 39 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.408295 11.252C-0.136143 10.7076 -0.136143 9.82488 0.408295 9.28045L9.28041 0.408336C9.82484 -0.136102 10.7075 -0.136102 11.252 0.408336C11.7964 0.952772 11.7964 1.83548 11.252 2.37992L3.36567 10.2662L11.252 18.1526C11.7964 18.697 11.7964 19.5797 11.252 20.1241C10.7075 20.6686 9.82484 20.6686 9.28041 20.1241L0.408295 11.252ZM38.5706 10.2662V11.6604H1.39408V10.2662V8.87212H38.5706V10.2662Z"
                fill="#1A2E2D"
                fillOpacity="0.54"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative flex-1">
        <div className="absolute w-full h-full grid grid-cols-1 md:grid-cols-2 gap-clamp-40">
          <div></div>
          <div className="h-full shadow-[13px_-16px_20px_11px_rgba(128,128,128,0.27)] rounded-[20px]"></div>
        </div>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-clamp-40 rounded-[10px]">
                <div className="flex flex-col gap-clamp-28">
                  <div
                    className="h-fit"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <Tabs />
                  </div>

                  <div
                    className="flex-1 grid md:grid-cols-2 grid-cols-1 gap-x-clamp-28 gap-y-clamp-18"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    {[1, 2, 3, 4].map((item, index) => (
                      <Card key={index} />
                    ))}
                  </div>
                </div>

                <div>
                  <Image
                    src={"/images/backdrops/bck.png"}
                    className="w-full rounded-[15px]"
                    width={735}
                    height={654}
                    alt="bck"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;