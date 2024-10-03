import { Facebook, Twitter, Dribbble, Instagram, Youtube, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A0B2E] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <Image src="/img/logo.png" alt="logo" width={100} height={100} />
            </span>
          </div>


          <div className="flex space-x-4">
            <Link href="#" className="hover:text-[#00F0FF]">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00F0FF]">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00F0FF]">
              <Dribbble size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00F0FF]">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="hover:text-[#00F0FF]">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        <Separator className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About me</h3>
            <p className="text-gray-400 mb-4">
              Formed in 2006 by Matt Hobbs and Cael Jones, Videograph is an award-winning, full-service production company specializing.
            </p>
            <Link href="/about" className="flex items-center text-[#00F0FF] hover:underline">
              Read more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Who am I?</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white">
                  My work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our work</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/portfolio/" className="hover:text-white">
                  Feature
                </Link>
              </li>
              <li>
                <Link href="/portfolio/" className="hover:text-white">
                  Latest
                </Link>
              </li>
              <li>
                <Link href="/portfolio/" className="hover:text-white">
                  Browse Archive
                </Link>
              </li>
              <li>
                <Link href="/portfolio/" className="hover:text-white">
                  Video for web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>KvK: 123456</li>
              <li>BTW: NL 123456 1234</li>
              <li>E-mail: info@coenmeteenc.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
