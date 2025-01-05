import React from "react";
import celebrateImg from "../../../../public/celebrate.png";
import Image from "next/image";
import bgImg from "../../../../public/bg-img.png";
import Button from "../_common/Button";
import RightArrow from "../../../../public/icons/right-arrow";

export default function Celebrate() {
  return (
    <section
      className="pt-28 px-4"
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="text-center pb-8">
          {/* Title Section */}
          <h2 className="text-secondary_text  mb-4 text">
            Celebrate! DC - The Experience
          </h2>
          <p className="font-medium text-secondary_text text-xl md:text-3xl mb-8">
            Coming Soon
          </p>
        </div>

        {/* Image and Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <Image
              src={celebrateImg}
              width={500}
              height={500}
              alt="Celebrate DC Image"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Description Section with Background Image */}
          <div className="w-full lg:w-[642px] text-secondary_text text-lg md:text-xl leading-relaxed p-10 rounded-xl">
            <p>
              Discover Washington, DC beyond the iconic national monuments—a
              city where people live, thrive, and play.
            </p>
            <p>
              <strong>Celebrate! DC - The Experience</strong> brings the best of
              all &quot;eight Wards&quot; into one immersive destination.
              Through 3D visuals, virtual reality tours, and life-sized
              installations of local landmarks, you can &quot;walk&quot; the
              streets, explore neighborhood attractions, and uncover hidden
              gems.
            </p>
            <p>
              Feel the rhythm of live GoGo music, savor DC&apos;s mouth-watering
              eats like fried chicken with Mumbo Sauce, and experience art,
              innovations, and small businesses from around the city.{" "}
              <strong>Celebrate! DC</strong> invites you to experience the real
              DC—an immersive event that brings the city&apos;s true character
              to life.
            </p>
            <div className="relative flex items-center w-full text-center mt-10">
              <Button title="Join the Waitlist " className="w-60 mx-auto" />
              <RightArrow className="w-10 absolute right-[168px]"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
