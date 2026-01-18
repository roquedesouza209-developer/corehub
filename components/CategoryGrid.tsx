import Link from "next/link";
import { categories } from "@/data/categories";

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-white mb-8">
        Browse Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/categories/${category.name.toLowerCase().split(" ")[0]}`}
            className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 cursor-pointer border border-white/10 block"
          >
            <div className="text-3xl mb-3">{category.emoji}</div>
            <div className="text-white font-medium">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
