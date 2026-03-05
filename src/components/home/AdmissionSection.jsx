export default function AdmissionSection() {
  return (
    <section className="w-full bg-blue-900 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">

        <div className="text-white">
          <span className="inline-block text-sm font-semibold tracking-wider text-blue-200 mb-4">
            JOIN US TODAY
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Admissions Open <br />
            <span className="text-blue-300">2026-2027</span>
          </h2>

          <h3 className="text-2xl font-semibold mb-6 border-l-4 border-blue-400 pl-4">
            Life @ Yaduvanshi
          </h3>

          <p className="text-blue-100 leading-relaxed text-lg mb-8">
            The institution adopts the best from our rich and varied heritage and integrates it into the curriculum to ensure all-round development of students. Our aim is to inspire creativity and encourage learners to discover their natural talents and abilities within a modern campus environment.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-900 px-8 py-4 font-semibold">
              Apply For Admission
            </button>

            <button className="border border-white text-white px-8 py-4 font-semibold">
              Download Guidelines
            </button>
          </div>
        </div>

        <div className="w-full h-96 lg:h-[480px] border border-blue-700 relative overflow-hidden">
          <img
            src="https://ydcmgh.yaduvanshigroup.edu.in/images/slider/3.jpg"
            alt="Yaduvanshi Students"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-blue-950/80 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">
              Ready to shape your future?
            </h3>
            <p className="text-blue-200">
              Admissions are filling fast.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}