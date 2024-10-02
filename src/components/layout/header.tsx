"use client";
import { navItems } from "@/lib/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenu } from "../hamburger-menu/hamburger-menu";
import Socials from "../global/Socials";
import { Separator } from "../ui/separator";

export default function Header() {
  const currentPath = usePathname();

  return (
    <header className=" fixed inset-x-0 top-0 z-50 border-b-2">
      <div className="container mx-auto flex justify-between py-8">
        <Link href="/" className="w-1/2 lg:w-1/4">
          <h2>LOGO HERE</h2>
        </Link>

        <div className=" items-center justify-end hidden xl:flex w-full">
          <ul className="">
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
          <Separator orientation="vertical" className="mr-4" />

          <Socials />
        </div>
        <HamburgerMenu MenuItems={navItems} />
      </div>
    </header>
  );
}
