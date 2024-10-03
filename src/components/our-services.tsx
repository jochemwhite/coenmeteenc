

import React from "react";
import { Separator } from "./ui/separator";
import Button from "./global/Button";
import ServiceCard from "./cards/service-card";
import { services } from "@/lib/constant";



export default function OurServices() {
  return (
    <div className="container flex flex-col xl:flex-row space-y-8  xl:space-x-8">
      <div className="">
        <h3 className="text-sm uppercase mb-2 font-secondary tracking-widest">OUR SERVICES</h3>
        <h2 className="text-4xl font-bold  font-primary">WHAT WE DO?</h2>
        <Separator className="mt-8 mb-12 bg-secondary h-2 w-32" />
        <p className="max-w-2xl font-secondary text-text-secondary">
          If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is
          over.
        </p>
        <div className="w-2/3 md:w-1/2 xl:w-full mt-4">
          <Button href="/contact" label="Get in touch" />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2  gap-8">
        {services.slice(0, 4).map((service, index) => (
          <ServiceCard key={index} Icon={service.icon} Title={service.title} Description={service.description} />
        ))}
      </div>
    </div>
  );
}


