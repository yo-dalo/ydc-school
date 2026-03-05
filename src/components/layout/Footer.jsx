import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1930] text-gray-300 mt-0 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background subtle glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 relative bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image src="/logo/6.png" alt="Logo" width={32} height={32} className="object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white leading-none">Yaduvanshi</h2>
              <p className="text-[10px] font-bold text-blue-300 uppercase tracking-widest mt-1">Degree College</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Among the top residential Colleges in India. Established under the aegis of Rao Chiranji Lal Samriti Jan Seva Trust, Mahendergarh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center group">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:w-4 transition-all"></span>
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">Home</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">Profile</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">Gallery</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">Founder's Message</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center group">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:w-4 transition-all"></span>
            Academics
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">B.A. (Bachelor of Arts)</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">B.Sc. (Bachelor of Science)</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">B.Com (Bachelor of Commerce)</li>
            <li className="hover:text-blue-400 hover:translate-x-1 cursor-pointer transition-all">M.Sc. (Master of Science)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 flex items-center group">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 group-hover:w-4 transition-all"></span>
            Contact Us
          </h3>
          <div className="space-y-4 text-sm text-gray-400">
            <p className="flex items-start gap-3 hover:text-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 mt-0.5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Bucholi Road, Mahendergarh, Haryana, PIN-123029
            </p>
            <p className="flex items-center gap-3 hover:text-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ydcmgh@gmail.com
            </p>
            <p className="flex items-center gap-3 hover:text-gray-200 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 8607062323, +91 8607062424
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 bg-[#071324] relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-medium">
          <p>© Copyright Yaduvanshi Degree College. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}