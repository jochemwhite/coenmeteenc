"use client";

import { useState } from "react";
import Button from "./global/Button";
import { Separator } from "./ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { Twitter, Facebook, Instagram } from "lucide-react";
import { HoverCardWithBg } from "./hover-card-with-bg";

export function TeamShowcase() {
  const team_members = [
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

  return (
    <div className="relative w-full  overflow-hidden bg-[url('/img/team-bg.jpg')] bg-no-repeat bg-cover">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-white">
        <h2 className="text-2xl font-light mb-2 font-secondary">NICE TO MEET</h2>
        <h1 className="text-5xl font-bold mb-12 font-primary">OUR TEAM</h1>

        <Separator className="mt-8 mb-12 bg-secondary h-2 w-32" />

        <div className="grid grid-cols-2 md:grid-cols-4 mt-32 relative">
          {team_members.map((member, i) => (
            <div
              key={i}
              className={`relative`}
              style={{
                marginTop: `-${i * 60}px`,
              }}
            >
              <HoverCardWithBg image={member.image} name={member.name} role={member.role} />
            </div>
          ))}
          <div className="absolute w-full flex justify-end mt-8 bottom-0">
            <Button label="Meet The Team" href="/team" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SocialCardProps {
  name: string;
  role: string;
  image: string;
}

