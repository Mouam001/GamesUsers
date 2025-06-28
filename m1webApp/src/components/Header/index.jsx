//import {Link, Link} from "react-router"
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import View from "./view.jsx"
import {withTranslation} from "react-i18next";
import i18n from "i18next";
import useToken from "../../hooks/useToken";
import useTokenSetter from "../../hooks/useTokenSetter";
import useUser from "../../hooks/useUser.js";

const TranslatedView = withTranslation()(View);

export default function Navbar(){
    const [open, setOpen] = useState(false);
    const token = useToken();
    const setToken = useTokenSetter();
    const navigate = useNavigate();
    const user = useUser();
    const toggleMenu = () => setOpen(!open);

    const changeLanguage = () => {
        const newLang = i18n.language.startsWith("fr") ? "en" : "fr";
        i18n.changeLanguage(newLang);
    };

    const logout = () => {
        setToken(null);
        navigate("/login");
    }
    if(user){
        console.log(" Connecter en tant que ", user.name);
    }

    return(
        <TranslatedView
            open={open}
            toggleMenu={toggleMenu}
            changeLanguage={changeLanguage}
            logout={logout}
            isLogged={!!token}
        />
    );

}