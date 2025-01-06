import React from "react";
import partnerOne from "../../../../public/partners-01.svg";
import partnerTwo from '../../../../public/partners-02.svg'
import partnerThree from "../../../../public/partners-03.svg";
import partnerFour from "../../../../public/partners-04.svg";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="container bg-[#F6DC0E] my-20 py-10 rounded-xl text-center">
      <h2 className="text-secondary_text font-medium font-hind text-5xl ">
        Our Partners
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-0 my-3 items-center mx-10 mt-10">
        <Image src={partnerOne} width={170} alt="partner image" />
        <Image src={partnerTwo} width={170} alt="partner image" />
        <Image src={partnerThree} width={170} alt="partner image" />
        <Image src={partnerFour} width={170} alt="partner image" />
      </div>
    </section>
  );
}
