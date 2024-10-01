import { Facebook, Twitter, Dribbble, Instagram, Youtube, ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-[#1A0B2E] text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#00F0FF] rounded-full mr-2"></div>
            <span className="text-2xl font-bold">LOGO HERE</span>
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
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <p className="text-gray-400 mb-4">
              Formed in 2006 by Matt Hobbs and Cael Jones, Videograph is an award-winning, full-service production company specializing.
            </p>
            <Link href="#" className="flex items-center text-[#00F0FF] hover:underline">
              Read more <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Who we are</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our work</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Feature
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Latest
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Browse Archive
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Video for web
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>KVK: 123456</li>
              <li>BTW: NL 123456 1234</li>
              <li>Email: info@coenmeteenc.com</li>
              <li>Tel: 123 456 789</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
