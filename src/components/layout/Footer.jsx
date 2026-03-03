export default function Footer() {
  return (
    <footer className="w-full bg-green-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-4">Platform X</h2>
          <p className="text-sm text-gray-300">
            50,000+ learners enrolled. Ranked among top universities providing quality online education.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-amber-400 cursor-pointer">Home</li>
            <li className="hover:text-amber-400 cursor-pointer">Universities</li>
            <li className="hover:text-amber-400 cursor-pointer">Courses</li>
            <li className="hover:text-amber-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-amber-400 cursor-pointer">MBA</li>
            <li className="hover:text-amber-400 cursor-pointer">BCA</li>
            <li className="hover:text-amber-400 cursor-pointer">MCA</li>
            <li className="hover:text-amber-400 cursor-pointer">BBA</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-300">Email: info@platformx.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <div className="flex gap-4 mt-4">
            <span className="w-8 h-8 bg-amber-500 rounded-full"></span>
            <span className="w-8 h-8 bg-amber-500 rounded-full"></span>
            <span className="w-8 h-8 bg-amber-500 rounded-full"></span>
          </div>
        </div>

      </div>

      <div className="border-t border-green-800 text-center py-4 text-sm text-gray-400">
        © 2026 Platform X. All Rights Reserved.
      </div>
    </footer>
  );
}