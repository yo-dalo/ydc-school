export default function CourseSection() {
  const courses = [
    {
      id: 1,
      title: "Primary Education",
      desc: "Strong foundation with activity-based learning for young students.",
    },
    {
      id: 2,
      title: "Middle School",
      desc: "Balanced academics and co-curricular development programs.",
    },
    {
      id: 3,
      title: "Secondary Education",
      desc: "Focused preparation with modern teaching methodologies.",
    },
    {
      id: 4,
      title: "Senior Secondary",
      desc: "Science, Commerce & Arts streams with expert faculty guidance.",
    },
  ];

  return (
    <section className="w-full bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
          Our Courses
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm leading-6">
                {course.desc}
              </p>
              <button className="mt-6 bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md text-sm">
                Learn More
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}