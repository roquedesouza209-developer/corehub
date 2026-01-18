import Navbar from "@/components/Navbar";
import CategoryGrid from "@/components/CategoryGrid";
import AppSlider from "@/components/AppSlider";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-black text-white pt-24">
        <div className="max-w-3xl text-center px-6">
          <h1 className="text-5xl font-bold mb-4">CoreHub</h1>

          <p className="text-xl text-gray-300 mb-6">
            One hub. Where everything connects.
          </p>

          <p className="text-gray-400 text-lg">
            CoreHub is a unified platform for discovering, organizing, and
            accessing the best apps and websites in one personalized hub.
          </p>
        </div>
      </section>

      {/* Categories */}
      <CategoryGrid />
      <AppSlider />

    </>
  );
}
