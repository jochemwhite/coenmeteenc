import { BentoGridComponent } from "@/components/bento-grid";
import CounterSection from "@/components/counter-section";
import CtaSection from "@/components/cta-section";
import Hero from "@/components/hero";
import OurServices from "@/components/our-services";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col  ">
      {/* HERO */}
      <section className="h-[66.7vh] w-full py-12">
        <Hero />
      </section>
      {/* OUR SERVICES */}
      <section className="py-12">
        <OurServices />
      </section>
      <section className="w-full pt-12">
        {/* BENTO GRID  */}
        <BentoGridComponent />
      </section>
      {/* Counter Section */}
      <section className="relative ">
        <BackgroundBeamsWithCollision>
        <div className="py-24 w-full">
          <CounterSection />
        </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* <section className="w-full bg-primary-background-default pb-12">
        <TeamShowcase />
      </section> */}

      {/* BLOG */}
      {/* <section className="py-12">
        <BlogSection />
      </section> */}

      {/* Call to Action */}
      <section>
        <CtaSection />
      </section>
    </main>
  );
}
