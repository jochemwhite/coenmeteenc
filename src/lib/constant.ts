import { MenuItems, PortfolioProject } from "@/types";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Film, LucideProps, Pencil, Share2, Video } from "lucide-react";

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

export const services = [
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
  {
    icon: Video,
    title: "Video hosting",
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

export const brands = [
  {
    name: "Sony",
    image: "/img/logo/logo-1.png",
    href: "https://sony.com",
  },
  {
    name: "Sony",
    image: "/img/logo/logo-2.png",
    href: "https://sony.com",
  },
  {
    name: "Sony",
    image: "/img/logo/logo-3.png",
    href: "https://sony.com",
  },
  {
    name: "Sony",
    image: "/img/logo/logo-4.png",
    href: "https://sony.com",
  },
  {
    name: "Sony",
    image: "/img/logo/logo-5.png",
    href: "https://sony.com",
  },
  {
    name: "Sony",
    image: "/img/logo/logo-6.png",
    href: "https://sony.com",
  },
];


export const portfolioItems: PortfolioProject[] = [
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 1",
    categories: ["2d-animation"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-1",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 2",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-2",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 3",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-2",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 4",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-4",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 5",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-5",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 6",
    categories: ["2d-animation"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-6",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 7",
    categories: ["2d-animation"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-7",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 8",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-8",
    youtube_id: "ObBXropudK4",
  },
  {
    image: "/img/portfolio/portfolio-1.jpg",
    name: "Portfolio 9",
    categories: ["camera-work", "video-editing"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare auctor magna nec pulvinar. Mauris sed quam sem. Mauris interdum purus non magna consectetur ornare. Phasellus sed varius libero. Proin libero nunc, eleifend non nunc at, sodales condimentum dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi faucibus urna vitae nisl porta aliquet.",
    slug: "portfolio-9",
    youtube_id: "ObBXropudK4",
  },

];