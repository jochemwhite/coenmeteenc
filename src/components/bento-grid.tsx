"use client";

import BentoCard from "./cards/bento-card";

export function BentoGridComponent() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 w-full mx-auto h-[600px]">
      <div className="col-span-3 row-span-1">
        <BentoCard name="PROJECT 1" image="/img/portfolio/portfolio-1.jpg" href="https://www.youtube.com/embed/ObBXropudK4?si=1Omwe_CCpeak2X5_" service="Camera & Editing" />
      </div>
      <div className="col-span-1 row-span-1">
        <BentoCard name="PROJECT 2" image="/img/portfolio/portfolio-2.jpg" href="https://www.youtube.com/embed/al96l-QTLTs?si=9-Y6E7bbkIieY8K7" service="Camera & Editing" />
      </div>
      <div className="col-span-2 row-span-1 relative">
        <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="https://www.youtube.com/embed/J5fjembliGA?si=53vIS76c8YPZq2gq" service="2D Animation" />
      </div>
    </div>
  );
}
