import React, {useState } from "react";
import View from "./view.jsx";
import {loginUser, registerUser} from "../../services/api.jsx";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    const [message, setMessage] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginUser(form);
        if (res.ok) {
          //  const token = await res.json();
           // localStorage.setItem("token", token);
            setMessage("Connexion validée");
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