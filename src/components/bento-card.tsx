"use client";
import { useModal } from "@/providers/modal-provider";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

interface Props {
  name: string;
  service: string;
  href: string;
  image: string;
}

export default function BentoCard({ name, service, href, image }: Props) {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal(
      <div className="w-full h-full flex items-center justify-center">
        <iframe
          className="aspect-video w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=WJout0NX31O_d8px?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  };

  return (
    <div className="w-full h-full relative">
      <Image src={image} alt={name} fill className="w-full h-full object-cover rounded-lg" />
      <PlayCircle
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-white cursor-pointer"
        size={50}
        onClick={handleClick}
      />
    </div>
  );
}
