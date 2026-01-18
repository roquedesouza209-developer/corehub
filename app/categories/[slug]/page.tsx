import Navbar from "@/components/Navbar";
import { apps } from "@/data/apps";

type Props = {
  params: { slug: string };
};

export default function AppPage({ params }: Props) {
  const app = apps.find((a) => a.slug === params.slug);

  if (!app) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-black text-white pt-28 px-6">
          <p className="text-gray-400">App not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-28 px-6 max-w-4xl mx-auto">
        <div className="text-6xl mb-4">{app.logo}</div>

        <h1 className="text-4xl font-bold mb-2">{app.name}</h1>

        <p className="text-gray-400 mb-6">{app.label}</p>

        <p className="text-lg text-gray-300 mb-8">
          {app.description}
        </p>

        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium"
        >
          Visit Website
        </a>
      </main>
    </>
  );
}
