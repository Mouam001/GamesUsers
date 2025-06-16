import React, {useState } from "react";
import View from "./view.jsx";
import {loginUser, registerUser} from "../../services/api.jsx";
import { useNavigate } from "react-router-dom";
import useTokenSetter from "../../hooks/useTokenSetter";

export default function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    const setToken = useTokenSetter();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginUser(form);
        if (res.ok) {
            const token = await res.text();
            setToken(token);
            setMessage("Connexion validée");
            console.log(res);
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } else {
            const err = await res.text();
            setMessage("Error: " + err);
        }
    };

    return (
        <View
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
            message={message}
        />
    );
}