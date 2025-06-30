import {useState} from 'react';
import {Field, Label, Switch} from '@headlessui/react';

export default function ContactView({form, onChange, onSubmit, sent, error}) {
    const [agreed, setAgreed] = useState(false);

    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Contact
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Merci de bien remplir les informations pour me contacter.
                </p>
                {sent && (
                    <p className="text-green-600 mt-4">✅ Message envoyé avec succès !</p>
                )}
                {error && (
                    <p className="text-red-600 mt-4">{error}</p>
                )}
            </div>

            <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-semibold text-gray-900">
                            Prénom
                        </label>
                        <input
                            name="firstName"
                            value={form.firstName}
                            onChange={onChange}
                            required
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-900">
                            Nom
                        </label>
                        <input
                            name="lastName"
                            value={form.lastName}
                            onChange={onChange}
                            required
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-900">
                            Société
                        </label>
                        <input
                            name="company"
                            value={form.company}
                            onChange={onChange}
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-900">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={onChange}
                            required
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-900">
                            Téléphone
                        </label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={onChange}
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-gray-900">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            rows={4}
                            required
                            className="block w-full rounded-md border border-gray-300 px-3.5 py-2"
                        />
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={`group flex w-8 cursor-pointer rounded-full p-px ${
                                    agreed ? 'bg-indigo-600' : 'bg-gray-200'
                                }`}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={`size-4 transform rounded-full bg-white transition ${
                                        agreed ? 'translate-x-3.5' : ''
                                    }`}
                                />
                            </Switch>
                        </div>
                        <Label className="text-sm text-gray-600">
                            En cochant, vous acceptez notre{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                politique de confidentialité
                            </a>
                            .
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className={`block w-full rounded-md ${
                            agreed ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-gray-400 cursor-not-allowed'
                        } px-3.5 py-2.5 text-center text-sm font-semibold text-white`}
                        disabled={!agreed}
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}
