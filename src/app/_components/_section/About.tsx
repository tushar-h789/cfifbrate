import React from "react";
import SpecialtiesCard from "../SpecialtiesCard";
import Curators from "./Curators";

export default function About() {
  return (
    <section className="mt-20">
      <div className="container px-4 lg:px-0">
        <h2 className="font-hind font-semibold text-5xl text-secondary_text text-center">
          About
        </h2>
        <p className="max-w-[768px] font-hind text-xl text-paragraph_text mx-auto my-4">
          Our team is a powerhouse of passionate strategists, event architects,
          and ecosystem builders with over 75 years of combined experience in
          making bold visions come to life. We bring a deep commitment to
          empowering small businesses, orchestrating memorable events, and
          driving meaningful impact through every project we touch.
        </p>
        <div className="mt-12 mb-5">
          <h3 className="text-secondary_text font-hind text-3xl font-bold leading-tight text-center">
            Our Specialties
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-6 gap-5">
            <SpecialtiesCard
              title="Event Creation"
              description="From immersive events to large-scale activations, we bring concepts to life with precision and creativity, delivering experiences that captivate audiences and achieve goals."
            />

            <SpecialtiesCard
              title="Small Business Support"
              description="We champion local entrepreneurs, especially women and people of color, with initiatives that boost visibility, spark growth, and foster lasting success."
            />

            <SpecialtiesCard
              title="Cultural & Community Connection"
              description="Our events celebrate diverse cultures and bring communities together, building relationships that extend beyond the event itself."
            />

            <SpecialtiesCard
              title="Seamless Project
Leadership"
              description="With a strategic yet hands-on approach, we coordinate complex projects with ease, uniting teams and partners to exceed expectations."
            />
          </div>
        </div>
      </div>

      {/* The Curators */}
      <Curators/>
    </section>
  );
}
