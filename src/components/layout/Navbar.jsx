export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-green-800 text-white">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        
        <div className="text-xl font-bold">
          Platform X
        </div>

        <ul className="flex gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-amber-300">Home</li>
          <li className="cursor-pointer hover:text-amber-300">Universities</li>
          <li className="cursor-pointer hover:text-amber-300">Courses</li>
          <li className="cursor-pointer hover:text-amber-300">Study Abroad</li>
          <li className="cursor-pointer hover:text-amber-300">Contact</li>
        </ul>

        <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-md text-sm font-semibold">
          Sign Up
        </button>

      </div>
    </nav>
  );
}