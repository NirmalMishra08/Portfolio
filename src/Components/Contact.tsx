import  { useState } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {
    const apiKey = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();

        console.log(name,email,message)

        // Input Validation
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }
        if (!/^[a-zA-Z\s\-']+$/.test(name)) {
            setError("Name must only contain valid characters.");
            return;
        }
        setError(""); // Clear error if inputs are valid
        setIsLoading(true);

        emailjs
            .sendForm(apiKey, templateId, e.target, userId)
            .then(
                () => {
                    alert("Message sent successfully!");
                    setIsLoading(false);
                },
                (error) => {
                    alert(`Failed to send message. Error: ${error.text}`);
                    setIsLoading(false);
                }
            );

        e.target.reset(); // Clear form only after successful submission
    };

    return (
        <div className="flex items-center justify-center min-h-screen ">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-[#171e29] shadow-lg rounded-lg p-6"
            >
                <h2 className="text-2xl font-bold text-center from-pink-900 via-slate-500 to-purple-500 mb-4">
                    Get In Touch
                </h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="from_name"
                        id="name"
                        aria-label="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="reply_to"
                        id="email"
                        aria-label="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-gray-600 mb-2"
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        
                        aria-label="Message"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 ${
                        isLoading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-400"
                    }`}
                >
                    {isLoading ? "Sending..." : "Send"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;