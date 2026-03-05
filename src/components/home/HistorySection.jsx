export default function HistorySection() {
  return (
    <section className="w-full bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-3 border border-green-200">

          <div className="p-10 border-b md:border-b-0 md:border-r border-green-200">
            <p className="text-sm font-semibold text-green-700 mb-4 tracking-widest">
              OUR LEGACY
            </p>

            <h2 className="text-4xl font-bold text-green-900 leading-tight">
              History Of Yaduvanshi
            </h2>
          </div>

          <div className="md:col-span-2 p-10">

            <p className="text-lg text-green-900 leading-relaxed mb-6 text-justify">
              Education forms the basic fabric of one's personality that shapes one into complete human being with a purpose. Our vision of true education is to ensure holistic development of students' mental, physical, emotional and spiritual well-being.
            </p>

            <p className="text-lg text-green-900 leading-relaxed text-justify">
              Yaduvanshi Group of Institutions has established new dimensions in the area of Education by creating a chain of premium Educational Institutions. With decades of excellence, the group has become a symbol of quality education, shaping the lives of thousands of students and preparing them for a bright future.
            </p>

            <div className="mt-10">
              <button className="border border-green-700 px-6 py-3 font-semibold text-green-900">
                Founder's Message
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}