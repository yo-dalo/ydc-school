"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function AdmissionSection() {
  const [admissionData, setAdmissionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmissionData = async () => {
      try {
        const response = await axios.get("/api/client/admission-open-message");
        if (response.data.status === "success") {
          const data = response.data.data;
          const finalData = Array.isArray(data) ? data[0] : (data.data ? data.data[0] : null);
          setAdmissionData(finalData);
        }
      } catch (error) {
        console.error("Error fetching admission data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmissionData();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 flex items-center justify-center" style={{ background: "linear-gradient(160deg, #052e16 0%, #064e3b 50%, #052e16 100%)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#4ade80", animation: "pulse-dot 1.4s ease-in-out infinite" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#bbf7d0", fontSize: 16, fontWeight: 500 }}>Loading Admission Info…</span>
        </div>
      </section>
    );
  }

  if (!admissionData) return null;

  const titleText = admissionData.Title;
  const match = titleText?.match(/(.*?)(\d{4}-\d{4})/);
  const mainTitle = match ? match[1].trim() : titleText;
  const yearTitle = match ? match[2] : "";

  const applyUrl = admissionData.Read_More_Url?.startsWith("http")
    ? admissionData.Read_More_Url
    : `https://${admissionData.Read_More_Url}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .adm-root { font-family: 'DM Sans', sans-serif; }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.65); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .adm-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.28);
          border-radius: 99px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 18px;
        }
        .adm-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
          animation: pulse-dot 1.8s ease-in-out infinite;
        }

        .adm-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.08;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }
        .adm-year {
          color: #4ade80;
        }

        .adm-life-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 16px 0 20px;
          font-size: 15px;
          font-weight: 700;
          color: #bbf7d0;
          letter-spacing: 0.03em;
        }
        .adm-life-tag::before {
          content: '';
          display: block;
          width: 28px; height: 2px;
          background: #4ade80;
          border-radius: 99px;
        }

        .adm-message {
          font-size: 14.5px;
          line-height: 1.8;
          color: rgba(187,247,208,0.8);
        }
        .adm-message p { margin-bottom: 10px; }

        .adm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #16a34a;
          color: #ffffff;
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 99px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(22,163,74,0.35);
          position: relative;
          overflow: hidden;
        }
        .adm-btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: rgba(255,255,255,0.13);
          transform: skewX(-20deg);
          transition: left 0.4s ease;
        }
        .adm-btn-primary:hover::before { left: 150%; }
        .adm-btn-primary:hover {
          background: #15803d;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(22,163,74,0.4);
        }

        .adm-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          color: #bbf7d0;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 99px;
          border: 1px solid rgba(74,222,128,0.25);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .adm-btn-secondary:hover {
          background: rgba(74,222,128,0.08);
          border-color: rgba(74,222,128,0.5);
          transform: translateY(-2px);
        }

        /* Image card */
        .adm-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          height: 480px;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 32px 64px rgba(0,0,0,0.4);
          animation: floatY 5s ease-in-out infinite;
        }
        .adm-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,46,22,0.85) 0%, rgba(5,46,22,0.2) 50%, transparent 100%);
          z-index: 1;
        }
        .adm-img-card {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          z-index: 2;
          background: rgba(5,46,22,0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(74,222,128,0.2);
          border-radius: 16px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .adm-img-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          background: rgba(74,222,128,0.15);
          border: 1px solid rgba(74,222,128,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #4ade80;
        }
        .adm-corner-tag {
          position: absolute;
          top: 20px; right: 20px;
          z-index: 2;
          background: rgba(22,163,74,0.9);
          backdrop-filter: blur(8px);
          border-radius: 99px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .adm-corner-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #ffffff;
          animation: pulse-dot 1.4s ease-in-out infinite;
        }

        /* Decorative frame */
        .adm-frame {
          position: absolute;
          top: 20px; left: 20px; right: -14px; bottom: -14px;
          border: 1.5px dashed rgba(74,222,128,0.25);
          border-radius: 28px;
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <section
        className="adm-root w-full py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #052e16 0%, #064e3b 50%, #052e16 100%)" }}
      >
        {/* Background orbs */}
        <div style={{ position:"absolute", top:"-100px", left:"5%", width:"360px", height:"360px", background:"radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-80px", right:"5%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />

        {/* Top divider */}
        <div style={{ height:"1px", background:"linear-gradient(to right, transparent, rgba(74,222,128,0.35), transparent)", marginBottom:"72px" }} />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <div style={{ animation: "fadeSlideUp 0.6s ease both" }}>
            <div className="adm-badge">
              <span className="adm-badge-dot" />
              Join Us Today
            </div>

            <h2 className="adm-title">
              {mainTitle}
              {yearTitle && (
                <><br /><span className="adm-year">{yearTitle}</span></>
              )}
            </h2>

            <div className="adm-life-tag">Life @ Yaduvanshi</div>

            <div
              className="adm-message"
              dangerouslySetInnerHTML={{ __html: admissionData.Message }}
            />

            <div className="flex flex-wrap gap-3 mt-10">
              <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="adm-btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Apply For Admission
              </a>
              <button className="adm-btn-secondary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Guidelines
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: "✦", text: "NAAC Accredited" },
                { icon: "✦", text: "26+ Years Legacy" },
                { icon: "✦", text: "55,000+ Alumni" },
              ].map((t) => (
                <div key={t.text} style={{ display:"flex", alignItems:"center", gap:7, fontSize:12, fontWeight:600, color:"rgba(187,247,208,0.6)", letterSpacing:"0.04em" }}>
                  <span style={{ color:"#4ade80", fontSize:8 }}>{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="relative" style={{ animation: "fadeSlideUp 0.6s 0.15s ease both" }}>
            <div className="adm-frame" />
            <div className="adm-img-wrap" style={{ position:"relative", zIndex:1 }}>
              <Image
                src={`/uploads/${admissionData.Image}`}
                alt="Yaduvanshi Students"
                fill
                className="object-cover"
              />
              <div className="adm-img-overlay" />

              {/* Live badge */}
              <div className="adm-corner-tag">
                <span className="adm-corner-dot" />
                Admissions Open
              </div>

              {/* Bottom card */}
              <div className="adm-img-card">
                <div className="adm-img-icon">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Syne', sans-serif", fontSize:15, fontWeight:700, color:"#ffffff", lineHeight:1.2 }}>
                    Ready to shape your future?
                  </p>
                  <p style={{ fontSize:12, color:"#86efac", marginTop:3 }}>
                    Seats are filling fast — apply now.
                  </p>
                </div>
                <a href={applyUrl} target="_blank" rel="noopener noreferrer"
                  style={{ marginLeft:"auto", background:"#16a34a", color:"#fff", fontSize:12, fontWeight:700, padding:"8px 16px", borderRadius:99, whiteSpace:"nowrap", textDecoration:"none", transition:"background 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.background="#15803d"}
                  onMouseOut={e => e.currentTarget.style.background="#16a34a"}
                >
                  Apply →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom divider */}
        <div style={{ height:"1px", background:"linear-gradient(to right, transparent, rgba(74,222,128,0.35), transparent)", marginTop:"72px" }} />
      </section>
    </>
  );
}