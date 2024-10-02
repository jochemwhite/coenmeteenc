import { cn } from "@/lib/utils";
import { IconType } from "react-icons";
import { BsCheck, BsPersonPlus } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import NumberTicker from "./ui/number-ticker";

export default function CounterSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center  ">
      <CounterItem className="" title="Compled Projects" count={230} Icon={BsCheck} />
      <CounterItem className="" title="Happy Clients" count={100} Icon={BsPersonPlus} />
      <CounterItem className="" title="Perspective clients" count={100} Icon={MdOutlineDesignServices} />
      <CounterItem className="" title="Compled Projects" count={100} Icon={BsCheck} />
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
        `flex flex-col items-center justify-center  h-52 w-full md:h-[255px] md:w-[255px] text-center relative lg:rotate-45  bg-background-secondary `,
        className
      )}
    >
      <div className="flex flex-col items-center justify-center h-full lg:-rotate-45 space-y-4">
        <Icon size={70} className="text-text-accent" />
        <div className="flex flex-col items-center">
          <NumberTicker value={count} className="text-5xl font-bold text-primary" />
          <span className="text-primary">{title}</span>
        </div>
      </div>
    </div>
  );
}
