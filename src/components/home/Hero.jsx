import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 bg-white gap-10 items-center">
        
        <div className="py-5 px-16">
          
          <div className="h-20 flex gap-6 items-center">
            <div className="h-full w-44 flex items-center">
              <Image
                src="/logo/6.png"
                alt="College"
                width={176}
                height={80}
                className="w-full h-full px-1 rounded-2xl border-4 border-amber-600 object-contain"
              />
            </div>

            <div className="flex flex-col justify-center items-start text-black">
              <h2 className="text-3xl font-bold leading-none">
                LPU Online
              </h2>
              <h4 className="text-sm mt-1">
                50,000+ learners enrolled
              </h4>
            </div>
          </div>

          <div className="w-full gap-6 my-5 flex items-center h-12">
            <Image
              src="/logo/3.png"
              alt="College"
              width={60}
              height={48}
              className="h-full object-contain"
            />
            <Image
              src="/logo/3.png"
              alt="College"
              width={60}
              height={48}
              className="h-full object-contain"
            />
            <Image
              src="/logo/1.png"
              alt="College"
              width={60}
              height={48}
              className="h-full object-contain"
            />
          </div>

          <h2 className="text-amber-700 text-sm mb-2">
            + Add to College
          </h2>

          <p className="text-gray-600 mb-6">
            50,000+ learners enrolled. Ranked among top universities.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md">
              Start Application
            </button>

            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-md">
              Download Brochure
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/logo/5.png"
            alt="College"
            width={600}
            height={350}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

      </div>
    </main>
  );
};