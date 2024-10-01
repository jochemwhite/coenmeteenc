'use client'
import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

export default function BlogSection() {
  const mockData = [
    {
      title: "The Rise of Artificial Intelligence in Healthcare",
      content: "AI is revolutionizing the healthcare industry, from diagnostic tools to personalized treatment plans.",
      date: "2024-03-15T09:30:00Z",
    },
    {
      title: "Sustainable Living: Small Changes, Big Impact",
      content: "Discover how minor adjustments in your daily routine can contribute to a more sustainable lifestyle.",
      date: "2024-03-22T14:45:00Z",
    },
    {
      title: "The Future of Work: Remote vs. Office",
      content: "As companies adapt to new work models, we explore the pros and cons of remote and office-based work.",
      date: "2024-03-29T11:15:00Z",
    },
    {
      title: "Exploring the Wonders of Deep Sea Ecosystems",
      content: "Recent discoveries in deep sea exploration reveal fascinating new species and ecological insights.",
      date: "2024-04-05T16:20:00Z",
    },
    {
      title: "The Art of Mindfulness in a Fast-Paced World",
      content: "Learn simple mindfulness techniques to reduce stress and increase focus in your daily life.",
      date: "2024-04-12T08:00:00Z",
    },
    {
      title: "Blockchain Beyond Cryptocurrency",
      content: "Exploring innovative applications of blockchain technology in various industries.",
      date: "2024-04-19T13:45:00Z",
    },
    {
      title: "The Psychology of Color in Marketing",
      content: "Understanding how color choices influence consumer behavior and brand perception.",
      date: "2024-04-26T10:30:00Z",
    },
    {
      title: "Advancements in Renewable Energy Storage",
      content: "New technologies are making it easier to store and distribute renewable energy efficiently.",
      date: "2024-05-03T15:00:00Z",
    },
    {
      title: "The Impact of Social Media on Mental Health",
      content: "Examining the pros and cons of social media use on psychological well-being.",
      date: "2024-05-10T09:15:00Z",
    },
    {
      title: "Culinary Fusion: Blending Global Flavors",
      content: "Innovative chefs are creating exciting new dishes by combining diverse culinary traditions.",
      date: "2024-05-17T12:00:00Z",
    },
  ];

  return (
    <div className="container flex justify-center flex-col items-center">
      <div className="text-center flex justify-center flex-col items-center">
        <h3 className="uppercase text-xl font-secondary mb-2">Our Blog</h3>
        <h2 className="uppercase text-4xl font-primary mb-6 font-bold">blog update</h2>
        <Separator className="bg-secondary h-2 w-20" />
      </div>

      <Swiper modules={[Navigation, Autoplay]} slidesPerView={3} effect="fade" autoplay={{ delay: 3000, pauseOnMouseEnter: true }} speed={750} loop className="h-full w-full">
        {mockData.map((slide, i) => (
          <SwiperSlide key={i}>
            <BlogCard title={slide.title} content={slide.content} date={slide.date} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function BlogCard({ title, content, date }: any) {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full bg-primary-background-default text-white border-[#3D3D56] border ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <p className="text-sm text-gray-400">{date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">
            {content}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="link" className="text-white p-0 hover:no-underline">
            Read more <span className="ml-1">→</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
