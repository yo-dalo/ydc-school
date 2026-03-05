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
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16 border-b border-green-200 pb-8">
          <h2 className="text-4xl font-bold text-green-900">
            Founder’s Message
          </h2>
          <p className="mt-4 text-lg text-green-800 max-w-3xl mx-auto">
            A message reflecting the vision and values behind our educational journey.
          </p>
        </div>

        <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop>
          {founders.map((founder) => (
            <SwiperSlide key={founder.id}>
              <div className="grid lg:grid-cols-2 border border-green-200">

                <div className="w-full h-[420px] relative border-b lg:border-b-0 lg:border-r border-green-200">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <p className="text-xl text-green-900 leading-relaxed mb-10">
                    {founder.message}
                  </p>

                  <div className="border-t border-green-200 pt-6">
                    <p className="text-2xl font-semibold text-green-900">
                      {founder.name}
                    </p>
                    <p className="text-green-700 mt-1">
                      {founder.role}
                    </p>
                  </div>

                  <div className="mt-10">
                    <button className="border border-green-700 px-6 py-3 font-semibold text-green-900">
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