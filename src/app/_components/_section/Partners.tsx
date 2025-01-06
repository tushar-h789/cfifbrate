import React from "react";
import Marquee from "react-fast-marquee";
import partnerOne from "../../../../public/partners-01.svg";
import partnerTwo from "../../../../public/partners-02.svg";
import partnerThree from "../../../../public/partners-03.svg";
import partnerFour from "../../../../public/partners-04.svg";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="container bg-[#F6DC0E] my-20 py-10 rounded-xl text-center">
      <h2 className="text-secondary_text font-medium font-hind text-5xl mb-10">
        Our Partners
      </h2>

      {/* Marquee Section */}
      <Marquee speed={100} gradient={false} pauseOnHover={true} className="mt-5">
        <div className="flex gap-10 items-center">
          <Image src={partnerOne} width={170} alt="partner image" />
          <Image src={partnerTwo} width={170} alt="partner image" />
          <Image src={partnerThree} width={170} alt="partner image" />
          <Image src={partnerFour} width={170} alt="partner image" />
          <Image src={partnerOne} width={170} alt="partner image" />
          <Image src={partnerTwo} width={170} alt="partner image" />
          <Image src={partnerThree} width={170} alt="partner image" />
          <Image src={partnerFour} width={170} alt="partner image" />
        </div>
      </Marquee>
    </section>
  );
}
