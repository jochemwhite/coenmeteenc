"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export function StepIndicator() {
  const swiper = useSwiper();
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
      {swiper.slides.map((step, index) => (
        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handleClick(index)}>
          <span className={cn("mb-2 text-sm font-medium", index === swiperActiveIndex ? "text-primary" : "text-muted-foreground")}>
            {(index + 1).toString().padStart(2, "0")}
          </span>
          <div className={cn("w-8 h-0.5", index === swiperActiveIndex ? "bg-primary" : "bg-muted-foreground")} />
        </div>
      ))}
    </div>
  );
}
