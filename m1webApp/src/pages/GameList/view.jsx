import {useNavigate} from "react-router-dom";
import useToken from "../../hooks/useToken.js";
import {useTranslation} from "react-i18next";

export default function GameListView({games, loading, page, handleNext, handlePrevious}) {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const token = useToken();

    const handleClick = (id) => {
        if(token){
            navigate(`/games/${id}`);
        }else {
            alert("veuillez vous connecter pour plus de detail");
        }
    };


    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Top 25 jeux</h1>
            {loading ? (
                <p> Chargement des jeux...</p>
            ):(
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {games.map((game) => (
                            <div
                                key={game.id}
                                onClick={() =>handleClick(game.id)}
                                className="cursor-pointer border p-2 rounded bg-white text-black hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                            >
                                <h2 className="font-semibold text-center mb-2 hover:text-blue-600">
                                    {game.name}
                                </h2>
                                {game.coverUrl ? (
                                    <img
                                        src = {game.coverUrl.replace("t_thumb", "t_cover_big")}
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

                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={handlePrevious}
                            disabled={page === 1}
                            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
                            Précédente
                        </button>
                        <span className="self-center"> Page {page}</span>

                        <button
                            onClick={handleNext}
                            className="bg-blue-600 text-white px-4 py-2 rounded">
                            Suivante
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}