import { useState } from 'react';
import { useGetHeroesByFirstLetter } from '../hooks/useGetHerosByFirstLetter';
import HeroCard from '../components/HeroCard';
import HeroCardSkeleton from '../components/skeletons/HeroCardSkeleton';

const alphabet: string[] = [];

for (let i = 65; i <= 90; i++) {
  alphabet.push(String.fromCharCode(i));
}

const HeroesList = () => {
  const [selectedLetter, setSelectedLetter] = useState('A');

  const { isFetching, data: heroes, refetch } = useGetHeroesByFirstLetter('A');

  const onSelectLetter = (l: string) => {
    setSelectedLetter(l);
    refetch(l);
  };

  return (
    <section>
      <h1 className='text-center font-2xl'>List of heroes</h1>
      <ul className='flex justify-center gap-2 my-6'>
        {alphabet.map((letter) => (
          <li
            className={`cursor-pointer font-semibold text-2xl ${selectedLetter === letter ? 'text-red-500' : ''}`}
            key={letter}
            style={selectedLetter === letter ? { color: 'red' } : undefined}
            onClick={() => onSelectLetter(letter)}
          >
            {letter}
          </li>
        ))}
      </ul>
      <div className='flex flex-wrap justify-center items-center gap-4'>
        {isFetching && Array.from({ length: 10 }, (_, i) => <HeroCardSkeleton key={i} />)}
        {!isFetching && (
          <ul className='flex flex-wrap justify-center items-center gap-4'>
            {heroes.map((hero) => (
                <HeroCard key={hero.id} hero={hero} />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HeroesList;