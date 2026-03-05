export default function CourseSection() {
  const courses = [
    {
      id: 1,
      title: "Bachelor of Arts (B.A.)",
      desc: "A comprehensive undergraduate program focusing on humanities, arts, and social sciences.",
      icon: "📚"
    },
    {
      id: 2,
      title: "Bachelor of Science (B.Sc.)",
      desc: "Specialized undergraduate program designed for students with strong aptitude for scientific disciplines.",
      icon: "🔬"
    },
    {
      id: 3,
      title: "Bachelor of Commerce (B.Com)",
      desc: "Foundational degree equipping students with knowledge of business, accounting, and finance.",
      icon: "💼"
    },
    {
      id: 4,
      title: "Master of Science (M.Sc.)",
      desc: "Advanced postgraduate programs offering deeper specialization and research opportunities.",
      icon: "🎓"
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="mb-16 border-b border-green-200 pb-8">
          <p className="text-sm font-semibold text-green-700 tracking-widest mb-3">
            ACADEMICS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Courses Offered
          </h2>

          <p className="text-lg text-green-800 max-w-2xl">
            We provide undergraduate and postgraduate programs designed to build knowledge and practical skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-green-200">

          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`p-10 border-green-200 flex flex-col justify-between ${
                index !== courses.length - 1 ? "lg:border-r border-b lg:border-b-0" : ""
              }`}
            >
              <div>
                <div className="text-4xl mb-6">
                  {course.icon}
                </div>

                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {course.title}
                </h3>

                <p className="text-green-800 text-sm leading-relaxed mb-8">
                  {course.desc}
                </p>
              </div>

              <button className="text-green-700 text-sm font-semibold border-t border-green-200 pt-4 text-left">
                Course Details →
              </button>
            </div>
          ))}

        </div>

        <div className="mt-16 border-t border-green-200 pt-10">
          <button className="border border-green-700 text-green-900 px-8 py-3 font-semibold">
            View All Programs
          </button>
        </div>

      </div>
    </section>
  );
}