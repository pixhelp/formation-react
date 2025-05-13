// pages/HeroDetail.tsx
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getHeroById } from '../api/heroes';
import HeroCard from '../components/HeroCard';
import HeroCardSkeleton from '../components/skeletons/HeroCardSkeleton';

const HeroDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isError, isFetched, isLoading, status, isSuccess } = useQuery({queryKey: ['hero', id], queryFn: () => getHeroById(id!)}); 

    return (
        <>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>
                Retour
            </button>
            <div className="p-4">
            <h1 className="text-2xl font-bold">Détails du héros</h1>
            {isFetched && <p className="text-lg">Statut de la requête : {status}</p>}
            {isLoading && <HeroCardSkeleton/>}
            {isError && <p>Une erreur est survenue</p>}
            {isSuccess && data && <HeroCard hero={data} />}
            
            </div>
        </>
    );
};

export default HeroDetail;
