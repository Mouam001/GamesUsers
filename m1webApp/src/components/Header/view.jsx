import {Link} from "react-router";
import {Menu, X} from "lucide-react";
import frFlag from "../../assets/france.png";
import enFlag from "../../assets/royaume-uni.png";

export default function NavbarView({ open, toggleMenu, changeLanguage, t }) {
    const currentLang = navigator.language.startsWith("fr") || window.location.href.includes("/fr") || i18n.language.startsWith("en");
    const flag = currentLang ? frFlag : enFlag;

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">🎮 GameHub</Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-6 items-center text-lg">
                    <li><Link to="/" className="hover:text-blue-300">{t("menu.home")}</Link></li>
                    <li><Link to="/login" className="hover:text-blue-300">{t("menu.login")}</Link></li>
                    <li><Link to="/register" className="hover:text-blue-300">{t("menu.register")}</Link></li>
                    <li className="flex items-center gap-2">
                        <img src={flag} alt="langue" className="w-5 h-5" />
                        <button onClick={changeLanguage} className="hover:text-blue-300">
                            {t("change-language")}
                        </button>
                    </li>
                </ul>

                {/* Burger menu */}
                <button onClick={toggleMenu} className="md:hidden">
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden px-4 pb-4 space-y-2 text-lg bg-gray-800">
                    <li><Link to="/" onClick={toggleMenu} className="block hover:text-blue-300">{t("menu.home")}</Link></li>
                    <li><Link to="/login" onClick={toggleMenu} className="block hover:text-blue-300">{t("menu.login")}</Link></li>
                    <li><Link to="/register" onClick={toggleMenu} className="block hover:text-blue-300">{t("menu.register")}</Link></li>
                    <li className="flex items-center gap-2">
                        <img src={flag} alt="langue" className="w-5 h-5" />
                        <button onClick={() => { toggleMenu(); changeLanguage(); }} className="hover:text-blue-300">
                            {t("change-language")}
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}

