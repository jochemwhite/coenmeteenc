"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useWindowSize from "@/hooks/useWindowSize";
import { reviews } from "@/lib/constant";
import Pagination from "./pagination";
import ClientReviewCard from "./cards/client-review-card";

export default function ClientReviews() {
  const [slideCount, setSlideCount] = useState(1);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width) {
      if (width < 768) {
        setSlideCount(1);
      } else if (width < 1024) {
        setSlideCount(2);
      } else {
        setSlideCount(3);
      }
    }
  }, [width]);

  return (
    <div className="container space-y-8 py-32">
      <div className="text-center flex items-center flex-col w-full space-y-4 ">
        <h4 className="font-secondary uppercase tracking-widest">Loved by our clients</h4>
        <h2 className="text-4xl font-bold font-primary uppercase">what clients say?</h2>
        <Separator className="bg-secondary h-2 w-20" />
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={slideCount}
        spaceBetween={30}
        effect="fade"
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        speed={750}
        loop
      >
        {reviews.map((slide, i) => (
          <SwiperSlide key={i}>
            <ClientReviewCard name={slide.name} role={slide.role} image={slide.img} review={slide.review} />
          </SwiperSlide>
        ))}
        <div className="mt-8">
          <Pagination />
        </div>
      </Swiper>
    </div>
  );
}
