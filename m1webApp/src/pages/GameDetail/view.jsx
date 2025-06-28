import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function GameDetailView({game, screenshots, loading}) {
    const {t} = useTranslation();

    if(loading) return <p className="text-center mt-10">{t("loading")}</p>;
    if(!game) return <p className="text-center mt-10">{t("game_not_found")}</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
            <p className="mb-6">{game.description} || {t("no_description")}</p>

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
        </div>
    )

}