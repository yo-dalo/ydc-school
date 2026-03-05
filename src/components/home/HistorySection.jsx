export default function HistorySection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <p className="text-sm font-semibold text-blue-700 mb-3 tracking-wide">
              OUR LEGACY
            </p>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              History Of Yaduvanshi
            </h2>
          </div>

          <div className="md:col-span-2 border-l border-gray-300 pl-8">

            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
              Education forms the basic fabric of one's personality that shapes one into complete human being with a purpose. Our vision of true education is to ensure holistic development of students' mental, physical, emotional and spiritual well-being.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Yaduvanshi Group of Institutions has established new dimensions in the area of Education by creating a chain of premium Educational Institutions. With decades of excellence, the group has become a symbol of quality education, shaping the lives of thousands of students and preparing them for a bright future.
            </p>

            <div className="mt-8">
              <button className="border border-gray-400 px-6 py-3 font-semibold text-gray-800">
                Founder's Message
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}