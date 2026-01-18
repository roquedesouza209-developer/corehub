import Image from "next/image";
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
      className="min-w-[160px] bg-white/5 hover:bg-white/10 transition rounded-xl p-4 border border-white/10 block"
    >
      <div className="h-12 w-12 mb-4 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="text-white font-medium">{name}</div>
      <div className="text-gray-400 text-sm">{category}</div>
    </Link>
  );
}
