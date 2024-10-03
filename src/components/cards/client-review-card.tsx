import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  name: string;
  role: string;
  image: string;
  review: string;
}
export default function ClientReviewCard({ name, role, image, review }: Props) {
  return (
    <div>
      <div className="border-[1px] h-[150px]">
        <p className="p-8">{review}</p>
      </div>

      <div className="flex items-center pt-4 px-8">
        <Avatar>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <p className="text-lg font-bold">{name}</p>
          <p className=" font-secondary">{role}</p>
        </div>
      </div>
    </div>
  );
}
