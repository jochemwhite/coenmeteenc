import Banner from "@/components/global/Banner";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="space-y-12">
      <section>
        <Banner />
      </section>
      {children}
    </main>
  );
}
