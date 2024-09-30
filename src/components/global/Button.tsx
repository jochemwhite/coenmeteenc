import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function Button({ href, label }: ButtonProps) {
  



  return (
    <Link
      href={href}
      className={`relative ease-in-out pt-[14px] pb-4 px-8 flex justify-center items-center font-play uppercase font-bold tracking-[2px] 
        before:absolute before:h-[30px] before:w-[30px]  before:transition-all before:duration-500  before:border-l-2 before:border-l-[#00bfe7] before:border-t-2 before:border-t-[#00bfe7] before:border-solid before:left-0 before:top-0 hover:before:h-[100%] hover:before:w-[100%] 
        after:absolute after:h-[30px] after:w-[30px]  after:transition-all after:duration-500 after:border-r-2 after:border-r-[#00bfe7] after:border-b-2 after:border-b-[#00bfe7] after:border-solid after:right-0 after:bottom-0  after:hover:h-[100%] after:hover:w-[100%]`}
    >
      {label}
    </Link>
  );
}
