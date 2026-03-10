"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function WelcomeSection() {
  const [welcomeData, setWelcomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await axios.get("/api/client/school-welcome-message");
        if (response.data.status === "success") {
          setWelcomeData(response.data.data[0]);
        }
      } catch (error) {
        console.error("Error fetching welcome message:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWelcomeMessage();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 bg-white flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div style={{ width:10, height:10, borderRadius:"50%", background:"#16a34a", animation:"ws-pulse 1.4s ease-in-out infinite" }} />
          <span style={{ fontFamily:"'DM Sans',sans-serif", color:"#16a34a", fontSize:16, fontWeight:500 }}>Loading…</span>
        </div>
      </section>
    );
  }

  if (!welcomeData) return null;

  // Split title at "to" for color highlight
  const titleParts = welcomeData.Title.split(/\bto\b/i);
  const afterTo = titleParts[1]?.trim() ?? "";
  const beforeTo = titleParts[0]?.trim() ?? welcomeData.Title;

  const readMoreUrl = welcomeData.Read_More_Url?.startsWith("http")
    ? welcomeData.Read_More_Url
    : `/about`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .ws-root { font-family: 'DM Sans', sans-serif; }

        @keyframes ws-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.35; transform:scale(0.6); }
        }
        @keyframes ws-fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes ws-floatY {
          0%,100% { transform:translateY(0); }
          50%     { transform:translateY(-8px); }
        }

        .ws-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 99px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #16a34a;
        }
        .ws-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #16a34a;
          box-shadow: 0 0 0 0 rgba(22,163,74,0.5);
          animation: ws-ping 1.6s ease-in-out infinite;
        }
        @keyframes ws-ping {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .ws-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.1rem, 5vw, 3.5rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.08;
          letter-spacing: -0.025em;
        }
        .ws-title-green { color: #16a34a; }

        .ws-message {
          font-size: 15px;
          line-height: 1.8;
          color: #4b5563;
        }
        .ws-message p { margin-bottom: 10px; }

        /* Buttons */
        .ws-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #16a34a;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 99px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(22,163,74,0.3);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .ws-btn-primary::before {
          content:'';
          position:absolute; top:0; left:-100%;
          width:60%; height:100%;
          background:rgba(255,255,255,0.14);
          transform:skewX(-20deg);
          transition:left 0.4s ease;
        }
        .ws-btn-primary:hover::before { left:150%; }
        .ws-btn-primary:hover {
          background:#15803d;
          transform:translateY(-2px);
          box-shadow:0 8px 28px rgba(22,163,74,0.38);
        }

        .ws-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #15803d;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 99px;
          border: 1.5px solid #bbf7d0;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .ws-btn-secondary:hover {
          background: #f0fdf4;
          border-color: #86efac;
          transform: translateY(-2px);
        }

        /* Image column */
        .ws-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 32px 64px rgba(0,0,0,0.1);
          border: 1px solid #e5e7eb;
          animation: ws-floatY 5.5s ease-in-out infinite;
        }
        .ws-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,46,22,0.35) 0%, transparent 55%);
          z-index: 1;
        }

        /* Floating badges */
        .ws-float-badge {
          position: absolute;
          z-index: 2;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .ws-float-num {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          color: #fff;
          border-radius: 12px;
          background: #16a34a;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Dot grid bg */
        .ws-dot-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(22,163,74,0.07) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        /* Decorative frame */
        .ws-frame {
          position: absolute;
          top: 18px; left: 18px; right: -14px; bottom: -14px;
          border: 1.5px dashed rgba(22,163,74,0.2);
          border-radius: 28px;
          pointer-events: none;
          z-index: 0;
        }

        /* Divider */
        .ws-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(22,163,74,0.25), transparent);
        }
      `}</style>

      <section className="ws-root w-full py-20 bg-white relative overflow-hidden">
        <div className="ws-dot-bg" />
        <div style={{ position:"absolute", top:"-60px", right:"8%", width:"300px", height:"300px", background:"radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-40px", left:"5%", width:"260px", height:"260px", background:"radial-gradient(circle, rgba(22,163,74,0.05) 0%, transparent 70%)", pointerEvents:"none" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* ── Left: Text ── */}
            <div style={{ animation:"ws-fadeUp 0.6s ease both" }}>

              <div className="ws-badge" style={{ marginBottom:20 }}>
                <span className="ws-badge-dot" />
                Discover Yaduvanshi
              </div>

              <h2 className="ws-title" style={{ marginBottom:20 }}>
                {beforeTo}{" "}
                {afterTo && (
                  <>to <span className="ws-title-green">{afterTo}</span></>
                )}
              </h2>

              {/* Accent line */}
              <div style={{ width:48, height:3, background:"linear-gradient(to right,#4ade80,#16a34a)", borderRadius:99, marginBottom:22 }} />

              <div
                className="ws-message"
                dangerouslySetInnerHTML={{ __html: welcomeData.Message }}
              />

              <div className="flex flex-wrap gap-3 mt-10">
                <Link href={readMoreUrl} className="ws-btn-primary">
                  Explore Our Legacy
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button className="ws-btn-secondary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Campus Tour
                </button>
              </div>

              {/* Mini stats row */}
              <div className="flex flex-wrap gap-8 mt-12 pt-10" style={{ borderTop:"1px solid #f3f4f6" }}>
                {[
                  { num:"26+", label:"Years Legacy" },
                  { num:"55K+", label:"Alumni" },
                  { num:"255+", label:"Awards" },
                ].map((s) => (
                  <div key={s.label}>
                    <p style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:"#111827", lineHeight:1 }}>{s.num}</p>
                    <p style={{ fontSize:12, fontWeight:600, color:"#9ca3af", marginTop:4, textTransform:"uppercase", letterSpacing:"0.08em" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Image ── */}
            <div className="relative" style={{ animation:"ws-fadeUp 0.6s 0.15s ease both" }}>
              <div className="ws-frame" />
              <div className="ws-img-wrap" style={{ position:"relative", zIndex:1 }}>
                <Image
                  src="/poster/1.jpeg"
                  alt="Yaduvanshi Degree College campus"
                  width={1200}
                  height={800}
                  className="w-full object-cover"
                  style={{ height:"clamp(380px, 50vw, 560px)" }}
                  priority
                  quality={80}
                />
                <div className="ws-img-overlay" />

                {/* Bottom-left badge */}
                <div className="ws-float-badge" style={{ bottom:"-20px", left:"-16px" }}>
                  <div className="ws-float-num" style={{ width:56, height:56, fontSize:18 }}>20+</div>
                  <div>
                    <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:14, color:"#111827", lineHeight:1.2 }}>Years of</p>
                    <p style={{ fontSize:12, color:"#16a34a", fontWeight:600, marginTop:2 }}>Educational Excellence</p>
                  </div>
                </div>

                {/* Top-right badge */}
                <div className="ws-float-badge" style={{ top:"-20px", right:"-16px" }}>
                  <div className="ws-float-num" style={{ width:50, height:50, fontSize:15 }}>100%</div>
                  <div>
                    <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:13, color:"#111827", lineHeight:1.2 }}>Holistic</p>
                    <p style={{ fontSize:12, color:"#6b7280", marginTop:2 }}>Student Development</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="ws-divider mt-20" />
      </section>
    </>
  );
}