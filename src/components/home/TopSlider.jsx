"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

export default function TopSlider() {
  const slides = [
    { id: 1, image: "/poster/1.jpeg", alt: "Yaduvanshi College Campus 1" },
    { id: 2, image: "/poster/2.jpeg", alt: "Yaduvanshi College Campus 2" },
  ];

  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[32vh] sm:h-[40vh] md:h-[55vh] lg:h-[75vh] xl:h-[85vh] min-h-[240px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full bg-gray-100">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev text-white! opacity-0! group-hover:opacity-100! transition-opacity duration-300 drop-shadow-md after:text-xl! md:after:text-2xl! lg:after:text-3xl! left-2! sm:left-4! lg:left-8!"></div>

      <div className="swiper-button-next text-white! opacity-0! group-hover:opacity-100! transition-opacity duration-300 drop-shadow-md after:text-xl! md:after:text-2xl! lg:after:text-3xl! right-2! sm:right-4! lg:right-8!"></div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}