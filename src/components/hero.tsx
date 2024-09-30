"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "./global/Button";
import { StepIndicator } from "./step-indicator";

export default function Hero() {
  const slides = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=1200",
      title: "VIDEOGRAPHER'S PORTFOLIO",
      subtitle: "FOR WEBSITE AND VIDEO EDITING",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=1200",
      title: "JOHN STOP ME TE LATEN SCHRIKKEN",
      subtitle: "FOR WEBSITE AND VIDEO EDITING",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=1200",
      title: "VERDOME",
      subtitle: "FOR WEBSITE AND VIDEO EDITING",
    },
  ];

  return (
    <div className="h-full w-full bg-[url('/img/hero/hero.jpg')] bg-no-repeat bg-cover">
      <div className="h-full container mx-auto relative  ">
        <Swiper modules={[Navigation, Autoplay]} effect="fade" autoplay={{ delay: 3000, pauseOnMouseEnter: true }}  className="h-full w-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                {/* <img src={slide.image} alt="Videographer at work" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 flex flex-col justify-center items-start stext-white">
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                  <Button href="/contact" label="View all services" />
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-10 left-0 z-50">
            <StepIndicator />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
