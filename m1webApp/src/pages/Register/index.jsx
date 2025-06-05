import React, { useState } from "react";
import View from "./view.jsx";
import { registerUser } from "../../services/api.jsx";

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmationPassword: "",
    });

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await registerUser(form);
        if (res.ok) {
            setMessage("Inscription validée");
            setForm({ username: "", password: "", confirmationPassword: "" });
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