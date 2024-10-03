import AboutMe from "@/components/about-me";
import ClientReviews from "@/components/client-reviews";
import CounterSection from "@/components/counter-section";
import { TeamShowcase } from "@/components/team-showcase";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function page() {
  return (
    <>
      {/* about me */}
      <section>
        <AboutMe />
      </section>
      {/* clients review */}
      <section className="bg-[url('/img/testimonial-bg.jpg')] object-cover bg-no-repeat bg-cover bg-left-center">
        <ClientReviews />
      </section>

      {/* services */}
      <section className="relative ">
        <div className="py-24 w-full">
          <CounterSection />
        </div>
      </section>

      {/* team */}

      {/* <section>
        <TeamShowcase />
      </section> */}
    </>
  );
}
