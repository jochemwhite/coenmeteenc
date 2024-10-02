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

export const reviews = [
  {
    name: "Alice Johnson",
    role: "Software Developer",
    review: "The product exceeded my expectations. Its intuitive interface and robust features have significantly improved our team's productivity.",
    img: "/api/placeholder/150/150",
  },
  {
    name: "Bob Smith",
    role: "Marketing Manager",
    review: "I'm impressed with the analytics capabilities. It's given us valuable insights into our customer behavior.",
    img: "/api/placeholder/150/150",
  },
  {
    name: "Carol Williams",
    role: "UX Designer",
    review: "The customization options are fantastic. It allowed us to tailor the solution perfectly to our brand.",
    img: "/api/placeholder/150/150",
  },
  {
    name: "David Brown",
    role: "Project Manager",
    review: "This tool has streamlined our workflow immensely. The collaboration features are particularly useful.",
    img: "/api/placeholder/150/150",
  },
  {
    name: "Eva Martinez",
    role: "Data Analyst",
    review: "The data visualization components are top-notch. They've made presenting complex information much easier.",
    img: "/api/placeholder/150/150",
  },
];
