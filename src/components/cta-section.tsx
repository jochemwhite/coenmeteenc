import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="relative overflow-hidden bg-[url('/img/calltos-bg.jpg')] bg-no-repeat bg-cover">
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col justify-center h-full text-white">
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-primary font-bold leading-tight mb-4">Fresh Ideas, Fresh Moments Giving <br /> Wings to your Stories.</h2>
        <p className="text-xl mb-8 font-secondary">INC5000, BEST PLACES TO WORK 2019</p>
        <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-3 px-6 rounded w-fit">START YOUR STORIES</Button>
      </div>
    </div>
  );
}
