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
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-blue-700 tracking-wider">
            ACADEMICS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Courses Offered
          </h2>

          <p className="text-lg text-gray-600">
            We provide undergraduate and postgraduate programs designed to build knowledge and practical skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-gray-300">
          {courses.map((course) => (
            <div
              key={course.id}
              className="p-8 border border-gray-300 bg-white"
            >
              <div className="text-3xl mb-6">
                {course.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {course.desc}
              </p>

              <button className="text-blue-700 text-sm font-semibold">
                Course Details →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-gray-400 text-gray-800 px-8 py-3 font-semibold">
            View All Programs
          </button>
        </div>

      </div>
    </section>
  );
}