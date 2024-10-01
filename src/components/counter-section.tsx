import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export default function CounterSection() {
  return (
    <div className="container flex justify-between px-50 ">
      <CounterItem className="" />
      <CounterItem className="-mt-[185px]" />
      <CounterItem className="" />
      <CounterItem className="-mt-[185px] " />
    </div>
  );
}

interface Props {
  className?: string;
}

function CounterItem({ className }: Props) {
  return (
    <div
      className={cn(
        `flex flex-col items-center border-2 border-primary h-[255px] w-[255px] text-center relative rotate-45 bg-background-secondary before:absolute before:h-[636px] before:w-[636px]`,
        className
      )}
    >
      <div className="flex flex-col items-center justify-center h-full -rotate-45">
        <span className="text-5xl font-bold text-primary">100</span>
        <span className="text-primary">Clients</span>
      </div>
    </div>
  );
}
