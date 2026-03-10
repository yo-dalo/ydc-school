"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";

export default function FounderMessage() {
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("./api/client/messages");
        if (response.data.status === "success") {
          setFounders(response.data.data.data);
        }
      } catch (error) {}
      finally { setLoading(false); }
    };
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-24 flex items-center justify-center" style={{ background:"linear-gradient(160deg,#052e16 0%,#064e3b 50%,#052e16 100%)" }}>
        <div className="flex items-center gap-3">
          <div style={{ width:10, height:10, borderRadius:"50%", background:"#4ade80", animation:"fm-pulse 1.4s ease-in-out infinite" }} />
          <span style={{ fontFamily:"'DM Sans',sans-serif", color:"#bbf7d0", fontSize:16, fontWeight:500 }}>Loading Messages…</span>
        </div>
      </section>
    );
  }

  if (founders.length === 0) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&family=Lora:ital,wght@1,500;1,600&display=swap');

        .fm-root { font-family: 'DM Sans', sans-serif; }

        @keyframes fm-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.35; transform:scale(0.6); }
        }
        @keyframes fm-ping {
          0%   { box-shadow: 0 0 0 0 rgba(74,222,128,0.5); }
          70%  { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
          100% { box-shadow: 0 0 0 0 rgba(74,222,128,0); }
        }
        @keyframes fm-fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .fm-badge {
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
          margin-bottom: 14px;
        }
        .fm-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #4ade80;
          animation: fm-ping 1.7s ease-in-out infinite;
        }

        /* Image */
        .fm-img-wrap {
          position: relative;
          flex-shrink: 0;
          width: 280px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(74,222,128,0.15);
          box-shadow: 0 24px 48px rgba(0,0,0,0.35);
        }
        @media (min-width:1024px) {
          .fm-img-wrap { width: 320px; }
        }
        .fm-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,46,22,0.6) 0%, transparent 55%);
          z-index: 1;
        }
        .fm-img-name-card {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: 18px 20px;
          background: linear-gradient(to top, rgba(5,46,22,0.92), transparent);
        }

        /* Quote card */
        .fm-quote-card {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 36px 36px 32px;
          position: relative;
          overflow: hidden;
        }
        .fm-quote-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #4ade80, #16a34a);
          border-radius: 3px 3px 0 0;
        }
        .fm-quote-card::after {
          content: '';
          position: absolute;
          top: -50px; right: -50px;
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .fm-big-quote {
          position: absolute;
          top: 20px; right: 24px;
          opacity: 0.07;
          color: #4ade80;
        }

        .fm-blockquote {
          font-family: 'Lora', serif;
          font-style: italic;
          font-size: clamp(15px, 2vw, 18px);
          line-height: 1.8;
          color: #d1fae5;
          margin-bottom: 28px;
          position: relative;
          z-index: 1;
        }

        .fm-divider {
          width: 100%;
          height: 1px;
          background: rgba(74,222,128,0.12);
          margin: 22px 0;
        }

        .fm-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #16a34a;
          color: #fff;
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 99px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(22,163,74,0.35);
          transition: background 0.2s, transform 0.2s;
        }
        .fm-read-btn::before {
          content:'';
          position:absolute; top:0; left:-100%;
          width:60%; height:100%;
          background:rgba(255,255,255,0.14);
          transform:skewX(-20deg);
          transition:left 0.4s ease;
        }
        .fm-read-btn:hover::before { left:150%; }
        .fm-read-btn:hover { background:#15803d; transform:translateY(-2px); }

        /* Swiper pagination override */
        .fm-swiper .swiper-pagination-bullet {
          background: rgba(74,222,128,0.35);
          width: 8px; height: 8px;
          opacity: 1;
          transition: all 0.2s;
        }
        .fm-swiper .swiper-pagination-bullet-active {
          background: #4ade80;
          width: 24px;
          border-radius: 99px;
        }

        .fm-gradient-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(74,222,128,0.35), transparent);
        }
      `}</style>

      <section
        className="fm-root w-full py-20 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#052e16 0%,#064e3b 50%,#052e16 100%)" }}
      >
        {/* Orbs */}
        <div style={{ position:"absolute", top:"-80px", left:"6%", width:"320px", height:"320px", background:"radial-gradient(circle,rgba(74,222,128,0.06) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-60px", right:"5%", width:"260px", height:"260px", background:"radial-gradient(circle,rgba(16,185,129,0.07) 0%,transparent 70%)", pointerEvents:"none" }} />

        <div className="fm-gradient-divider" style={{ marginBottom:64 }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-14" style={{ animation:"fm-fadeUp 0.55s ease both" }}>
            <div className="fm-badge" style={{ margin:"0 auto 14px" }}>
              <span className="fm-badge-dot" />
              Leadership
            </div>
            <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(1.8rem,4vw,2.75rem)", fontWeight:800, color:"#fff", lineHeight:1.1, letterSpacing:"-0.025em", marginBottom:12 }}>
              Founder's <span style={{ color:"#4ade80" }}>Message</span>
            </h2>
            <p style={{ fontSize:"14.5px", color:"rgba(187,247,208,0.7)", maxWidth:520, margin:"0 auto", lineHeight:1.7 }}>
              A heartfelt note from our leadership on the philosophy and purpose that drives our educational journey.
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            loop={founders.length > 1}
            className="fm-swiper w-full"
            style={{ paddingBottom: 48 }}
          >
            {founders.map((founder, i) => (
              <SwiperSlide key={founder.Id}>
                <div
                  className="flex flex-col lg:flex-row gap-8 items-start lg:items-stretch"
                  style={{ animation:`fm-fadeUp 0.6s ${i * 80}ms ease both` }}
                >
                  {/* Image */}
                  <div className="fm-img-wrap" style={{ height:360 }}>
                    <Image
                      src={`/uploads/${founder.Image}`}
                      alt={founder.Name}
                      fill
                      className="object-cover"
                    />
                    <div className="fm-img-overlay" />
                    <div className="fm-img-name-card">
                      <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:16, color:"#fff", lineHeight:1.2 }}>{founder.Name}</p>
                      <p style={{ fontSize:12, color:"#86efac", marginTop:3, fontWeight:500 }}>{founder.Roll}</p>
                    </div>
                  </div>

                  {/* Quote card */}
                  <div className="fm-quote-card">
                    {/* Decorative large quote mark */}
                    <div className="fm-big-quote">
                      <svg width="90" height="72" fill="currentColor" viewBox="0 0 32 24">
                        <path d="M0 24V14.4C0 6.432 4.032 1.44 12.096 0l1.536 2.496C9.984 3.552 8.064 6.24 7.68 10.08H12V24H0zm17.376 0V14.4C17.376 6.432 21.408 1.44 29.472 0L31.008 2.496C27.36 3.552 25.44 6.24 25.056 10.08H29.376V24H17.376z"/>
                      </svg>
                    </div>

                    <blockquote className="fm-blockquote">
                      "{founder.Description}"
                    </blockquote>

                    <div className="fm-divider" />

                    {/* Name + Role (desktop duplicate for context) */}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
                      <div>
                        <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:18, color:"#fff", lineHeight:1.2 }}>{founder.Name}</p>
                        <p style={{ fontSize:13, color:"#86efac", fontWeight:500, marginTop:3 }}>{founder.Roll}</p>
                      </div>

                      <a href={founder.Read_More_Url} className="fm-read-btn">
                        Read Full Message
                        <svg style={{ width:14, height:14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="fm-gradient-divider" style={{ marginTop:64 }} />
      </section>
    </>
  );
}