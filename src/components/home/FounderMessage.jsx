"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";

export default function FounderMessage() {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("./api/client/messages");
        if (response.data.status === "success") {
          setFounders(response.data.data.data);
        }
      } catch (error) {
        // console.error("Error fetching founder messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="animate-pulse text-gray-400 font-medium text-xl">Loading Messages...</div>
        </div>
      </section>
    );
  }

  if (founders.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-linear-to-b from-gray-50 to-white dark:from-blue-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Founder's Message
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto "></div>
          <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A heartfelt note from our leadership on the philosophy and purpose that drives our educational journey.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={founders.length > 1}
          className="w-full"
        >
          {founders.map((founder) => (
            <SwiperSlide key={founder.Id}>
              <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center">

                <div className="w-80 h-80 lg:w-96 lg:h-96 relative border-2 border-gray-200">
                  <Image
                    src={`/uploads/${founder.Image}`}
                    alt={founder.Name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-6">
                  <blockquote className="text-2xl font-medium text-gray-800 border-l-4 border-green-600 pl-6">
                    {founder.Description}
                  </blockquote>

                  <div>
                    <p className="text-3xl font-bold text-gray-900">{founder.Name}</p>
                    <p className="text-lg text-gray-600 mt-1">{founder.Roll}</p>
                  </div>

                  <a
                    href={founder.Read_More_Url}
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 font-medium hover:bg-green-700 transition-colors"
                  >
                    Read Full Message →
                  </a>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}