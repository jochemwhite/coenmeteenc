"use client";
import React from "react";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";
import { MenuItems } from "@/types";

export default function Header() {
  const currentPath = usePathname();

  const navItems: MenuItems[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Pages",
      href: "/pages",
    },
    {
      name: "Contact",
      href: "/contact",
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
        <Link href="/">
          <h2>LOGO HERE</h2>
        </Link>

        <div className="flex items-center justify-between ">
          <ul className="hidden">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="inline-flex items-center mx-4 font-medium  relative group uppercase font-primary">
                {item.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 top-8 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out",
                    currentPath === item.href ? "scale-x-100" : ""
                  )}
                />
              </a>
            ))}
          </ul>
          <HamburgerMenu MenuItems={navItems} />
          <ul className="hidden md:flex">
          <Separator orientation="vertical" className="mr-4" />
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
