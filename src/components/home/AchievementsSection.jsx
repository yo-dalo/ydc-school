"use client";
import { useSchool } from "@/context/SchoolContext";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.toString().replace(/\D/g, ""), 10);
    if (isNaN(num)) { setCount(target); return; }
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ number, label, index, animate }) {
  const raw = number.toString().replace(/\D/g, "");
  const suffix = number.toString().replace(/[\d,]/g, "");
  const count = useCountUp(raw, 2000 + index * 200, animate);

  const icons = [
    // Calendar / years
    <svg key="cal" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    // Students
    <svg key="stu" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // Teachers
    <svg key="tea" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>,
    // Awards
    <svg key="awd" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>,
  ];

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .stat-card-anim {
          animation: fadeSlideUp 0.55s ease both;
        }
        .stat-card {
          position: relative;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
          overflow: hidden;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(74,222,128,0.08) 0%, transparent 65%);
          pointer-events: none;
        }
        .stat-card:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,0.07);
          border-color: rgba(74,222,128,0.3);
        }
        .stat-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(74,222,128,0.12);
          border: 1px solid rgba(74,222,128,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          color: #4ade80;
        }
        .stat-divider {
          width: 32px;
          height: 2px;
          background: linear-gradient(to right, transparent, #4ade80, transparent);
          margin: 10px auto 0;
          border-radius: 99px;
        }
      `}</style>

      <div
        className="stat-card stat-card-anim"
        style={{ animationDelay: `${index * 120}ms` }}
      >
        <div className="stat-icon-wrap">{icons[index % icons.length]}</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2.75rem", fontWeight: 800, lineHeight: 1, color: "#ffffff", letterSpacing: "-0.02em" }}>
          {animate ? count.toLocaleString() : parseInt(raw).toLocaleString()}
          {suffix && <span style={{ color: "#4ade80" }}>{suffix}</span>}
        </div>
        <div className="stat-divider" />
        <p style={{ marginTop: 12, fontSize: "13.5px", fontWeight: 600, color: "#bbf7d0", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          {label}
        </p>
      </div>
    </>
  );
}

export default function AchievementsSection() {
  const { schoolInfo, loading } = useSchool();
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const achievements = [
    { id: 1, number: schoolInfo?.Experience || "26", label: "Unparalleled Years" },
    { id: 2, number: schoolInfo?.Students || "55000", label: "Pupils" },
    { id: 3, number: schoolInfo?.Teachers || "3000", label: "Gurus" },
    { id: 4, number: schoolInfo?.Awards || "255", label: "Awards Received" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .achievements-root { font-family: 'DM Sans', sans-serif; }
        .badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.25);
          border-radius: 99px;
          padding: 5px 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 14px;
        }
        .badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="achievements-root w-full py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #052e16 0%, #064e3b 50%, #052e16 100%)" }}
      >
        {/* Subtle background orbs */}
        <div style={{ position: "absolute", top: "-80px", left: "10%", width: "320px", height: "320px", background: "radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "8%", width: "260px", height: "260px", background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Top accent line */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(74,222,128,0.35), transparent)", marginBottom: "64px" }} />

        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="badge-pill">
              <span className="badge-dot" />
              By the numbers
            </div>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Our <span style={{ color: "#4ade80" }}>Achievements</span>
            </h2>
            <p style={{ marginTop: 12, fontSize: "14px", color: "#bbf7d0", opacity: 0.7, maxWidth: "400px", margin: "12px auto 0" }}>
              Decades of excellence, thousands of lives shaped.
            </p>
          </div>

          {/* Stats grid */}
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} style={{ height: 160, borderRadius: 20, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", animation: "pulse 1.5s ease-in-out infinite" }} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {achievements.map((item, i) => (
                <StatCard key={item.id} number={item.number} label={item.label} index={i} animate={animate} />
              ))}
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(74,222,128,0.35), transparent)", marginTop: "64px" }} />
      </section>
    </>
  );
}