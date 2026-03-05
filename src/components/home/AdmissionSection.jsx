export default function AdmissionSection() {
  return (
    <section className="w-full bg-green-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">

        <div className="p-12 border-b lg:border-b-0 lg:border-r border-green-200">

          <p className="text-sm font-semibold text-green-700 tracking-widest mb-4">
            ADMISSION OPEN
          </p>

          <h2 className="text-5xl font-bold text-green-900 mb-6">
            2026 – 2027
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Life @ Yaduvanshi
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            The institution adopts the best from our rich and varied heritage and integrates it into the curriculum to ensure all-round development of students. Our aim is to inspire creativity and encourage learners to discover their natural talents and abilities within a modern campus environment.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-green-700 text-white px-8 py-4 font-semibold border border-green-700">
              APPLY FOR ADMISSION
            </button>

            <button className="border border-green-700 text-green-800 px-8 py-4 font-semibold">
              DOWNLOAD GUIDELINES
            </button>
          </div>

        </div>

        <div className="relative min-h-[420px]">

          <img
            src="https://ydcmgh.yaduvanshigroup.edu.in/images/slider/3.jpg"
            alt="Students"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 right-0 border-b border-green-700 bg-white p-6">
            <h4 className="text-xl font-semibold text-green-900">
              Ready to shape your future?
            </h4>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-green-900 text-white p-8 border-t border-green-700">
            <p className="text-lg">
              Admissions are filling fast. Secure your seat today.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}