import type { Hero } from '../assets/types/hero';

export default function HeroCard({ hero, isWinner }: { hero: Hero; isWinner: boolean }) {
    return (
        <div className={`border p-4 rounded w-64 ${isWinner ? 'border-green-500' : 'border-gray-300'}`}>
            <img src={hero.image.url} alt={hero.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-xl font-bold mt-2">{hero.name}</h2>
            <p className="text-sm text-gray-500">{isWinner ? "🏆 Winner" : "Loser"}</p>
        </div>
        );
  }