'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"

interface Props {
  name: string;
  role: string;
  image: string;
}


export function HoverCardWithBg({ name, role, image }: Props) {
  return (
    <Card className="w-64 h-80 overflow-hidden group relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Content */}
      <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
        {/* Basic Info */}


        {/* Extra Info (Hidden by default, shown on hover) */}
        <div className=" space-y-2 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
          <p className="text-sm text-white">
            Passionate about creating intuitive and efficient web applications.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}