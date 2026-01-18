import Link from "next/link";

type AppCardProps = {
  name: string;
  category: string;
  logo: string;
  slug: string;
};

export default function AppCard({ name, category, logo, slug }: AppCardProps) {
  return (
    <Link
      href={`/apps/${slug}`}
      className="min-w-[160px] bg-white/5 hover:bg-white/10 transition rounded-xl p-4 border border-white/10 cursor-pointer block"
    >
      <div className="text-4xl mb-3">{logo}</div>
      <div className="text-white font-medium">{name}</div>
      <div className="text-gray-400 text-sm">{category}</div>
    </Link>
  );
}
