export default function NoticeSection() {
  const notices = [
    {
      id: 1,
      title: "Admissions Open for Session 2026-27",
      date: "01 March 2026",
      isNew: true,
    },
    {
      id: 2,
      title: "Annual Sports and Cultural Fest",
      date: "28 February 2026",
      isNew: true,
    },
    {
      id: 3,
      title: "University Semester Exam Guidelines",
      date: "20 February 2026",
      isNew: false,
    },
    {
      id: 4,
      title: "Guest Lecture on Artificial Intelligence",
      date: "15 February 2026",
      isNew: false,
    },
  ];

  return (
    <section className="w-full bg-gray-50/50 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-12 flex flex-col items-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-indigo-100 text-indigo-800 text-sm font-bold tracking-wider mb-4 border border-indigo-200">
            LATEST UPDATES
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            News & Events
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-2 border border-gray-100">
          <div className="bg-blue-50/50 rounded-xl overflow-hidden p-4 sm:p-8 border border-blue-50">
            <ul className="space-y-4">
              {notices.map((notice) => (
                <li
                  key={notice.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
                >
                  <div className="mb-4 sm:mb-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="bg-red-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-md animate-pulse">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {notice.date}
                    </p>
                  </div>

                  <button className="w-full sm:w-auto bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white font-bold px-6 py-2.5 rounded-lg transition-colors border border-blue-100 hover:border-transparent flex items-center justify-center gap-2">
                    View
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}