"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-[72px] bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full h-full px-6 lg:px-16 flex items-center justify-between">

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo/6.png"
            alt="Yaduvanshi Logo"
            width={36}
            height={36}
            className="object-contain"
          />

          <span className="text-[17px] font-semibold text-gray-900">
            Yaduvanshi
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-700">

          <li className="cursor-pointer hover:text-black transition">
            Home
          </li>

          <li className="relative group cursor-pointer hover:text-black transition">
            Profile
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-52 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-gray-50">About College</li>
              <li className="px-5 py-3 hover:bg-gray-50">Director Message</li>
              <li className="px-5 py-3 hover:bg-gray-50">Principal Message</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-black transition">
            Gallery
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-gray-50">Photo Gallery</li>
              <li className="px-5 py-3 hover:bg-gray-50">Video Gallery</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-black transition">
            Courses
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-44 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-gray-50">BCA</li>
              <li className="px-5 py-3 hover:bg-gray-50">BBA</li>
              <li className="px-5 py-3 hover:bg-gray-50">BA</li>
              <li className="px-5 py-3 hover:bg-gray-50">BSc</li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-black transition">
            Contact
          </li>

        </ul>

        <button className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
          Student Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
          <span className="w-6 h-[2px] bg-gray-900"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-[15px] font-medium text-gray-700">
            <li>Home</li>
            <li>Profile</li>
            <li>Gallery</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>

          <button className="mt-6 w-full bg-black text-white py-2.5 rounded-full text-sm font-medium">
            Student Login
          </button>
        </div>
      )}
    </nav>
  );
}