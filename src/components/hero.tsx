"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import Button from "./global/Button";
import { StepIndicator } from "./step-indicator";

export default function Hero() {
  const slides = [
    {
      id: 1,
      title: "Video editing",
      subtitle: "Making your stories visible",
      button_label: "Contact me",
      button_link: "/contact",
    },
    {
      id: 2,
      title: "Camera work",
      subtitle: "See my recent work",
      button_label: "Recent work",
      button_link: "/services",
    },
    {
      id: 3,
      title: "2D Animation",
      subtitle: "Making your stories visible",
      button_label: "Recent animations",
      button_link: "/services",
    },
  ];

  return (
    <div className="h-full w-full bg-[url('/img/hero/hero.jpg')] bg-no-repeat bg-cover">
      <div className="h-full container mx-auto relative  ">
        <Swiper modules={[Navigation, Autoplay]} effect="fade" autoplay={{ delay: 3000, pauseOnMouseEnter: true }} className="h-full w-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <div className="absolute inset-0 flex flex-col justify-center items-start stext-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="md:text-xl mb-8">{slide.subtitle}</p>
                  <Button href={slide.button_link} label={slide.button_label} />
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
