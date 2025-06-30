import {useState} from "react";
import  emailjs from "@emailjs/browser";
import View from './view.jsx';

export default function Contact(){
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const handleCHange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_xp24u06', // Service ID coté EMailjs
            'template_6vccyme',// Template ID
            {
                from_name : `${form.name.firstName} ${form.name.lastName}`,
                message : form.message,
                email : form.email,
                company: form.email,
                phone: form.phone,
            },
            'Dl36KRzik8Hlq6r3N' // Key API public Emailjs
        ).then (() => {
            setSent(true);
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                phone: "",
            });
        }).catch((err) => {
            setError("erreur lors de l'envoie du message");
            console.log(err);
        });
        };
    return (
        <View
            form={form}
            onChange={handleCHange}
            onSubmit={handleSubmit}
            sent={sent}
            error={error}
            />
    );
}