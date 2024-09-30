import { BentoGridComponent } from "@/components/bento-grid";
import Hero from "@/components/hero";
import OurServices from "@/components/our-services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-background-default flex flex-col">
      <section className="h-[66.7vh] w-full ">
        <Hero />
      </section>
      <section className="flex-grow">
        <OurServices />
      </section>

      <section>
        <BentoGridComponent />
      </section>
    </main>
  );
}
