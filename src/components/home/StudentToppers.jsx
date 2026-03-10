"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

export default function StudentToppers() {
  const [toppers, setToppers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const response = await axios.get("/api/client/toper");
        if (response.data.status === "success") setToppers(response.data.data.data);
      } catch (e) {}
      finally { setLoading(false); }
    };
    fetchToppers();
  }, []);

  if (loading) return (
    <section className="w-full py-24 flex items-center justify-center" style={{ background:"linear-gradient(160deg,#052e16 0%,#064e3b 50%,#052e16 100%)" }}>
      <div style={{ display:"flex",alignItems:"center",gap:10 }}>
        <div style={{ width:10,height:10,borderRadius:"50%",background:"#4ade80",animation:"st-pulse 1.4s ease-in-out infinite" }} />
        <span style={{ fontFamily:"'DM Sans',sans-serif",color:"#bbf7d0",fontSize:16,fontWeight:500 }}>Loading Toppers…</span>
      </div>
    </section>
  );

  if (toppers.length === 0) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .st-root { font-family:'DM Sans',sans-serif; }
        @keyframes st-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.6)} }
        @keyframes st-ping { 0%{box-shadow:0 0 0 0 rgba(74,222,128,.5)} 70%{box-shadow:0 0 0 8px rgba(74,222,128,0)} 100%{box-shadow:0 0 0 0 rgba(74,222,128,0)} }
        @keyframes st-fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }

        .st-badge { display:inline-flex;align-items:center;gap:7px;background:rgba(74,222,128,.1);border:1px solid rgba(74,222,128,.28);border-radius:99px;padding:5px 16px;font-size:11px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#4ade80; }
        .st-badge-dot { width:6px;height:6px;border-radius:50%;background:#4ade80;animation:st-ping 1.7s ease-in-out infinite; }

        /* Card */
        .st-card {
          background:rgba(255,255,255,.04);
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px;
          overflow:hidden;
          transition:transform .25s,box-shadow .25s,border-color .25s;
          animation:st-fadeUp .5s ease both;
          display:flex;flex-direction:column;
        }
        .st-card:hover {
          transform:translateY(-7px);
          box-shadow:0 24px 48px rgba(0,0,0,.3);
          border-color:rgba(74,222,128,.3);
        }

        /* Image */
        .st-img-wrap { position:relative;height:220px;overflow:hidden; }
        .st-img-wrap img { transition:transform .5s ease; }
        .st-card:hover .st-img-wrap img { transform:scale(1.06); }
        .st-img-overlay { position:absolute;inset:0;background:linear-gradient(to top,rgba(5,46,22,.85) 0%,rgba(5,46,22,.1) 55%,transparent 100%);z-index:1; }

        /* Rank badge */
        .st-rank {
          position:absolute;top:14px;right:14px;z-index:2;
          background:#f59e0b;color:#78350f;
          font-family:'Syne',sans-serif;font-size:11px;font-weight:800;
          padding:4px 10px;border-radius:99px;
          display:flex;align-items:center;gap:4px;
          box-shadow:0 2px 10px rgba(245,158,11,.4);
        }

        /* Percentage chip */
        .st-pct {
          position:absolute;bottom:14px;right:14px;z-index:2;
          background:rgba(5,46,22,.8);backdrop-filter:blur(8px);
          border:1px solid rgba(74,222,128,.3);border-radius:10px;
          padding:5px 11px;font-family:'Syne',sans-serif;
          font-size:14px;font-weight:800;color:#4ade80;
        }

        /* Card body */
        .st-body {
          padding:18px 20px 16px;
          flex:1;display:flex;flex-direction:column;
          border-top:1px solid rgba(255,255,255,.06);
        }

        .st-name { font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:#fff;line-height:1.25;margin-bottom:6px; }
        .st-father { display:flex;align-items:center;gap:7px;font-size:12.5px;color:rgba(187,247,208,.6);font-weight:500;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:14px; }

        .st-profile-btn {
          display:flex;align-items:center;justify-content:center;gap:6px;
          background:rgba(74,222,128,.1);color:#4ade80;
          border:1px solid rgba(74,222,128,.2);border-radius:99px;
          padding:9px 16px;font-size:12.5px;font-weight:700;
          text-decoration:none;transition:background .2s,border-color .2s,transform .2s;
          font-family:'DM Sans',sans-serif;
        }
        .st-profile-btn:hover { background:rgba(74,222,128,.18);border-color:rgba(74,222,128,.4);transform:translateY(-1px); }

        .st-divider { height:1px;background:linear-gradient(to right,transparent,rgba(74,222,128,.35),transparent); }
      `}</style>

      <section
        className="st-root w-full py-20 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#052e16 0%,#064e3b 50%,#052e16 100%)" }}
      >
        {/* Orbs */}
        <div style={{ position:"absolute",top:"-80px",left:"5%",width:"320px",height:"320px",background:"radial-gradient(circle,rgba(74,222,128,.06) 0%,transparent 70%)",pointerEvents:"none" }} />
        <div style={{ position:"absolute",bottom:"-60px",right:"5%",width:"280px",height:"280px",background:"radial-gradient(circle,rgba(16,185,129,.07) 0%,transparent 70%)",pointerEvents:"none" }} />

        <div className="st-divider" style={{ marginBottom:64 }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-14" style={{ animation:"st-fadeUp .55s ease both" }}>
            <div className="st-badge" style={{ margin:"0 auto 14px" }}><span className="st-badge-dot" />Our Pride</div>
            <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,4vw,2.75rem)",fontWeight:800,color:"#fff",lineHeight:1.1,letterSpacing:"-0.025em",marginBottom:12 }}>
              Student <span style={{ color:"#4ade80" }}>Toppers</span>
            </h2>
            <p style={{ fontSize:"14.5px",color:"rgba(187,247,208,.7)",maxWidth:480,margin:"0 auto",lineHeight:1.7 }}>
              Celebrating the academic excellence of our brightest minds who have set new benchmarks.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toppers.map((student, i) => (
              <div key={student.Id} className="st-card" style={{ animationDelay:`${i*80}ms` }}>
                {/* Image */}
                <div className="st-img-wrap">
                  <Image
                    src={`/uploads/${student.Image}`}
                    alt={student.Student_Name}
                    fill
                    className="object-cover"
                  />
                  <div className="st-img-overlay" />

                  {/* Rank */}
                  <div className="st-rank">
                    <svg style={{ width:10,height:10 }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a.75.75 0 01.67.42l2.35 4.77 5.26.76a.75.75 0 01.42 1.28l-3.81 3.71.9 5.24a.75.75 0 01-1.09.79L10 16.34l-4.7 2.47a.75.75 0 01-1.09-.79l.9-5.24-3.81-3.71a.75.75 0 01.42-1.28l5.26-.76 2.35-4.77A.75.75 0 0110 2z" clipRule="evenodd" /></svg>
                    Rank {student.Rank}
                  </div>

                  {/* Class bottom-left */}
                  <div style={{ position:"absolute",bottom:14,left:14,zIndex:2,fontSize:11,fontWeight:600,color:"rgba(187,247,208,.8)",letterSpacing:"0.04em" }}>
                    {student[" Class"] || student.Class || student.Year}
                  </div>

                  {/* Percentage */}
                  <div className="st-pct">{student.Marks_Percentage}%</div>
                </div>

                {/* Body */}
                <div className="st-body">
                  <p className="st-name">{student.Student_Name}</p>
                  <div className="st-father">
                    <svg style={{ width:13,height:13,color:"#4ade80",flexShrink:0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    {student.Father_name}
                  </div>
                  <Link href={`/student/${student.Id}`} className="st-profile-btn">
                    View Profile
                    <svg style={{ width:12,height:12 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="st-divider" style={{ marginTop:64 }} />
      </section>
    </>
  );
}