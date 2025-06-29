import {Link} from "react-router";
import {Menu, X} from "lucide-react";
import frFlag from "../../assets/france.png";
import enFlag from "../../assets/royaume-uni.png";
import {useTranslation} from "react-i18next";

export default function NavbarView({open, toggleMenu, changeLanguage,logout, isLogged, t}) {
    const {i18n } = useTranslation();
    const flag = i18n.language.startsWith("fr") ? frFlag : enFlag;

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">🎮 Game Users</Link>

                {/* Desktop menu */}
                <ul className="hidden md:flex space-x-6 items-center text-lg">
                    <li><Link to="/" className="hover:text-blue-300">{t("menu.home")}</Link></li>
                    {isLogged && (
                        <li>
                            <Link to={"/search"} className="hover:text-blue-300">{t("search")}</Link>
                        </li>
                        )}
                    {isLogged && (
                        <li>
                            <Link to={"/profile"} className="hover:text-blue-300">{t("profile")}</Link>
                        </li>
                    )}
                    {isLogged ? (
                        <li>
                            <button onClick={logout} className="hover:text-red-400">
                                {t("menu.logout")}
                            </button>
                        </li>
                        ) : (
                    <li>
                        <Link to="/login" className="hover:text-blue-300">{t("menu.login")}</Link>
                    </li>
                    )}

                    <li className="flex items-center gap-2">
                        <img src={flag} alt="langue" className="w-5 h-5"/>
                        <button onClick={changeLanguage} className="hover:text-blue-300">
                            {t("change-language")}
                        </button>
                    </li>
                </ul>

                {/* Burger menu */}
                <button onClick={toggleMenu} className="md:hidden">
                    {open ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden px-4 pb-4 space-y-2 text-lg bg-gray-800">
                    <li><Link to="/" onClick={toggleMenu} className="block hover:text-blue-300">{t("menu.home")}</Link>
                    </li>

                    {isLogged && (
                        <li>
                            <Link to="/search" onClick={toggleMenu} className="block hover:text-blue-300">{t("search")}</Link>
                        </li>
                        )}

                    {isLogged && (
                        <li>
                            <Link to="/profile" onClick={toggleMenu} className="block hover:text-blue-300">{t("profile")}</Link>
                        </li>
                    )}
                    {isLogged ? (
                        <li>
                            <button onClick={() => {toggleMenu(); logout(); }} className="hover:text-red-400 w-full text-left">
                                {t("menu.logout")}
                            </button>
                        </li>
                        ): (
                    <li>
                        <Link to="/login" onClick={toggleMenu}
                              className="block hover:text-blue-300">{t("menu.login")}</Link>
                    </li>
                    )}
                    <li className="flex items-center gap-2">
                        <img src={flag} alt="langue" className="w-5 h-5"/>
                        <button onClick={() => {
                            toggleMenu();
                            changeLanguage();
                        }} className="hover:text-blue-300">
                            {t("change-language")}
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}