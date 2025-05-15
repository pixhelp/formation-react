import { useState } from "react";
import { fight } from "../utils/fight";
import type { Hero } from "../assets/types/hero";
import HeroInput from "../components/HeroInput";
import HeroCard from "../components/HeroCardBattle";
import { useAppDispatch } from "@/redux/hooks";
import { addBattle } from "@/redux/slices/battleHistorySlice";

export default function HeroBattle() {
    const [heroOne, setHeroOne] = useState<Hero | null>(null);
    const [heroTwo, setHeroTwo] = useState<Hero | null>(null);
    const [winner, setWinner] = useState<Hero | null>(null);

    const dispatch = useAppDispatch();

    const handleBattle = () => {
    if (heroOne && heroTwo) {
        const result = fight(heroOne, heroTwo);
        setWinner(result);

        dispatch(addBattle({
            heroOne,
            heroTwo,
            winner: result,
            timestamp: new Date().toISOString(),
        }));
    }
    };

    return (
        <div className="p-6 text-center space-y-4">
        <h1 className="text-3xl font-bold">Hero Battle</h1>

        <div className="flex justify-center gap-6">
            <HeroInput
            label="Select Hero 1"
            onSelectHero={setHeroOne}
            excludeId={heroTwo?.id}
            />
            <HeroInput
            label="Select Hero 2"
            onSelectHero={setHeroTwo}
            excludeId={heroOne?.id}
            />
        </div>

        {heroOne && heroTwo && (
            <button
            onClick={handleBattle}
            className="mt-4 px-6 py-2 bg-red-600 text-white rounded"
            >
            Battle
            </button>
        )}

        {heroOne && heroTwo && winner && (
            <div className="flex justify-center gap-8 mt-6">
            <HeroCard hero={heroOne} isWinner={heroOne.id === winner.id} />
            <HeroCard hero={heroTwo} isWinner={heroTwo.id === winner.id} />
            </div>
        )}
        </div>
    );
}
