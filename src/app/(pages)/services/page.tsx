import Brands from "@/components/brands";
import ServiceCard from "@/components/cards/service-card";
import CallToAction from "@/components/cta-section";
import { services } from "@/lib/constant";

export default function Services() {
  return (
    <>
      {/* Services */}
      <section>
        <div className="container col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} Icon={service.icon} Title={service.title} Description={service.description} />
          ))}
        </div>
      </section>
      {/* call to action */}
      <section>
        <CallToAction />
      </section>
      {/* Brands */}
      <section className="pb-12">
        <Brands />
      </section>
    </>
  );
}
