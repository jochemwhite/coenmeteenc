"use client";
import React, { use, useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function Banner() {
  const pathname = usePathname();
  const router = useRouter();
  const [pathName, setPathname] = useState<string[]>([]);

  useEffect(() => {
    const pathNames = pathname.split("/");
    setPathname(pathNames);
  }, [pathname]);

  const handleClick = (index: number) => {
    const path = pathName.slice(0, index + 1).join("/");

    const fullURL = typeof window !== "undefined" ? `${window.location.origin}${path}` : "";
    router.push(fullURL);
  };

  return (
    <div className="w-full h-80 bg-[url('/img/breadcrumb-bg.jpg')] flex justify-center items-center flex-col ">
      <h2 className="font-primary font-bold text-3xl capitalize">{pathName[pathName.length - 1]}</h2>
      <Breadcrumb className="font-secondary mt-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {pathName.map((item, index) => {
            if (index === pathName.length - 1) {
              return (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">{item}</BreadcrumbPage>
                </BreadcrumbItem>
              );
            }

            return (
              <>
                <BreadcrumbItem key={index} onClick={() => handleClick(index)}>
                  <BreadcrumbLink className="capitalize cursor-pointer">{item}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default Banner;
