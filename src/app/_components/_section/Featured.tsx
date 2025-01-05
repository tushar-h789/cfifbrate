import React from "react";
import Card from "../_common/Card";
import cardOne from '../../../../public/feature-01.png'
import cardTwo from '../../../../public/feature-02.png'
import cardThree from '../../../../public/feature-03.png'
import cardFour from '../../../../public/feature-04.png'

export default function Featured() {
  return (
    <section className="bg-secondary_bg pt-24">
      <div className="container">
        <div className="pb-8">
          {/* Title Section */}
          <h2 className="text-secondary_text text-center font-bold text-4xl md:text-5xl">
            Featured Collaborators
          </h2>

          <div className=" text-secondary_text text-lg leading-relaxed pt-4 rounded-xl">
            <p className="text-center">
              Discover a carefully curated selection of small businesses,
              creatives, and founders, <br /> showcasing their distinct
              products, services, and innovations at Celebrate! DC.
            </p>

          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8 lg:gap-0">
            <Card image={cardOne} title='Porchfest DC' description=' Porchfest DC is a Washington, DC nonprofit (501(c)(3)) that produces unique multidimensional activations, showcasing local creatives and performers.' button='Read More'/>
            <Card image={cardTwo} title='kweli.TV' description=' kweli.TV is a digital  thought-provoking  media platform that creates deep, thought-provoking content focused on cultural and social issues. ' button='Read More'/>
            <Card image={cardThree} title='DMPED' description=' DMPED (The Department of Small and Local Business Development) plays a crucial role in fostering economic growth in Washington, DC.' button='Read More'/>
            <Card image={cardFour} title='Alive Podcast Network' description=' Alive Podcast Network is a dynamic platform dedicated to amplifying diverse voices and sharing powerful stories through podcasting.' button='Read More'/>
          </div>
        </div>
      </div>
    </section>
  );
}
