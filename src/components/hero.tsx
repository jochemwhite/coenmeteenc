"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="h-2/3 w-full bg-[url('/img/hero/hero.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto relative overflow-hidden z-50">
        <Swiper modules={[Pagination, Navigation]} pagination={{ clickable: true }} navigation className="h-full w-full">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                {/* <img src={slide.image} alt="Videographer at work" className="absolute inset-0 w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-black bg-opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center items-start p-16 text-white">
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl mb-8">{slide.subtitle}</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">SEE MORE ABOUT US</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-8 left-16 z-10 flex space-x-2">
          {[1, 2, 3].map((num) => (
            <span key={num} className={`h-1 w-8 ${num === 1 ? "bg-white" : "bg-gray-500"} rounded-full`} />
          ))}
        </div>
      </div>
    </div>
  );
}
