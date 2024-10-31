"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
import { brands } from "@/lib/constant";
import Image from "next/image";

export default function Brands() {
  const [slideCount, setSlideCount] = useState(1);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 640) {
      setSlideCount(2);
    } else if (width < 1024) {
      setSlideCount(3);
    } else {
      setSlideCount(5);
    }
  }, [width]);
  return (
    <div className="">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={slideCount}
        effect="fade"
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        speed={750}
        loop
        className="h-full w-full container py-4 "
      >
        {brands.map((slide, i) => (
          <SwiperSlide key={i} >
            <div className="flex justify-center items-end">
              <Image src={slide.image} alt="Videographer at work" width={90} height={90} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
