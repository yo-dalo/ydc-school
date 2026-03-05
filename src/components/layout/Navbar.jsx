import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-[72px] bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* Logo Section */}
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
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Degree College</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 text-[15px] font-bold text-gray-700">
          <li className="cursor-pointer text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Profile</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Gallery</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Courses Offered</li>
          <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact Us</li>
        </ul>

        {/* Action Button */}
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
          Student Login
        </button>

      </div>
    </nav>
  );
}