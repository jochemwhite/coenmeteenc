'use client'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'


export default function Pagination() {
  const swiper = useSwiper()
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(0);

  const handleClick = (step: number) => {
    swiper.slideTo(step);
  };

  useEffect(() => {
    swiper.on("slideChange", (x) => {
      setSwiperActiveIndex(x.activeIndex);
    });
  }, [swiper]);
  return (
    <div className="flex items-center justify-center space-x-2 z-50">
      {swiper.slides && swiper.slides.map((step, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => swiper.slideTo(index)}>
 
          <div className={cn("w-2 h-2 rounded-full", index === swiperActiveIndex ? "bg-secondary" : "bg-white opacity-5")} />
        </div>
      ))}
    </div>
  )
}
