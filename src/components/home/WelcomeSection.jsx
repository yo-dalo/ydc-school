export default function WelcomeSection() {
  return (
    <section className="w-full relative bg-white py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block py-1.5 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-bold tracking-wider mb-4 border border-blue-200">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Yaduvanshi Degree College</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed text-justify">
              <p>
                Yaduvanshi Degree College, Mahendergarh is among the top residential Colleges in India. It was established under the aegis of <span className="text-gray-900 font-bold">‘Rao Chiranji Lal Samriti Jan Seva Trust’</span>, Mahendergarh.
              </p>
              <p>
                It is situated on Bucholi Road, in the east of the town Mahendergarh on the bank of the river ‘Dohan’. The College campus has a splendid architectural beauty designed by expert architects using special earthquake resistance devices.
              </p>
              <p>
                The College lies in a serene and pollution-free environment. The College environment is congenial and conducive to the holistic development of the child.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_8px_15px_-3px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1">
                View Profile
              </button>
            </div>
          </div>

          {/* Right Floating Images */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
            {/* Background geometric shape */}
            <div className="absolute inset-4 -right-6 lg:-right-4 -bottom-6 lg:-bottom-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-[2rem] transform -rotate-3 z-0"></div>

            <div className="relative w-full h-full rounded-[2rem] border-8 border-white shadow-2xl overflow-hidden bg-gray-100 group z-10">
              <img
                src="https://ydcmgh.yaduvanshigroup.edu.in/images/slider/2.jpg"
                alt="Yaduvanshi Campus"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                // onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" }} // fallback if site blocks hotlinking
              />
              <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Experience Badge overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-gray-100 flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex justify-center items-center text-2xl font-black">
                25+
              </div>
              <div>
                <p className="text-gray-900 font-extrabold text-xl">Years of</p>
                <p className="text-gray-500 font-semibold">Excellence</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}