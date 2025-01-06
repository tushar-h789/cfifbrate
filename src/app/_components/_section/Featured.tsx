"use client";

import React, { useState, useEffect } from "react";
import Card from "../_common/Card";
import cardOne from "../../../../public/feature-01.png";
import cardTwo from "../../../../public/feature-02.png";
import cardThree from "../../../../public/feature-03.png";
import cardFour from "../../../../public/feature-04.png";
import useEmblaCarousel from "embla-carousel-react";
import Button from "../_common/Button";

export default function Featured() {
  const [viewportRef] = useEmblaCarousel({ loop: true });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Handle screen size to switch between slider and grid layout
  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024); // `lg` breakpoint (1024px and above)
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = [
    {
      image: cardOne,
      title: "Porchfest DC",
      description:
        "Porchfest DC is a Washington, DC nonprofit (501(c)(3)) that produces unique multidimensional activations, showcasing local creatives and performers.",
      button: "Read More",
    },
    {
      image: cardTwo,
      title: "kweli.TV",
      description:
        "kweli.TV is a digital thought-provoking media platform that creates deep, thought-provoking content focused on cultural and social issues.",
      button: "Read More",
    },
    {
      image: cardThree,
      title: "DMPED",
      description:
        "DMPED (The Department of Small and Local Business Development) plays a crucial role in fostering economic growth in Washington, DC.",
      button: "Read More",
    },
    {
      image: cardFour,
      title: "Alive Podcast Network",
      description:
        "Alive Podcast Network is a dynamic platform dedicated to amplifying diverse voices and sharing powerful stories through podcasting.",
      button: "Read More",
    },
  ];

  return (
    <section className="bg-secondary_bg pt-24">
      <div className="container">
        <div className="pb-8">
          {/* Title Section */}
          <h2 className="font-hind text-secondary_text text-center font-bold text-4xl md:text-5xl ">
            Featured Collaborators
          </h2>

          <div className="font-hind text-secondary_text text-xl  leading-relaxed pt-4 rounded-xl">
            <p className="text-center">
              Discover a carefully curated selection of small businesses,
              creatives, and founders,
              <br /> showcasing their distinct products, services, and
              innovations at Celebrate! DC.
            </p>
          </div>

          {/* Embla Slider for Small & Medium Devices */}
          {!isLargeScreen ? (
            <div className="overflow-hidden mt-8" ref={viewportRef}>
              <div className="flex gap-4">
                {cards.map((card, index) => (
                  <div key={index} className="min-w-[90%] sm:min-w-[70%]">
                    <Card
                      image={card.image}
                      title={card.title}
                      description={card.description}
                      button={card.button}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Grid Layout for Large Devices */
            <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8 lg:gap-0 mt-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  button={card.button}
                />
              ))}
            </div>
          )}

          <div className="text-center my-10 mb-24 hidden lg:block">
            <Button title="View All" />
          </div>
        </div>
      </div>
    </section>
  );
}
