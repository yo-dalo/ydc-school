export default function NoticeSection() {
  const notices = [
    {
      id: 1,
      title: "Admissions Open for 2026-27",
      date: "01 March 2026",
    },
    {
      id: 2,
      title: "Annual Sports Day on 25th March",
      date: "28 February 2026",
    },
    {
      id: 3,
      title: "Board Exam Date Sheet Released",
      date: "20 February 2026",
    },
    {
      id: 4,
      title: "Parent-Teacher Meeting Notice",
      date: "15 February 2026",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-green-800 mb-10 text-center">
          Notice Board
        </h2>

        <div className="bg-green-50 rounded-xl shadow-md p-6">
          <ul className="space-y-6">
            {notices.map((notice) => (
              <li
                key={notice.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {notice.date}
                  </p>
                </div>

                <button className="bg-green-800 hover:bg-green-900 text-white px-4 py-2 rounded-md text-sm">
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}