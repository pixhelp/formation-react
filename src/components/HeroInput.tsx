import { useState, useEffect, useRef } from "react";
import type { Hero } from "../assets/types/hero";
import Loading from "./Loading/Loading";

export default function HeroInput({label, onSelectHero, excludeId,} : { label: string; onSelectHero: (hero: Hero) => void; excludeId?: number; }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Hero[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
            setResults([]);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const delayDebounce = setTimeout(() => {
        setIsLoading(true);
        fetch(`http://localhost:4000/heroes?name_like=${query}`)
            .then((res) => res.json())
            .then((data) => {
            const filtered = excludeId ? data.filter((h: Hero) => h.id !== excludeId) : data;
            setResults(filtered);

            });
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [query, excludeId]);   

    return (
        <div ref={wrapperRef} className="space-y-2 w-64 relative">
        <label className="block font-medium">{label}</label>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border px-2 py-1 rounded w-full"
            placeholder="Type a hero name..."
        />

        {isLoading && <p className="text-sm text-gray-500"><Loading isLoading/></p>}

        {results.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border rounded shadow max-h-40 overflow-auto">
            {results.map((hero) => (
                <li
                key={hero.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                    onSelectHero(hero);
                    setQuery(""); 
                    setResults([]);
                }}
                >
                {hero.name}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}
