export default function NoticeSection() {
  const notices = [
    { id: 1, title: "Admissions Open for Session 2026-27", date: "01 March 2026", isNew: true },
    { id: 2, title: "Annual Sports and Cultural Fest", date: "28 February 2026", isNew: true },
    { id: 3, title: "University Semester Exam Guidelines", date: "20 February 2026", isNew: false },
    { id: 4, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 5, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 6, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 7, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 8, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 9, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
    { id: 10, title: "Guest Lecture on Artificial Intelligence", date: "15 February 2026", isNew: false },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            News & Events
          </h2>
          <button className="text-sm font-semibold text-blue-700">
            View All
          </button>
        </div>

        <div className="border border-gray-300">
          <div className="h-[500px] overflow-y-auto">

            {notices.map((notice, index) => (
              <div
                key={notice.id}
                className={`grid grid-cols-12 items-center px-6 py-4 ${
                  index !== notices.length - 1 ? "border-b border-gray-300" : ""
                }`}
              >
                <div className="col-span-8">
                  <div className="flex items-center gap-3">
                    <p className="text-gray-900 font-medium">
                      {notice.title}
                    </p>

                    {notice.isNew && (
                      <span className="text-[10px] font-bold text-red-600">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-span-3 text-sm text-gray-500">
                  {notice.date}
                </div>

                <div className="col-span-1 text-right">
                  <button className="text-blue-700 text-sm font-semibold">
                    View
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}