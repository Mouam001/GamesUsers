import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function GameDetailView({game, screenshots, loading, isFavorite, onToggleFavorite, companies = []}) {
    const {t} = useTranslation();

    if(loading) return <p className="text-center mt-10">{t("loading")}</p>;
    if(!game) return <p className="text-center mt-10 font-bold text-red-600">{t("game_not_found")}</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
            <div className="mb-4">
                <button
                    onClick={onToggleFavorite}
                    className={`px-4 py-2 rounded ${
                        isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                    >
                    {isFavorite ? t("remove_favorite") : t("add_favorite")}
                    </button>
            </div>
            <p className="mb-6">{game.summary || t("no_description")}</p>

            {/* Bloc Screenshots */}
            <h2 className="text-2xl font-semibold mb-2">{t("screenshots")}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {screenshots.map(screenshot => (
                    <img
                    key={screenshot.id}
                    src={screenshot.url}
                    alt={`screenshot ${screenshot.id}`}
                    className="w-full rounded"
                    />
                ))}
            </div>
            {/* Bloc Entreprises */}
            {companies.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-700">
                        {t("company_list_title")}
                    </h2>
                    <div className="space-y-4">
                        {companies.map((comp) => (
                            <div key={comp.id}  className="border p-4 rounded bg-white shadow">
                                <h3 className="text-xl font-bold text-indigo-600">{comp.name}</h3>
                                {comp.startDate && (
                                    <p className="text-sm text-gray-500 mb-2">
                                        {t("start_date")}
                                        {new Date(comp.startDate).toLocaleDateString()}
                                    </p>
                                    )}
                                <p className="text-gray-700">
                                    {comp.description || t("no_description")}
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}