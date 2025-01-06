import React from "react";
import celebrateImg from "../../../../public/celebrate.png";
import Image from "next/image";
import bgImg from "../../../../public/bg-img.png";
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
        {/* Mobile Image (shown only on mobile) */}
        <div className="block lg:hidden mb-8">
          <div className="flex justify-center">
            <Image
              src={celebrateImg}
              width={500}
              height={500}
              alt="Celebrate DC Image"
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="text-center pb-8">
          {/* Title Section */}
          <h2 className="text-secondary_text mb-4 text-5xl font-medium leading-tight capitalize font-hind">
            Celebrate! DC - The Experience
          </h2>
          <p className="font-medium text-secondary_text text-[32px] mb-8 font-hind">
            Coming Soon
          </p>
        </div>

        {/* Image and Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Desktop Image Section (hidden on mobile) */}
          <div className="hidden lg:flex justify-center">
            <Image
              src={celebrateImg}
              width={500}
              height={500}
              alt="Celebrate DC Image"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Description Section */}
          <div className="w-full font-hind lg:w-[642px] text-secondary_text text-lg md:text-xl leading-relaxed p-10 rounded-xl">
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
            <div className="flex justify-center mt-10">
              <div className="bg-primary_bg rounded-2xl flex gap-3 items-center px-8">
                <p className=" py-6 rounded-xl font-medium font-hind text-lg">
                  Join the Waitlist
                </p>
                <RightArrow className="w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}