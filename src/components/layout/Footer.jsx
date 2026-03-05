import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-green-100 mt-0 border-t border-green-800 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 relative bg-green-700 flex items-center justify-center">
              <Image src="/logo/6.png" alt="Logo" width={32} height={32} className="object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-black text-green-50 leading-none">Yaduvanshi</h2>
              <p className="text-[10px] font-bold text-green-300 uppercase tracking-widest mt-1">Degree College</p>
            </div>
          </div>
          <p className="text-sm text-green-200 leading-relaxed max-w-xs">
            Among the top residential Colleges in India. Established under the aegis of Rao Chiranji Lal Samriti Jan Seva Trust, Mahendergarh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-green-50 font-bold text-lg mb-6 flex items-center">
            <span className="w-2 h-2 bg-green-500 mr-2"></span>
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-green-300 cursor-pointer transition-all">Home</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">Profile</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">Gallery</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">Founder's Message</li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-green-50 font-bold text-lg mb-6 flex items-center">
            <span className="w-2 h-2 bg-green-500 mr-2"></span>
            Academics
          </h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-green-300 cursor-pointer transition-all">B.A. (Bachelor of Arts)</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">B.Sc. (Bachelor of Science)</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">B.Com (Bachelor of Commerce)</li>
            <li className="hover:text-green-300 cursor-pointer transition-all">M.Sc. (Master of Science)</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-green-50 font-bold text-lg mb-6 flex items-center">
            <span className="w-2 h-2 bg-green-500 mr-2"></span>
            Contact Us
          </h3>
          <div className="space-y-4 text-sm text-green-200">
            <p className="flex items-start gap-3 hover:text-green-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5 mt-0.5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Bucholi Road, Mahendergarh, Haryana, PIN-123029
            </p>
            <p className="flex items-center gap-3 hover:text-green-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ydcmgh@gmail.com
            </p>
            <p className="flex items-center gap-3 hover:text-green-50 transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              +91 8607062323, +91 8607062424
            </p>
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 bg-green-950">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-green-200 font-medium">
          <p>© Copyright Yaduvanshi Degree College. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span className="hover:text-green-500 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-green-500 cursor-pointer transition-colors">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}