"use client";
import Image from "next/image";
import { useSchool } from "@/context/SchoolContext";

export default function Footer() {
  const { schoolInfo, loading } = useSchool();

  const schoolName = schoolInfo?.School_Name ?? "Yaduvanshi";
  const shortName = schoolInfo?.Short_Name ?? "Degree College";
  const address = schoolInfo?.Address ?? "Bucholi Road, Mahendergarh, Haryana, PIN-123029";
  const email = schoolInfo?.Email ?? "ydcmgh@gmail.com";
  const phone = schoolInfo?.Alternate_Phone ?? "+91 8607062323";
  const website = schoolInfo?.Website ?? "www.ydu.com";
  const logoUrl = schoolInfo?.Logo_Url ? `/uploads/${schoolInfo.Logo_Url}` : "/logo/6.png";

  const youtubeUrl = schoolInfo?.Youtube_Url ? `https://${schoolInfo.Youtube_Url}` : "#";
  const linkedinUrl = schoolInfo?.Linkedin_Url ? `https://linkedin.com/in/${schoolInfo.Linkedin_Url}` : "#";
  const instagramUrl = schoolInfo?.Instagram_Url ? `https://instagram.com/${schoolInfo.Instagram_Url}` : "#";
  const twitterUrl = schoolInfo?.Twitter_Url ? `https://twitter.com/${schoolInfo.Twitter_Url}` : "#";

  const quickLinks = ["Home", "Profile", "Gallery", "Founder's Message"];
  const academics = [
    "B.A. (Bachelor of Arts)",
    "B.Sc. (Bachelor of Science)",
    "B.Com (Bachelor of Commerce)",
    "M.Sc. (Master of Science)",
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .footer-root {
          font-family: 'DM Sans', sans-serif;
        }
        .footer-brand-name {
          font-family: 'Syne', sans-serif;
        }

        .footer-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #bbf7d0;
          font-size: 13.5px;
          font-weight: 500;
          transition: color 0.2s, transform 0.2s;
          cursor: pointer;
          padding: 3px 0;
        }
        .footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }
        .footer-link-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .footer-link:hover .footer-link-dot {
          background: #ffffff;
        }

        .social-btn {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.12);
        }
        .social-btn svg {
          width: 16px;
          height: 16px;
          fill: #bbf7d0;
          transition: fill 0.2s;
        }
        .social-btn:hover svg {
          fill: #ffffff;
        }

        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #bbf7d0;
          font-size: 13.5px;
          font-weight: 500;
          transition: color 0.2s;
          text-decoration: none;
          padding: 4px 0;
        }
        .contact-row:hover {
          color: #ffffff;
        }
        .contact-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .contact-icon svg {
          width: 15px;
          height: 15px;
          stroke: #4ade80;
        }

        .section-label {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #4ade80;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(74,222,128,0.2);
        }

        .divider-gradient {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(74,222,128,0.4), transparent);
        }
      `}</style>

      <footer className="footer-root w-full" style={{ background: "linear-gradient(160deg, #052e16 0%, #064e3b 50%, #052e16 100%)" }}>

        {/* Top accent */}
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(to right, #4ade80, #16a34a, #059669)" }} />

        {/* Main grid */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white/10 border border-white/15 flex items-center justify-center p-1.5 shrink-0">
                <Image
                  src={logoUrl}
                  alt={`${schoolName} Logo`}
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => { e.currentTarget.src = "/logo/6.png"; }}
                />
              </div>
              <div>
                <h2 className="footer-brand-name text-[15px] font-extrabold text-white capitalize leading-tight">
                  {loading ? "Loading…" : schoolName}
                </h2>
                <p className="text-[10px] font-semibold text-green-400 uppercase tracking-[0.15em] mt-0.5">
                  {loading ? "" : shortName}
                </p>
              </div>
            </div>

            <p className="text-[13.5px] text-green-200/80 leading-relaxed">
              Among the top residential Colleges in India. Established under the aegis of Rao Chiranji Lal Samriti Jan Seva Trust, Mahendergarh.
            </p>

            {/* Social */}
            <div className="flex gap-2.5 mt-6">
              <a href={youtubeUrl} target="_blank" rel="noreferrer" className="social-btn" title="YouTube">
                <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" /></svg>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="social-btn" title="Instagram">
                <svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.2 3.3-1.7 4.8-5 5-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.2-4.8-1.7-5-5C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8.2-3.3 1.7-4.8 5-5 1.2-.1 1.6-.1 4.7-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12s0 3.7.1 4.9C.3 21.3 2.7 23.7 7.1 23.9 8.3 24 8.7 24 12 24s3.7 0 4.9-.1c4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4A6.2 6.2 0 0012 5.8zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" /></svg>
              </a>
              <a href={twitterUrl} target="_blank" rel="noreferrer" className="social-btn" title="Twitter / X">
                <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM3.56 20.45h3.57V9H3.56v11.45zM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z" /></svg>
              </a>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <p className="section-label">Quick Links</p>
            <ul className="space-y-0.5">
              {quickLinks.map((item) => (
                <li key={item}>
                  <span className="footer-link">
                    <span className="footer-link-dot" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Academics ── */}
          <div>
            <p className="section-label">Academics</p>
            <ul className="space-y-0.5">
              {academics.map((item) => (
                <li key={item}>
                  <span className="footer-link">
                    <span className="footer-link-dot" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <p className="section-label">Contact Us</p>
            <div className="space-y-3">
              <div className="contact-row">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="pt-1">{address}</span>
              </div>

              <a href={`mailto:${email}`} className="contact-row">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {email}
              </a>

              <a href={`tel:${phone}`} className="contact-row">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                {phone}
              </a>

              <a href={`http://${website}`} target="_blank" rel="noreferrer" className="contact-row">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                {website}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gradient mx-6" />

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-green-400/70 font-medium">
            © {new Date().getFullYear()} {loading ? "Yaduvanshi" : schoolName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-[12px] text-green-400/70 font-medium">
            <span className="hover:text-green-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="mx-2 opacity-30">|</span>
            <span className="hover:text-green-300 cursor-pointer transition-colors">Terms &amp; Conditions</span>
          </div>
        </div>
      </footer>
    </>
  );
}