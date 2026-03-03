export default function AdmissionSection() {
  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Admission Open
          </h2>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Life @ RPS
          </h3>

          <p className="text-gray-700 leading-7 text-justify">
            The institution adopts, as its goal, the best from our rich and varied
            heritage and inculcates it into the curriculum to bring about all
            round development of the students. One of the aims of the school is
            to inspire creativity amongst students by encouraging them to
            discover their innate talents and aptitudes.
          </p>

          <button className="mt-8 bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-md font-semibold">
            Admissions Open
          </button>
        </div>

        <div className="w-full h-80 bg-green-200 rounded-lg flex items-center justify-center">
          <span className="text-green-900 font-semibold">
            School Image Here
          </span>
        </div>

      </div>
    </section>
  );
}