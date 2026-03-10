"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useSchool } from "@/context/SchoolContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  const { schoolInfo, loading } = useSchool();

  const schoolName = schoolInfo?.School_Name ?? "Yaduvanshi";
  const shortName = schoolInfo?.Short_Name ?? "Degree College";
  const logoUrl = schoolInfo?.Logo_Url
    ? `/uploads/${schoolInfo.Logo_Url}`
    : "/logo/6.png";

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get("/api/client/pages");
        if (response.data.status === "success") {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    };
    fetchPages();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }
        .nav-school-name {
          font-family: 'Syne', sans-serif;
        }

        /* Animated underline for nav items */
        .nav-item-link {
          position: relative;
        }
        .nav-item-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #16a34a;
          transition: width 0.25s ease;
        }
        .nav-item-link:hover::after,
        .nav-item-link.active::after {
          width: 100%;
        }

        /* Dropdown */
        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
        }
        .nav-group:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        /* Scrolled shadow */
        .nav-scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        /* Mobile accordion */
        .mobile-sub {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease;
        }
        .mobile-sub.open {
          max-height: 500px;
        }

        /* Login btn shimmer */
        .login-btn {
          position: relative;
          overflow: hidden;
        }
        .login-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: rgba(255,255,255,0.15);
          transform: skewX(-20deg);
          transition: left 0.4s ease;
        }
        .login-btn:hover::before {
          left: 150%;
        }
      `}</style>

      <nav className={`nav-root w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "nav-scrolled" : ""}`}>

        {/* Top accent bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-green-400 via-green-600 to-emerald-800" />

        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">

          {/* ── Logo + Name ── */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-green-100 bg-green-50 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src={logoUrl}
                alt={`${schoolName} Logo`}
                width={40}
                height={40}
                className="object-contain p-1"
                onError={(e) => { e.currentTarget.src = "/logo/6.png"; }}
              />
            </div>
            <div className="leading-none">
              <h1 className="nav-school-name text-[15px] font-800 text-gray-900 capitalize tracking-tight leading-none">
                {loading ? "Loading…" : schoolName}
              </h1>
              <p className="text-[10px] font-semibold text-green-600 uppercase tracking-[0.15em] mt-1">
                {loading ? "" : shortName}
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-7 text-[13.5px] font-semibold text-gray-600 flex-1 justify-center">
            <li>
              <Link href="/" className="nav-item-link active text-green-600 font-bold">
                Home
              </Link>
            </li>

            {categories.map((category) => (
              <li key={category.Id} className="nav-group relative capitalize">
                <span className="nav-item-link cursor-default hover:text-green-600 transition-colors flex items-center gap-1 select-none">
                  {category.Name}
                  {category.pages?.length > 0 && (
                    <svg className="w-3 h-3 mt-0.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>

                {category.pages?.length > 0 && (
                  <ul className="dropdown-menu absolute left-0 top-full mt-3 w-52 bg-white border border-gray-100 rounded-xl shadow-xl shadow-black/5 py-1.5 z-50">
                    {/* triangle tip */}
                    <span className="absolute -top-1.5 left-5 w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45" />
                    {category.pages.map((page) => (
                      <li key={page.Id}>
                        <Link
                          href={`/pages/${page.Id}`}
                          className="flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium text-gray-600 hover:bg-green-50 hover:text-green-700 capitalize transition-colors rounded-lg mx-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-green-400 shrink-0" />
                          {page.Name.replace(/-/g, " ")}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li>
              <span className="nav-item-link cursor-pointer hover:text-green-600 transition-colors">
                Contact Us
              </span>
            </li>
          </ul>

          {/* ── CTA Button ── */}
          <button className="login-btn hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-colors duration-200 shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Student Login
          </button>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-green-50 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-white border-t border-gray-100 px-5 pb-6">
            <ul className="flex flex-col pt-4 text-[14px] font-semibold text-gray-700">
              <li className="py-2.5 border-b border-gray-50">
                <Link href="/" className="text-green-600 font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Home
                </Link>
              </li>

              {categories.map((category) => (
                <MobileCategory key={category.Id} category={category} />
              ))}

              <li className="py-2.5 border-b border-gray-50 cursor-pointer hover:text-green-600 transition-colors">
                Contact Us
              </li>
            </ul>

            <button className="login-btn mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-sm font-bold transition-colors flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Student Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// Mobile accordion sub-menu
function MobileCategory({ category }) {
  const [expanded, setExpanded] = useState(false);
  const hasPages = category.pages?.length > 0;

  return (
    <li className="border-b border-gray-50">
      <button
        onClick={() => hasPages && setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-2.5 capitalize hover:text-green-600 transition-colors"
      >
        <span>{category.Name}</span>
        {hasPages && (
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </button>

      {hasPages && (
        <div className={`mobile-sub ${expanded ? "open" : ""}`}>
          <ul className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-green-100 ml-1 mb-1">
            {category.pages.map((page) => (
              <li key={page.Id}>
                <Link
                  href={`/pages/${page.Id}`}
                  className="flex items-center gap-2 py-1.5 text-[13px] font-medium text-gray-500 hover:text-green-600 capitalize transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-green-300 shrink-0" />
                  {page.Name.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}