//import {Link, Link} from "react-router"
import {useState} from "react";
import View from "./view.jsx"
import {withTranslation} from "react-i18next";
import i18n from "i18next";

const TranslatedView = withTranslation()(View);

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    const changeLanguage = () => {
        const newLang = i18n.language.startsWith("fr") ? "en" : "fr";
        i18n.changeLanguage(newLang);
    };

    return <TranslatedView open={open} toggleMenu={toggleMenu} changeLanguage={changeLanguage}/>;

}