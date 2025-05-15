import { useContext } from "react"
import FavoriteContext from "../contexts/favorites-context"
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/auth-context";


const Profile = () => {
    const { favorites } = useContext(FavoriteContext);
    const {email, id, accessToken, connected} = useAuthContext();

    return (
        
        <div>
            <h1 className="text-2xl font-semibold mb-4">Mon Profil</h1>
            <p>Email: {email}</p>
            <p>ID: {id}</p>

            <h1 className="text-2xl font-semibold mb-4">Mes Héros Favoris</h1>
            <ul className="grid grid-cols-2 gap-4">
                {favorites.map((hero) => (
                    <Link key={hero.id} to={`/heroes/${hero.id}`}>
                        <li className="border p-4 rounded">
                            <h2 className="text-lg font-bold">{hero.name}</h2>
                            <img src={hero.image.url} alt={hero.name} className="w-24 h-24 my-2" />
                            <p className="text-sm text-gray-500">{hero.biography['full-name']}</p>
                            <p className="text-sm text-gray-500">{hero.biography.alignment}</p>
                            <p>{hero.biography.publisher}</p>
                            <p>{hero.biography.alignment}</p>
                            <p>{hero.biography['first-appearance']}</p>
                            <p>{hero.biography["full-name"]}</p>
                            <p>{hero.biography["place-of-birth"]}</p>
                        </li>
                    </Link>
                ))}
            </ul>
      </div>
    )
}

export default Profile;