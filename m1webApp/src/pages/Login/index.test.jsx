import {describe, test, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import LoginView from "./view";
import '../../i18n';
import '../../i18nForTest.js';
import {MemoryRouter} from "react-router-dom";

describe('Login page',()=>{
    test("Affiche le titre et les champs du formulaire", () => {
        render(
            <MemoryRouter>
                <LoginView
                    form={{username: '', password: ''}}
                    onChange={()=>{}}
                    onSubmit={()=>{}}
                    message={null}
                />
            </MemoryRouter>
        );

        expect(screen.getByRole('heading', {name:/Connexion/i})).toBeInTheDocument();

        expect(screen.getByPlaceholderText(/Nom d'utilisateur/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Mot de Passe/i)).toBeInTheDocument();

        expect(screen.getByRole('button', {name:/Se connecter/i})).toBeInTheDocument();

        expect(screen.getByRole('link', {name:/S'enregistrer/i})).toBeInTheDocument();
    });
});
