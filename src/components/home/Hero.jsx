"use client";
import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-gray-300 flex items-center justify-center">
                <Image
                  src="/logo/6.png"
                  alt="Yaduvanshi Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Yaduvanshi Degree College
                </h2>
                <p className="text-sm text-gray-600">
                  Mahendergarh, Haryana
                </p>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Empowering Futures Through Quality Education
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Among the leading residential colleges in India. We provide a calm and focused learning environment designed for academic excellence and overall development of students.
            </p>

            <div className="mb-8">
              <p className="text-blue-700 font-semibold">
                Admission Helpline: +91 8607062323
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-blue-700 text-white px-8 py-3 font-semibold">
                Apply Now
              </button>

              <button className="border border-gray-400 text-gray-800 px-8 py-3 font-semibold">
                Explore Courses
              </button>
            </div>

          </div>

          <div className="w-full h-[420px] lg:h-[520px] border border-gray-300 relative overflow-hidden">
            <Image
              src="/logo/5.png"
              alt="Yaduvanshi Degree College Campus"
              fill
              className="object-cover"
              priority
            />

            <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t border-gray-300">
              <h4 className="text-lg font-semibold text-gray-900">
                Holistic Growth
              </h4>
              <p className="text-sm text-gray-600">
                Expert Faculty & Learning Environment
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};