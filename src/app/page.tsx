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
      {/* HERO */}
      <section className="h-[66.7vh] w-full ">
        <Hero />
      </section>
      {/* OUR SERVICES */}
      <section>
        <OurServices />
      </section>
      <section className="w-full">
        {/* BENTO GRID  */}
        <BentoGridComponent />
      </section>
      {/* Counter Section */}
      <section className="relative  py-16">
        <CounterSection />
      </section>

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
