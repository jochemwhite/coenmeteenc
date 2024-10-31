import type { IconType } from "react-icons";
import { CiLocationOn } from "react-icons/ci";
import { FaAt, FaPhone } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export default function ContactInformation() {
  return (
      <div className="container  pb-8 flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-around md:items-center ">
        <InformationCard label="Our Location" value="Apeldoorn" Icon={CiLocationOn} />
        <Link href="tel:+31612345678" className="">
          <InformationCard label="Phone" value="+31612345678" Icon={FaPhone} Size={40} />
        </Link>
        <Link href="mailto:info@coenmeteenc.com">
          <InformationCard label="E-mail" value="info@coenmeteenc.com" Icon={FaAt} Size={40} />
        </Link>
      </div>


  );
}

interface Props {
  label: string;
  value: string;
  Icon: IconType;
  Size?: number;
}

function InformationCard({ label, value, Icon, Size = 60 }: Props) {
  return (
    <div className="flex items-center">
      <div className="h-24 w-24 rounded-full flex justify-center items-center border-secondary border">
        <Icon size={Size} />
      </div>
      <div className="ml-4">
        <h3 className="text-3xl font-bold font-primary">{label}</h3>
        <p className="text-lg">{value}</p>
      </div>
    </div>
  );
}
