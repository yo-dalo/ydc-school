export default function HistorySection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .hs-root { font-family: 'DM Sans', sans-serif; }

        @keyframes hs-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:0.35; transform:scale(0.6); }
        }
        @keyframes hs-fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }

        .hs-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 99px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #16a34a;
          margin-bottom: 16px;
        }
        .hs-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #16a34a;
          box-shadow: 0 0 0 0 rgba(22,163,74,0.5);
          animation: hs-ping 1.6s ease-in-out infinite;
        }
        @keyframes hs-ping {
          0%   { box-shadow: 0 0 0 0 rgba(22,163,74,0.5); }
          70%  { box-shadow: 0 0 0 7px rgba(22,163,74,0); }
          100% { box-shadow: 0 0 0 0 rgba(22,163,74,0); }
        }

        .hs-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #111827;
          line-height: 1.1;
          letter-spacing: -0.025em;
        }

        .hs-card {
          background: #fff;
          border: 1px solid #e7f5ee;
          border-radius: 20px;
          padding: 36px 36px 32px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(22,163,74,0.06);
          animation: hs-fadeUp 0.6s 0.12s ease both;
        }
        .hs-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(to bottom, #4ade80, #16a34a);
          border-radius: 4px 0 0 4px;
        }
        .hs-card::after {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 180px; height: 180px;
          background: radial-gradient(circle, rgba(74,222,128,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .hs-quote-icon {
          position: absolute;
          top: 24px; right: 28px;
          opacity: 0.07;
          color: #16a34a;
        }

        .hs-text {
          font-size: 15px;
          line-height: 1.85;
          color: #374151;
        }

        .hs-divider {
          width: 100%;
          height: 1px;
          background: #f0fdf4;
          margin: 20px 0;
        }

        .hs-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Syne', sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #16a34a;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: gap 0.2s, color 0.2s;
          text-decoration: none;
        }
        .hs-link:hover {
          gap: 11px;
          color: #15803d;
        }

        .hs-dot-bg {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(22,163,74,0.05) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }
        .hs-divider-line {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(22,163,74,0.25), transparent);
        }
      `}</style>

      <section className="hs-root w-full py-20 bg-white relative overflow-hidden">
        <div className="hs-dot-bg" />
        <div style={{ position:"absolute", bottom:"-60px", right:"6%", width:"280px", height:"280px", background:"radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)", pointerEvents:"none" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">

            {/* ── Left: Label + Title ── */}
            <div className="w-full md:w-1/3" style={{ animation:"hs-fadeUp 0.55s ease both" }}>
              <div className="hs-badge">
                <span className="hs-badge-dot" />
                Our Legacy
              </div>

              <h2 className="hs-title">
                History Of{" "}
                <span style={{ color:"#16a34a" }}>Yaduvanshi</span>
              </h2>

              {/* Green accent bar */}
              <div style={{ width:44, height:3, background:"linear-gradient(to right,#4ade80,#16a34a)", borderRadius:99, marginTop:16 }} />

              {/* Side note */}
              <p style={{ marginTop:20, fontSize:13, color:"#9ca3af", lineHeight:1.7, fontWeight:500 }}>
                Decades of excellence, shaping lives and building a brighter future for thousands of students.
              </p>

              {/* Year chip */}
              <div style={{ marginTop:24, display:"inline-flex", alignItems:"center", gap:10, background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:12, padding:"10px 16px" }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"#16a34a", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                  <svg style={{ width:18, height:18, color:"#fff" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:18, color:"#111827", lineHeight:1 }}>Est. 1998</p>
                  <p style={{ fontSize:11, color:"#16a34a", fontWeight:600, marginTop:2, textTransform:"uppercase", letterSpacing:"0.08em" }}>26+ Years Strong</p>
                </div>
              </div>
            </div>

            {/* ── Right: Content card ── */}
            <div className="w-full md:w-2/3">
              <div className="hs-card">
                {/* Big decorative quote mark */}
                <div className="hs-quote-icon">
                  <svg width="80" height="64" fill="currentColor" viewBox="0 0 32 24">
                    <path d="M0 24V14.4C0 6.432 4.032 1.44 12.096 0l1.536 2.496C9.984 3.552 8.064 6.24 7.68 10.08H12V24H0zm17.376 0V14.4C17.376 6.432 21.408 1.44 29.472 0L31.008 2.496C27.36 3.552 25.44 6.24 25.056 10.08H29.376V24H17.376z"/>
                  </svg>
                </div>

                <p className="hs-text" style={{ marginBottom:18 }}>
                  Education forms the basic fabric of one's personality that shapes one into a complete human being with a purpose. Our vision of true education is to ensure holistic development of students' mental, physical, emotional and spiritual well-being.
                </p>

                <div className="hs-divider" />

                <p className="hs-text">
                  Yaduvanshi Group of Institutions has established new dimensions in the area of Education by creating a chain of premium Educational Institutions. With decades of excellence, the group has become a beacon of quality education, shaping the lives of thousands of students and preparing them for a bright global future.
                </p>

                <div style={{ marginTop:28, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
                  <button className="hs-link">
                    Founder's Message
                    <svg style={{ width:15, height:15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {/* Trust chips */}
                  <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
                    {["NAAC Accredited", "UGC Recognized"].map((tag) => (
                      <span key={tag} style={{ display:"inline-flex", alignItems:"center", gap:5, background:"#f0fdf4", border:"1px solid #bbf7d0", borderRadius:99, padding:"4px 12px", fontSize:11, fontWeight:600, color:"#16a34a", letterSpacing:"0.04em" }}>
                        <span style={{ width:5, height:5, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="hs-divider-line mt-20" />
      </section>
    </>
  );
}