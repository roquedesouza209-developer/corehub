type AppCardProps = {
  name: string;
  category: string;
  logo: string;
};

export default function AppCard({ name, category, logo }: AppCardProps) {
  return (
    <div className="min-w-[160px] bg-white/5 hover:bg-white/10 transition rounded-xl p-4 border border-white/10 cursor-pointer">
      <div className="text-4xl mb-3">{logo}</div>
      <div className="text-white font-medium">{name}</div>
      <div className="text-gray-400 text-sm">{category}</div>
    </div>
  );
}
