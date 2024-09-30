"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import BentoCard from "./bento-card";

export function BentoGridComponent() {


  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-2 w-full  mx-auto h-[600px]">
      <div className="col-span-2 row-span-1">
        <BentoCard name="PROJECT 1" image="/img/portfolio/portfolio-1.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-1 row-span-1">
        <BentoCard name="PROJECT 2" image="/img/portfolio/portfolio-2.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-1 row-span-1 relative">
        <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-2 row-span-2 relative">
        <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-1 row-span-1 relative">
        <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-1 row-span-1">
      <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="#" service="2D Animation" />
      </div>
      <div className="col-span-2 row-span-1 relative">
        <BentoCard name="PROJECT 3" image="/img/portfolio/portfolio-3.jpg" href="#" service="2D Animation" />
      </div>
    </div>
  );
}


