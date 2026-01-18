export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-white">CoreHub</span>

        <div className="hidden md:flex gap-6 text-gray-300">
          <a href="#" className="hover:text-white">Discover</a>
          <a href="#" className="hover:text-white">Categories</a>
          <a href="#" className="hover:text-white">Trending</a>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
          Sign In
        </button>
      </div>
    </nav>
  );
}
