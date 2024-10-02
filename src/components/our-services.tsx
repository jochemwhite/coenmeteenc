import { Film, LucideProps, Pencil, Share2, Video } from "lucide-react";

import React from "react";
import { Separator } from "./ui/separator";
import Button from "./global/Button";

const services = [
  {
    icon: Film,
    title: "Motion graphics",
    description:
      "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
  },
  {
    icon: Pencil,
    title: "Scriptwriting and editing",
    description:
      "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
  },
  {
    icon: Share2,
    title: "Video distribution",
    description:
      "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
  },
  {
    icon: Video,
    title: "Video hosting",
    description:
      "Whether you're halfway through the editing process, or you haven't even started, our post production services can put the finishing touches.",
  },
];

export default function OurServices() {
  return (
    <div className="container flex flex-col space-y-8 py-[110px]">
      <div className="">
        <h3 className="text-sm uppercase mb-2 font-secondary tracking-widest">OUR SERVICES</h3>
        <h2 className="text-4xl font-bold  font-primary">WHAT WE DO?</h2>
        <Separator className="mt-8 mb-12 bg-secondary h-2 w-32" />
        <p className="max-w-2xl font-secondary text-text-secondary">
          If you hire a videographer of our team you will get a video professional to make a custom video for your business and, once the project is
          over.
        </p>
      </div>

      <div className="w-2/3 md:w-1/2">
        <Button href="/contact" label="Get in touch" />
      </div>

      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceDescription key={index} Icon={service.icon} Title={service.title} Description={service.description} />
        ))}
      </div>
    </div>
  );
}

interface ServiceProps {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  Title: string;
  Description: string;
}

function ServiceDescription({ Icon, Title, Description }: ServiceProps) {
  return (
    <div className="flex flex-col ">
      <div className="flex-shrink-0">
        <div className="group relative w-[70px] h-[70px] ">
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-white">
              <Icon />
            </span>
          </div>
          <div className="absolute inset-0 border-2 border-secondary transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </div>
      </div>

      <h4 className="text-xl font-extrabold mb-5 mt-4 font-primary">{Title}</h4>
      <p className="text-text-secondary font-secondary">{Description}</p>
    </div>
  );
}
