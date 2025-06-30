import {useTranslation} from 'react-i18next';

export default function CompanyDetailView({company, loading, error}){
    const { t } = useTranslation();
    if (loading) return <p>{t("loading")}</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if(!company) return <p>{t("game_not_found")}</p>;

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 border rounded bg-white shadow">
            <h1 className="text-3xl font-bold mb-4">{company.name}</h1>
            <p className="text-gray-700 whitespace-pre-line">
                {company.description || t("no_description")}
            </p>
        </div>
    );
}