import { createContext, useState } from "react";
import type { Hero } from "../assets/types/hero";

type FavoriteContextType = {
  favorites: Hero[];
  addFavorite: (hero: Hero) => void;
  removeFavorite: (id: string) => void;
};

const FavoriteContext = createContext<FavoriteContextType>(null!);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);
  
  const addFavorite = (hero: Hero) => {
    setFavorites((prevHeroes) => {
      if (prevHeroes.find((h) => h.id === hero.id)) return prevHeroes;
      return [...prevHeroes, hero];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevHeroesId) => prevHeroesId.filter((h) => h.id !== Number(id)));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext;
