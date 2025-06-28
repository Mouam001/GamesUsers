import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function SearchView({query, setQuery, onSearch, games, loading}) {
    const {t}= useTranslation();

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{t("search_games")}</h1>
            <form onSubmit={onSearch} className="flex gap-2 mb-4">
                <input className="flex-1 p-2 border rounded"
                       type="text"
                       placeholder={t("search_placeholder")}
                       value={query}
                       onChange={e => setQuery(e.target.value)}
                       />
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    {t("search")}
                </button>
            </form>

            {loading && <p> {t("loading")}</p>}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {games.map(game =>(
                    <Link key={game.id} to={`/games/${game.id}`}
                          className="border p-2 rounded hover:shadow-lg"
                    >
                        <p className="font-bold">{game.name}</p>
                        {game.cover?.url && (
                            <img
                                src={`https://m1.dysnomia.studio${game.cover.url}`}
                                alt={game.name}
                                className="w-full rounded"
                                />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );

}