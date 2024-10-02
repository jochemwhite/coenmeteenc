import { LucideProps } from "lucide-react";

interface ServiceProps {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  Title: string;
  Description: string;
}

export default function ServiceDescription({ Icon, Title, Description }: ServiceProps) {
  return (
    <div className="flex flex-col ">
      <div className="flex-shrink-0">
        <div className="group relative w-[70px] h-[70px] ">
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-white">
              <Icon />
            </span>
          </div>
          <div className="absolute inset-0 border-2 border-secondary transition-transform duration-300 ease-in-out group-hover:rotate-45" />
        </div>
      </div>

      <h4 className="text-xl font-extrabold mb-5 mt-4 font-primary">{Title}</h4>
      <p className="text-text-secondary font-secondary">{Description}</p>
    </div>
  );
}