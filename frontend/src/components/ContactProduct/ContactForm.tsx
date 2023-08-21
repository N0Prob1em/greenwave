import React, { useState } from 'react';
import contactApi from '../../api/contactApi';
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from 'react-router-dom';

const ContactForm: React.FC = () => {
    const [name, setName] = useState("");
    //const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const { user } = useAuth0();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const productTitle = searchParams.get('productTitle');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await contactApi.sendMail({
            to: "servicedesk.greenwave@gmail.com",
            subject: name,
            body: message
        });
        if (response) {
            alert("Message delivered..");
            await contactApi.sendMail({
                to: user?.email,
                subject: name,
                body: "Your interest for " + productTitle + " Successfully sent.."
            });
        } else {
            // Handle error
        }
    };

    return (
        <div className="w-full max-w-md mx-auto mt-5">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Subject
                    </label>
                    <textarea
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Your Subject"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                        placeholder="Your Message"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
