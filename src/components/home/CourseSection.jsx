export default function CourseSection() {
  const courses = [
    {
      id: 1,
      title: "Bachelor of Arts",
      short: "B.A.",
      desc: "A comprehensive undergraduate program focusing on humanities, arts, and social sciences.",
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Bachelor of Science",
      short: "B.Sc.",
      desc: "Specialized undergraduate program for students with strong aptitude for scientific disciplines.",
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Bachelor of Commerce",
      short: "B.Com",
      desc: "Foundational degree equipping students with knowledge of business, accounting, and finance.",
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Master of Science",
      short: "M.Sc.",
      desc: "Advanced postgraduate programs offering deeper specialization and research opportunities.",
      svg: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .cs-root { font-family: 'DM Sans', sans-serif; }

        .cs-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(22,163,74,0.08);
          border: 1px solid rgba(22,163,74,0.22);
          border-radius: 99px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 14px;
        }
        .cs-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #16a34a;
          animation: cs-pulse 1.8s ease-in-out infinite;
        }
        @keyframes cs-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.4; transform:scale(0.65); }
        }

        /* Cards */
        .cs-card {
          background: #ffffff;
          border: 1px solid #e7f5ee;
          border-radius: 20px;
          padding: 28px 26px 26px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .cs-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #4ade80, #16a34a);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .cs-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(22,163,74,0.12);
          border-color: #bbf7d0;
        }
        .cs-card:hover::before { opacity: 1; }

        .cs-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          display: flex; align-items: center; justify-content: center;
          color: #16a34a;
          margin-bottom: 18px;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .cs-card:hover .cs-icon {
          background: #16a34a;
          border-color: #16a34a;
          color: #ffffff;
        }

        .cs-short {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 6px;
        }
        .cs-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          line-height: 1.25;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .cs-card:hover .cs-title { color: #15803d; }

        .cs-desc {
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 22px;
        }

        .cs-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 13px;
          font-weight: 700;
          color: #16a34a;
          cursor: pointer;
          transition: gap 0.2s;
          background: none; border: none; padding: 0;
        }
        .cs-card:hover .cs-link { gap: 9px; }

        /* Divider */
        .cs-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(22,163,74,0.3), transparent);
        }

        /* CTA btn */
        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid #d1fae5;
          color: #15803d;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          padding: 13px 28px;
          border-radius: 99px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .cs-cta:hover {
          background: #f0fdf4;
          border-color: #86efac;
          transform: translateY(-2px);
        }
      `}</style>

      <section className="cs-root w-full py-20 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(22,163,74,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "-80px", right: "5%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-14 max-w-xl mx-auto">
            <div className="cs-badge">
              <span className="cs-badge-dot" />
              Academics
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, color: "#111827", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
              Courses <span style={{ color: "#16a34a" }}>Offered</span>
            </h2>
            <p style={{ fontSize: "14.5px", color: "#6b7280", lineHeight: 1.7 }}>
              Diverse undergraduate and postgraduate programs tailored to build future leaders.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, i) => (
              <div key={course.id} className="cs-card" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="cs-icon">{course.svg}</div>
                <p className="cs-short">{course.short}</p>
                <h3 className="cs-title">{course.title}</h3>
                <p className="cs-desc">{course.desc}</p>
                <button className="cs-link">
                  Course Details
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="cs-divider my-12" />

          {/* CTA */}
          <div className="text-center">
            <button className="cs-cta">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
              View All Programs
            </button>
          </div>

        </div>
      </section>
    </>
  );
}