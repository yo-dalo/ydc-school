"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";

export default function WelcomeSection() {
  const [welcomeData, setWelcomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await axios.get("/api/client/school-welcome-message");
        if (response.data.status === "success") {
          setWelcomeData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching welcome message:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWelcomeMessage();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-green-50 py-20 flex items-center justify-center">
        <div className="text-green-700 font-medium text-xl">Loading Welcome Message...</div>
      </section>
    );
  }

  if (!welcomeData) return null;

  return (
    <section className="w-full bg-green-50 py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="space-y-9">

            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-green-300 text-green-800 font-semibold text-sm tracking-wide">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-green-400 opacity-70 "></span>
                <span className="relative inline-flex h-3 w-3 bg-green-600 "></span>
              </span>
              DISCOVER YADUVANSHI
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {welcomeData.Title.split('to').map((part, index) => (
                index === 1 ? (
                  <React.Fragment key={index}>
                    to <span className="text-green-700">{part.trim()}</span>
                  </React.Fragment>
                ) : part
              ))}
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
              <div dangerouslySetInnerHTML={{ __html: welcomeData.Message }} />
            </div>

            <div className="flex flex-wrap gap-5 pt-5">
              <Link
                href={welcomeData.Read_More_Url?.startsWith('http') ? welcomeData.Read_More_Url : `/about`}
                className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-green-700 hover:bg-green-800 transition-colors duration-200"
              >
                Explore Our Legacy
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <button className="px-8 py-4 font-semibold text-green-800 bg-white border-2 border-green-400 hover:bg-green-50 transition-colors duration-200">
                Watch Campus Tour
              </button>
            </div>

          </div>

          {/* Right: Image area */}
          <div className="relative border-4 border-gray-300 bg-white">

            <div className="relative">
              <Image
                src="/poster/1.jpeg"
                alt="Yaduvanshi Degree College scenic campus view"
                width={1200}
                height={800}
                className="w-full h-[480px] md:h-[560px] lg:h-[620px] object-cover"
                priority
                quality={75}
              />
            </div>

            {/* Simplified floating badges – no heavy shadow/transform */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white border-2 border-green-300 p-5 flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-700 text-white text-3xl md:text-4xl font-black flex items-center justify-center">
                20+
              </div>
              <div>
                <p className="text-gray-900 font-extrabold text-lg md:text-xl">Years of</p>
                <p className="text-green-700 font-bold text-base md:text-lg">Educational Excellence</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 md:-right-8 bg-white border-2 border-green-300 p-5 flex items-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-600 text-white text-2xl font-black flex items-center justify-center">
                100%
              </div>
              <div>
                <p className="text-gray-900 font-bold text-base md:text-lg">Holistic</p>
                <p className="text-gray-700 text-sm md:text-base">Student Development</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}