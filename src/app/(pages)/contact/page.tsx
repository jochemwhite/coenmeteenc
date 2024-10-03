import ContactInformation from "@/components/contact-information";
import ContactForm from "@/components/form/contact-from";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <>
      <section>
        <ContactInformation />
      </section>

      <section className="container pb-12 ">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 ">
          <div className=" flex md:justify-center md:items-center  w-full  ">
            <div className="aspect-square h-[350px]  relative">
              <Image src="/img/contact/coen.png" alt="contact" fill className="object-cover object-right" />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-4xl font-primary uppercase font-bold mb-4">Get in touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
