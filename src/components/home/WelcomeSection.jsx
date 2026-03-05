// components/WelcomeSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-sm font-semibold tracking-widest text-indigo-700">
              YADUVANSHI DEGREE COLLEGE
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Welcome to <br />
              Yaduvanshi Degree College
            </h1>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Yaduvanshi Degree College, Mahendergarh is recognized as one of
                the prominent residential colleges dedicated to academic
                excellence and character development.
              </p>

              <p>
                Established under the vision of{" "}
                <span className="font-semibold text-gray-900">
                  Rao Chiranji Lal Samriti Jan Seva Trust
                </span>
                , the institution focuses on providing a disciplined and
                enriching educational environment for students.
              </p>

              <p>
                The campus is located near the peaceful surroundings of the
                Dohan River, offering a calm atmosphere that supports learning,
                creativity and personal growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/about"
                className="px-7 py-3 text-white bg-indigo-700 font-semibold hover:bg-indigo-800 transition-colors"
              >
                Explore College
              </Link>

              <button className="px-7 py-3 border border-gray-300 font-semibold text-gray-700 hover:border-gray-500 transition-colors">
                Campus Tour
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="border border-gray-300">
              <Image
                src="/poster/1.jpeg"
                alt="Yaduvanshi Degree College Campus"
                width={900}
                height={600}
                className="w-full h-[420px] md:h-[520px] object-cover"
                priority
              />
            </div>

            {/* Info Strip */}
            <div className="grid grid-cols-2 border border-gray-300 mt-6">
              <div className="p-6 border-r border-gray-300">
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-gray-600 mt-1">Years of Excellence</p>
              </div>

              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-gray-600 mt-1">Holistic Development</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}