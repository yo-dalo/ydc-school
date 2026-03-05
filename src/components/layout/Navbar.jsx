"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-[72px] bg-green-50 border-b border-green-200 sticky top-0 z-50">
      <div className="w-full h-full px-6 lg:px-16 flex items-center justify-between">

        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo/6.png"
            alt="Yaduvanshi Logo"
            width={36}
            height={36}
            className="object-contain"
          />

          <span className="text-[17px] font-semibold text-green-900">
            Yaduvanshi
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-green-800">

          <li className="cursor-pointer hover:text-green-900 transition">
            Home
          </li>

          <li className="relative group cursor-pointer hover:text-green-900 transition">
            Profile
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-52 bg-green-50 border border-green-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-green-100">About College</li>
              <li className="px-5 py-3 hover:bg-green-100">Director Message</li>
              <li className="px-5 py-3 hover:bg-green-100">Principal Message</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-green-900 transition">
            Gallery
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-green-50 border border-green-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-green-100">Photo Gallery</li>
              <li className="px-5 py-3 hover:bg-green-100">Video Gallery</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-green-900 transition">
            Courses
            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-44 bg-green-50 border border-green-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-5 py-3 hover:bg-green-100">BCA</li>
              <li className="px-5 py-3 hover:bg-green-100">BBA</li>
              <li className="px-5 py-3 hover:bg-green-100">BA</li>
              <li className="px-5 py-3 hover:bg-green-100">BSc</li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-green-900 transition">
            Contact
          </li>

        </ul>

        <button className="hidden md:block bg-green-900 text-white px-5 py-2 text-sm font-medium hover:bg-green-800 transition">
          Student Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-green-900"></span>
          <span className="w-6 h-[2px] bg-green-900"></span>
          <span className="w-6 h-[2px] bg-green-900"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-green-50 border-t border-green-200 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-[15px] font-medium text-green-800">
            <li>Home</li>
            <li>Profile</li>
            <li>Gallery</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>

          <button className="mt-6 w-full bg-green-900 text-white py-2.5 text-sm font-medium hover:bg-green-800 transition">
            Student Login
          </button>
        </div>
      )}
    </nav>
  );
}