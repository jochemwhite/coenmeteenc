import { BentoGridComponent } from "@/components/bento-grid";
import BlogSection from "@/components/blog-section";
import CounterSection from "@/components/counter-section";
import CtaSection from "@/components/cta-section";
import Hero from "@/components/hero";
import OurServices from "@/components/our-services";
import { TeamShowcase } from "@/components/team-showcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-background-default flex flex-col ">
      <section className="h-[66.7vh] w-full ">
        <Hero />
      </section>
      {/* <BackgroundBeamsWithCollision className="relative  flex flex-col w-full"> */}
      <section className="flex-grow">
        <OurServices />
      </section>
      <section className="w-full">
        <BentoGridComponent />
      </section>
      {/* Counter Section */}
      <section className="relative mt-[185px] py-16">
        <CounterSection />
      </section>
      {/* </BackgroundBeamsWithCollision> */}

      <section className="w-full bg-primary-background-default py-24">
        <TeamShowcase />
      </section>

      {/* BLOG */}
      <section className="pb-24">
        <BlogSection />
      </section>

      {/* Call to Action */}
      <section>
        <CtaSection />
      </section>
    </main>
  );
}
