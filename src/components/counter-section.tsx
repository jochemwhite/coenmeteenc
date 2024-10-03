import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { BsCheck, BsPersonPlus } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import NumberTicker from "./ui/number-ticker";

export default function CounterSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2  2xl:grid-cols-4  w-full gap-4 place-items-center 2xl:mt-[90px]  ">
      <CounterItem className="" title="Completed Projects" count={100} Icon={BsCheck} />
      <CounterItem className="2xl:-mt-[180px]" title="Happy Clients" count={100} Icon={BsPersonPlus} />
      <CounterItem className="xl:mt-32 2xl:-mt-0" title="Perspective clients" count={100} Icon={MdOutlineDesignServices} />
      <CounterItem className="xl:mt-32 2xl:-mt-[180px]" title="Completed Projects" count={100} Icon={BsCheck} />
    </div>
  );
}

interface Props {
  className?: string;
  Icon: IconType;
  title: string;
  count: number;
}

function CounterItem({ className, count, title, Icon }: Props) {
  return (
      <div
        className={cn(
          `flex flex-col items-center justify-center h-52 w-full md:h-[255px] md:w-[255px] text-center relative xl:rotate-45  bg-background-secondary `,
          className
        )}
      >
        <div className="flex flex-col items-center justify-center h-full xl:-rotate-45 space-y-4">
          <Icon size={70} className="text-text-accent" />
          <div className="flex flex-col items-center">
            <NumberTicker value={count} className="text-5xl font-bold text-primary" />
            <span className="text-primary">{title}</span>
          </div>
        </div>
      </div>
  );
}
