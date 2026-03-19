"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SubTitle from "@/components/SubTitle";

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
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="flex justify-between items-center gap-4 mb-4"
      >
        <h1 className="text-clamp-64 font-bold leading-[0.7] h-fit text-gr100">
          خدمات شيد
        </h1>

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

      <div data-aos="fade-left" data-aos-duration="1000" className="relative flex-1">
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
              <div className="h-full flex flex-col rounded-[10px] overflow-hidden">
                <div className="relative flex-1 h-[40vh] md:h-auto">
                  <Image src={"/images/news/rect2.png"} fill alt="swiper" />
                </div>

                <div className="py-clamp-14 px-clamp-28 shadow-[-1px_-17px_20px_6px_#1A2E2D] bg-[#1A2E2D] flex flex-col gap-clamp-30 relative z-10">
                  <div className="flex justify-between items-center text-balance">
                    <h3 className="text-clamp-30 3xl:text-clamp-32 font-bold">اتفاقية اعلانبية</h3>
                    <div className="text-clamp-12 3xl:text-clamp-14 flex gap-clamp-20 py-clamp-8">
                      <div className="leading-[0.7]">03-03-2025</div>
                      <div className="leading-[0.7]">12:45</div>
                    </div>
                  </div>

                  <p className="text-clamp-18 3xl:text-clamp-20 text-balance">
                    شيد العقارية توقع شراكة تسويقية استراتيجية مع المؤثر أحمد البارقي، بهدف تعزيز تواجدها الرقمي والترويج لمشاريعها العقارية المتميزة. ويأتي هذا التعاون ضمن استراتيجية الشركة للوصول إلى جمهور واسع عبر منصات التواصل الاجتماعي، لتسليط الضوء …
                  </p>

                  <SubTitle value={"اقرا المزيد"} />
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