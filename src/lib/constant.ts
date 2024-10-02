import { MenuItems } from "@/types";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

export const navItems: MenuItems[] = [
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

export const socials = [
  {
    name: "Instagram",
    path: "https://www.instagram.com/coenmeteencc/",
    icon: FaInstagram,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/CoenMetEenC",
    icon: FaTwitter,
  },
  {
    name: "Youtube",
    path: "youtube.com/CoenMetEenC",
    icon: FaYoutube,
  },
  {
    name: "Twitch",
    path: "https://Twitch.tv/CoenMetEenC",
    icon: FaTwitch,
  },
];


export const team_members = [
  {
    name: "Coen",
    role: "CEO",
    image: "/img/team/team-1.jpg",
  },
  {
    name: "Coen",
    role: "CEO",
    image: "/img/team/team-1.jpg",
  },
  {
    name: "Coen",
    role: "CEO",
    image: "/img/team/team-1.jpg",
  },
  {
    name: "Coen",
    role: "CEO",
    image: "/img/team/team-1.jpg",
  },
];