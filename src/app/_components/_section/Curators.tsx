import React from "react";
import CursatoreCard from "../CursatoreCard";
import curatorsOne from "../../../../public/curators-01.png";
import curatorsTwo from "../../../../public/curators-02.png";
import curatorsThree from "../../../../public/curators-03.png";
import curatorsFour from "../../../../public/curators-04.png";

export default function Curators() {
  return (
    <section className="container">
      <h2 className="font-semibold text-secondary_text font-hind leading-10 mx-auto text-center text-4xl mt-10">
        The Curators
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-0  my-20">
        <CursatoreCard
          image={curatorsOne}
          title="Ayanna Smith"
          description="Relationship Management & Strategic Partnerships Executive"
        />

        <CursatoreCard
          image={curatorsTwo}
          title="Maisha Stephens-Teacher"
          description="Boutique Salon Owner · Children’s Boutique Owner Salon Startup Consultant"
        />

        <CursatoreCard
          image={curatorsThree}
          title="Melody Jackson"
          description="Relationship Management & Strategic Partnerships Executive"
        />

        <CursatoreCard
          image={curatorsFour}
          title="Porchfest DC"
          description="A nonprofit 501 (C)3 supporting creatives"
        />
      </div>
    </section>
  );
}
