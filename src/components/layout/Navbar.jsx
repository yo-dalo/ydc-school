"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { useSchool } from "@/context/SchoolContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

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

  return (
    <nav className="w-full h-[72px] bg-white border-b-2 border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-56 h-10 relative  flex items-center justify-center">
            <Image
              src={logoUrl}
              alt={`${schoolName} Logo`}
              width={502}
              height={82}
              className="object-contain"
              onError={(e) => { e.currentTarget.src = "/logo/6.png"; }}
            />
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 leading-none capitalize">
              {loading ? "Loading…" : schoolName}
            </h1>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-0.5">
              {loading ? "" : shortName}
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-[15px] font-bold text-gray-700">
          <li className="cursor-pointer text-green-600">
            <Link href="/">Home</Link>
          </li>

          {categories.map((category) => (
            <li key={category.Id} className="relative group cursor-pointer hover:text-green-600 transition-colors capitalize">
              {category.Name}
              {category.pages && category.pages.length > 0 && (
                <ul className="absolute left-0 top-full mt-3 w-52 bg-white border-2 border-green-100  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {category.pages.map((page) => (
                    <li key={page.Id} className="px-4 py-2.5 hover:bg-green-50 hover:text-green-700 capitalize transition-colors">
                      <Link href={`/pages/${page.Id}`}>{page.Name.replace(/-/g, " ")}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="cursor-pointer hover:text-green-600 transition-colors">
            Contact Us
          </li>
        </ul>

        <button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-5 py-2.5  text-sm font-bold transition-colors duration-200">
          Student Login
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-opacity duration-200 ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-transform duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t-2 border-green-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-[15px] font-bold text-gray-700">
            <li><Link href="/" className="text-green-600">Home</Link></li>
            {categories.map((category) => (
              <li key={category.Id} className="capitalize">
                {category.Name}
                {category.pages && category.pages.length > 0 && (
                  <ul className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-green-100">
                    {category.pages.map((page) => (
                      <li key={page.Id} className="text-gray-500 font-medium hover:text-green-600 active:text-green-600">
                        <Link href={`/pages/${page.Id}`}>{page.Name.replace(/-/g, " ")}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
          </ul>

          <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2.5  text-sm font-bold transition-colors">
            Student Login
          </button>
        </div>
      )}
    </nav>
  );
}