import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
  <section className="relative bg-white py-20 lg:py-28">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left content */}
      <div>
        <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 px-4 py-2 mb-6">
          <Image src="/logo/6.png" alt="logo" width={48} height={48} className="object-contain" />
          <div>
            <h2 className="font-bold text-xl uppercase text-gray-900">Yaduvanshi Degree College</h2>
            <p className="text-sm text-gray-600">Mahendergarh, Haryana</p>
          </div>
        </div>

        <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
          Empowering futures through{' '}
          <span className="text-green-600">Holistic Education</span>.
        </h1>

        <p className="text-lg text-gray-700 mb-8 max-w-xl">
          Among the top residential Colleges in India...
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-green-600 text-white font-bold px-8 py-4 hover:bg-green-700 transition-colors">
            Apply Now →
          </button>
          <button className="border-2 border-green-600 text-green-700 font-bold px-8 py-4 hover:bg-green-50 transition-colors">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Right image – no heavy effects */}
      <div className="relative border-4 border-gray-200">
        <Image
          src="/logo/5.png"
          alt="Campus"
          fill
          className="object-cover"
        />
      </div>

    </div>
  </div>
</section>
  );
};