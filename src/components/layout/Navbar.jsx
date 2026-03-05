"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-[72px] bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 relative bg-blue-50 rounded-full flex items-center justify-center">
            <Image
              src="/logo/6.png"
              alt="Yaduvanshi Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 leading-none">Yaduvanshi</h1>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">
              Degree College
            </p>
          </div>
        </div>

        <ul className="hidden md:flex gap-8 text-[15px] font-bold text-gray-700">

          <li className="cursor-pointer text-blue-600">Home</li>

          <li className="relative group cursor-pointer hover:text-blue-600 transition-colors">
            Profile
            <ul className="absolute left-0 top-full mt-3 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-50">About College</li>
              <li className="px-4 py-2 hover:bg-gray-50">Director Message</li>
              <li className="px-4 py-2 hover:bg-gray-50">Principal Message</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-blue-600 transition-colors">
            Gallery
            <ul className="absolute left-0 top-full mt-3 w-44 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-50">Photo Gallery</li>
              <li className="px-4 py-2 hover:bg-gray-50">Video Gallery</li>
            </ul>
          </li>

          <li className="relative group cursor-pointer hover:text-blue-600 transition-colors">
            Courses Offered
            <ul className="absolute left-0 top-full mt-3 w-44 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <li className="px-4 py-2 hover:bg-gray-50">BCA</li>
              <li className="px-4 py-2 hover:bg-gray-50">BBA</li>
              <li className="px-4 py-2 hover:bg-gray-50">BA</li>
              <li className="px-4 py-2 hover:bg-gray-50">BSc</li>
            </ul>
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition-colors">
            Contact Us
          </li>

        </ul>

        <button className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
          Student Login
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
          <span className="w-6 h-[2px] bg-gray-800"></span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4 text-[15px] font-bold text-gray-700">
            <li>Home</li>
            <li>Profile</li>
            <li>Gallery</li>
            <li>Courses Offered</li>
            <li>Contact Us</li>
          </ul>

          <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg text-sm font-bold shadow-md">
            Student Login
          </button>
        </div>
      )}
    </nav>
  );
}