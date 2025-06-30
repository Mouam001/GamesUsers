import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

export default function NotFound() {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl mb-4">{t("notfound.title")}</h2>
            <p className="mb-6">{t("notfound.message")}</p>
            <Link to={`/`} className="text-blue-600 hover:underline">
                {t("notfound.back_home")}
            </Link>
        </div>
    )
}