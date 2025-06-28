import {useTranslation} from "react-i18next";
import {Link, useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken";


export default function HomeView({games, loading}){
    const { t} = useTranslation();
    const navigate = useNavigate();
    const token = useToken();
    if(loading) return <p> Chargements des jeux ...</p>;

    const handleclick = (id) => {
        if(token){
            navigate(`/games/${id}`);
        } else {
            alert(' Veuillez vous connecter pour réaliser cette action');
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{t("top_10_games")}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {games.map((game) => (
                    <div
                         key={game.id}
                         onClick={()=> handleclick(game.id)}
                         className="cursor-pointer border p-2 rounded bg-white text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        <h2 className="font-semibold text-center mb-2 hover:text-blue-600">
                                {game.name}
                        </h2>
                        {game.coverUrl ? (
                            <img src={game.coverUrl}
                                 alt={game.name}
                                 className="w-full rounded shadow"
                            />
                        ) : (
                            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                <span>{t("no_image")}</span>
                            </div>
                            )}
                      </div>
                     ))}
                </div>
        </div>
    );
}