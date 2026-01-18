import AppCard from "@/components/AppCard";
import { apps } from "@/data/apps";

export default function AppSlider() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-bold text-white mb-6">
        Trending Apps
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {apps.map((app) => (
          <AppCard
            key={app.name}
            name={app.name}
            category={app.category}
            logo={app.logo}
          />
        ))}
      </div>
    </section>
  );
}
