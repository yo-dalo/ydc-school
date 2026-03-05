"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const founders = [
  {
    id: 1,
    name: "Founder Name 1",
    role: "Founder & Director",
    image: "/poster/34.png",
    message:
      "Education forms the basic fabric of one's personality that shapes one into a complete human being with a purpose. Our vision of true education is to ensure holistic development of students—mental, physical, emotional, and spiritual.",
  },
  {
    id: 2,
    name: "Founder Name 2",
    role: "Co-Founder",
    image: "/poster/34.png",
    message:
      "Our goal is to build a learning environment where students grow with knowledge, discipline, and strong moral values to contribute positively to society.",
  },
];

export default function FounderMessage() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Founder's Message
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A message reflecting the vision and values behind our educational journey.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
        >
          {founders.map((founder) => (
            <SwiperSlide key={founder.id}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div className="w-full h-[420px] border border-gray-300 relative overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xl text-gray-800 leading-relaxed mb-8">
                    {founder.message}
                  </p>

                  <div className="border-t border-gray-300 pt-6">
                    <p className="text-2xl font-semibold text-gray-900">
                      {founder.name}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {founder.role}
                    </p>
                  </div>

                  <div className="mt-8">
                    <button className="border border-gray-400 px-6 py-3 font-semibold text-gray-800">
                      Read Full Message
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}