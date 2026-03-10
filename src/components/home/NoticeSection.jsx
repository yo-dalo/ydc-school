"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function NoticeSection() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get("/api/client/notification");
        if (response.data.status === "success") setNotices(response.data.data.data);
      } catch (e) {}
      finally { setLoading(false); }
    };
    fetchNotices();
  }, []);

  if (loading) return (
    <section className="w-full py-24 bg-white flex items-center justify-center">
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:10, height:10, borderRadius:"50%", background:"#16a34a", animation:"ns-pulse 1.4s ease-in-out infinite" }} />
        <span style={{ fontFamily:"'DM Sans',sans-serif", color:"#16a34a", fontSize:16, fontWeight:500 }}>Loading Notices…</span>
      </div>
    </section>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .ns-root { font-family:'DM Sans',sans-serif; }
        @keyframes ns-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.35;transform:scale(.6)} }
        @keyframes ns-ping { 0%{box-shadow:0 0 0 0 rgba(22,163,74,.5)} 70%{box-shadow:0 0 0 7px rgba(22,163,74,0)} 100%{box-shadow:0 0 0 0 rgba(22,163,74,0)} }
        @keyframes ns-fadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ns-modalIn { from{opacity:0;transform:scale(.96) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }

        .ns-badge { display:inline-flex;align-items:center;gap:7px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:99px;padding:5px 16px;font-size:11px;font-weight:700;letter-spacing:.13em;text-transform:uppercase;color:#16a34a; }
        .ns-badge-dot { width:6px;height:6px;border-radius:50%;background:#16a34a;animation:ns-ping 1.7s ease-in-out infinite; }

        .ns-outer { background:#fff;border:1px solid #e7f5ee;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(22,163,74,.06); }
        .ns-outer-header { background:#f0fdf4;border-bottom:1px solid #e7f5ee;padding:14px 22px;display:flex;align-items:center;justify-content:space-between; }

        .ns-scroll { height:480px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#bbf7d0 #f0fdf4; }
        .ns-scroll::-webkit-scrollbar { width:5px; }
        .ns-scroll::-webkit-scrollbar-track { background:#f0fdf4;border-radius:99px; }
        .ns-scroll::-webkit-scrollbar-thumb { background:#86efac;border-radius:99px; }

        .ns-row { display:flex;align-items:center;justify-content:space-between;gap:14px;background:#fff;border:1px solid #e7f5ee;border-radius:14px;padding:15px 18px;margin-bottom:10px;transition:border-color .2s,box-shadow .2s,transform .2s;animation:ns-fadeUp .45s ease both; }
        .ns-row:last-child { margin-bottom:0; }
        .ns-row:hover { border-color:#86efac;box-shadow:0 6px 20px rgba(22,163,74,.08);transform:translateX(3px); }

        .ns-new { display:inline-flex;align-items:center;gap:5px;background:#fef2f2;border:1px solid #fecaca;border-radius:99px;padding:2px 9px;font-size:10px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.08em;animation:ns-pulse 1.4s ease-in-out infinite; }

        .ns-view-btn { display:inline-flex;align-items:center;gap:6px;background:#f0fdf4;color:#16a34a;border:1px solid #bbf7d0;border-radius:99px;padding:8px 16px;font-size:12.5px;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0;transition:background .2s,transform .2s;font-family:'DM Sans',sans-serif; }
        .ns-view-btn:hover { background:#16a34a;color:#fff;border-color:#16a34a;transform:translateY(-1px); }

        .ns-modal-overlay { position:fixed;inset:0;z-index:50;display:flex;align-items:center;justify-content:center;padding:16px;background:rgba(5,46,22,.65);backdrop-filter:blur(6px); }
        .ns-modal { background:#fff;border-radius:20px;width:100%;max-width:600px;overflow:hidden;box-shadow:0 32px 64px rgba(0,0,0,.22);animation:ns-modalIn .25s ease both; }
        .ns-modal-head { background:linear-gradient(135deg,#052e16,#064e3b);padding:28px 28px 22px;position:relative; }
        .ns-modal-body { padding:26px 28px;max-height:360px;overflow-y:auto;font-size:14.5px;line-height:1.8;color:#374151;scrollbar-width:thin;scrollbar-color:#bbf7d0 #f0fdf4; }
        .ns-modal-body::-webkit-scrollbar{width:4px} .ns-modal-body::-webkit-scrollbar-thumb{background:#86efac;border-radius:99px}
        .ns-modal-foot { padding:14px 28px 20px;border-top:1px solid #f0fdf4;display:flex;justify-content:flex-end; }
        .ns-close { width:34px;height:34px;border-radius:99px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s;position:absolute;top:20px;right:20px;color:#fff; }
        .ns-close:hover { background:rgba(255,255,255,.2); }
        .ns-close-btn { display:inline-flex;align-items:center;gap:6px;background:#16a34a;color:#fff;font-family:'Syne',sans-serif;font-size:13px;font-weight:700;padding:10px 24px;border-radius:99px;border:none;cursor:pointer;transition:background .2s; }
        .ns-close-btn:hover { background:#15803d; }

        .ns-dot-bg { position:absolute;inset:0;background-image:radial-gradient(rgba(22,163,74,.05) 1px,transparent 1px);background-size:26px 26px;pointer-events:none; }
        .ns-divider { height:1px;background:linear-gradient(to right,transparent,rgba(22,163,74,.25),transparent); }
      `}</style>

      <section className="ns-root w-full py-20 bg-white relative overflow-hidden">
        <div className="ns-dot-bg" />
        <div style={{ position:"absolute",top:"-60px",right:"6%",width:"280px",height:"280px",background:"radial-gradient(circle,rgba(74,222,128,.06) 0%,transparent 70%)",pointerEvents:"none" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="ns-badge" style={{ margin:"0 auto 14px" }}><span className="ns-badge-dot" />Latest Updates</div>
            <h2 style={{ fontFamily:"'Syne',sans-serif",fontSize:"clamp(1.8rem,4vw,2.75rem)",fontWeight:800,color:"#111827",lineHeight:1.1,letterSpacing:"-0.025em",marginBottom:10 }}>
              News &amp; <span style={{ color:"#16a34a" }}>Events</span>
            </h2>
            <div style={{ width:44,height:3,background:"linear-gradient(to right,#4ade80,#16a34a)",borderRadius:99,margin:"0 auto" }} />
          </div>

          <div className="ns-outer">
            <div className="ns-outer-header">
              <div style={{ display:"flex",alignItems:"center",gap:8 }}>
                <div style={{ width:7,height:7,borderRadius:"50%",background:"#16a34a",animation:"ns-ping 1.7s ease-in-out infinite" }} />
                <span style={{ fontFamily:"'Syne',sans-serif",fontSize:12,fontWeight:700,color:"#15803d",letterSpacing:"0.06em",textTransform:"uppercase" }}>{notices.length} Notices</span>
              </div>
              <span style={{ fontSize:12,color:"#9ca3af",fontWeight:500 }}>Scroll to view all</span>
            </div>
            <div style={{ padding:14 }}>
              <div className="ns-scroll">
                {notices.map((notice, i) => (
                  <div key={notice.Id} className="ns-row" style={{ animationDelay:`${i*45}ms` }}>
                    <div style={{ flex:1,minWidth:0 }}>
                      <div style={{ display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:5 }}>
                        <h3 style={{ fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:14.5,color:"#111827",lineHeight:1.3 }}>{notice.Title}</h3>
                        {notice.Is_Important && <span className="ns-new"><span style={{ width:5,height:5,borderRadius:"50%",background:"#dc2626",display:"inline-block" }} />New</span>}
                      </div>
                      <div style={{ display:"flex",alignItems:"center",gap:5,fontSize:12,color:"#9ca3af",fontWeight:500 }}>
                        <svg style={{ width:12,height:12,color:"#16a34a",flexShrink:0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {new Date(notice.Date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}
                      </div>
                    </div>
                    <button className="ns-view-btn" onClick={() => setSelectedNotice(notice)}>
                      View
                      <svg style={{ width:12,height:12 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="ns-divider mt-20" />

        {selectedNotice && (
          <div className="ns-modal-overlay" onClick={e => e.target===e.currentTarget && setSelectedNotice(null)}>
            <div className="ns-modal">
              <div className="ns-modal-head">
                <div className="ns-badge" style={{ background:"rgba(74,222,128,.1)",border:"1px solid rgba(74,222,128,.25)",color:"#4ade80",marginBottom:10 }}>
                  <span style={{ width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block" }} />Notice Details
                </div>
                <h3 style={{ fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:19,color:"#fff",lineHeight:1.25,paddingRight:44 }}>{selectedNotice.Title}</h3>
                <div style={{ display:"flex",alignItems:"center",gap:6,marginTop:8,fontSize:12,color:"#86efac",fontWeight:500 }}>
                  <svg style={{ width:12,height:12 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {new Date(selectedNotice.Date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}
                </div>
                <button className="ns-close" onClick={() => setSelectedNotice(null)}>
                  <svg style={{ width:15,height:15 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <div className="ns-modal-body" dangerouslySetInnerHTML={{ __html: selectedNotice.Description }} />
              <div className="ns-modal-foot">
                <button className="ns-close-btn" onClick={() => setSelectedNotice(null)}>Close Notice</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}