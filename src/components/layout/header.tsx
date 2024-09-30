"use client";
import React from "react";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const currentPath = usePathname();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Pages",
      path: "/pages",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const socials = [
    {
      name: "Instagram",
      path: "https://www.instagram.com/coenmeteencc/",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      path: "https://twitter.com/CoenMetEenC",
      icon: <FaTwitter />,
    },
    {
      name: "Youtube",
      path: "youtube.com/CoenMetEenC",
      icon: <FaYoutube />,
    },
    {
      name: "Twitch",
      path: "https://Twitch.tv/CoenMetEenC",
      icon: <FaTwitch />,
    },
  ];

  return (
    <header className=" fixed inset-x-0 top-0 z-50 border-b-2">
      <div className="container mx-auto flex justify-between py-8">
        <div>
          <h2>LOGO HERE</h2>
        </div>

        <div className="flex items-center justify-between ">
          <ul className="flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.path} className="inline-flex items-center mx-4 font-medium  relative group uppercase font-primary">
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 top-8 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out",
                    currentPath === item.path ? "scale-x-100" : ""
                  )}
                />
              </a>
            ))}
          </ul>
          <Separator orientation="vertical" className="mr-4" />
          <ul className="flex">
            {socials.map((item) => (
              <li key={item.path} className="mr-4">
                <a href={item.path}>{item.icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
