// components/FounderMessage.tsx
import Image from 'next/image';
import React from 'react';

const founderImage = '/poster/34.png'; // ← your actual path

const FounderMessage = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-blue-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Founder`s Message
          </h2>
          <div className="mt-4 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A heartfelt note from our founder on the philosophy and purpose that drives our educational journey.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
          {/* Image Column */}
          <div className="flex-shrink-0 relative group">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
              {/* Optional subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
              
              <Image
                src={founderImage}
                alt="Founder - Visionary Leader"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>

            {/* Optional decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-indigo-200/60 dark:border-indigo-900/40 -z-10 animate-pulse-slow"></div>
          </div>

          {/* Text Column */}
          <div className="flex-1 space-y-8 lg:space-y-10">
            <blockquote className="text-xl md:text-2xl lg:text-2.5xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed italic tracking-wide relative pl-6 md:pl-8 border-l-4 border-indigo-500/70">
              <span className="absolute -left-3 -top-4 text-6xl text-indigo-200 dark:text-indigo-950 opacity-40 select-none">“</span>
              Education forms the basic fabric of one's personality that shapes one into a complete human being with a purpose. Our vision of true education is to ensure holistic development of students—mental, physical, emotional, and spiritual.
              <span className="absolute -right-3 -bottom-6 text-6xl text-indigo-200 dark:text-indigo-950 opacity-40 select-none">”</span>
            </blockquote>

            <div className="pt-4">
              <p className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                [Founder’s Full Name]
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                Founder & Director
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#full-message" // ← change to actual link (or /about/founder or modal trigger)
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Read Full Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;