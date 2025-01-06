import React from "react";
import Image, { StaticImageData } from "next/image";

interface cardData {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function CursatoreCard({ image, title, description }: cardData) {
  return (
    <div className="w-[337px] mx-auto">
      {/* Image Wrapper */}
      <div className="w-full h-[466px] overflow-hidden rounded-2xl bg-secondary_bg">
        <Image
          src={image}
          alt="curators"
          width={337} // Ensure the width of the image matches the card width
          height={466}
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>

      {/* Text Content */}
      <div>
        <h2 className="font-semibold text-secondary_text text-2xl font-hind mt-4">
          {title}
        </h2>
        <p className="text-paragraph_text font-medium text-base mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}
