import Image from "next/image";

export default function StudentToppers() {
  const toppers = [
    {
      id: 1,
      name: "Aman Yadav",
      father: "Mr. Rajesh Yadav",
      image: "/students/1.jpg",
      rank: "1st Rank",
      percentage: "98.5%",
      stream: "Science",
    },
    {
      id: 2,
      name: "Priya Sharma",
      father: "Mr. Suresh Sharma",
      image: "/students/2.jpg",
      rank: "2nd Rank",
      percentage: "97.8%",
      stream: "Science",
    },
    {
      id: 3,
      name: "Rahul Verma",
      father: "Mr. Mahesh Verma",
      image: "/students/3.jpg",
      rank: "1st Rank",
      percentage: "96.4%",
      stream: "Commerce",
    },
    {
      id: 4,
      name: "Sneha Rao",
      father: "Mr. Vijay Rao",
      image: "/students/4.jpg",
      rank: "1st Rank",
      percentage: "95.9%",
      stream: "Arts",
    },
  ];

  return (
    <section className="w-full bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-14 border-b border-green-200 pb-6">
          <p className="text-sm font-semibold text-green-700 mb-3 tracking-widest">
            OUR PRIDE
          </p>
          <h2 className="text-4xl font-bold text-green-900">
            Student Toppers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-green-200 bg-white">

          {toppers.map((student, index) => (
            <div
              key={student.id}
              className={`p-6 border-green-200 ${
                index !== toppers.length - 1
                  ? "lg:border-r border-b lg:border-b-0"
                  : ""
              }`}
            >
              <div className="relative w-full h-64 mb-6 border border-green-200">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm text-green-700 mb-1">
                {student.stream}
              </p>

              <h3 className="text-xl font-semibold text-green-900 mb-1">
                {student.name}
              </h3>

              <p className="text-sm text-green-800 mb-3">
                {student.father}
              </p>

              <div className="flex justify-between text-sm font-medium text-green-900 mb-4 border-t border-green-200 pt-3">
                <span>{student.rank}</span>
                <span>{student.percentage}</span>
              </div>

              <button className="text-sm font-semibold text-green-700 border-b border-green-600 pb-1">
                View Profile
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}