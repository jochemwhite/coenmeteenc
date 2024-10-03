import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import ServiceDescription from "./cards/service-card";
import { Film } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="container flex flex-col xl:flex-row  relative gap-8 ">
    <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 min-h-96 flex-grow">
      <div className="w-full h-full relative row-span-2">
        <Image src="/img/about/about-1.jpg" alt="about me" fill className="object-cover object-top" />
      </div>
      <div className="w-full h-full relative row-span-1">
        <Image src="/img/about/about-2.jpg" alt="about me" fill className="object-cover object-top" />
      </div>
      <div className="w-full h-full relative row-span-1">
        <Image src="/img/about/about-3.jpg" alt="about me" fill className="object-cover object-top" />
      </div>
    </div>
    
    <div className="space-y-12 min-h-96 w-full flex-grow ">
      <div>
        <h3 className="uppercase mb-2 font-secondary tracking-widest">About Videograph</h3>
        <h1 className="text-5xl font-bold mb-12 font-primary">About Me</h1>
        <Separator className="mt-8 bg-secondary h-2 w-32" />
      </div>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0">
        <ServiceDescription
          Icon={Film}
          Title="Motion graphics"
          Description="Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches."
        />
        <ServiceDescription
          Icon={Film}
          Title="Motion graphics"
          Description="Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches."
        />
      </div>
      <div>
        <p className="font-secondary text-text-secondary">
          Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an award-winning, full-service production company specializing in commercial,
          broadcast, tourism & action sport video production services has been featured.
        </p>
      </div>
    </div>
  </div>
  );
}
