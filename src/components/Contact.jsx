import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    // const [success, setSuccess] = useState("");

    // const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // setError("");
        // setSuccess("");

        if (!formData.name ||
            !formData.email ||
            !formData.message
        ) {
            toast.error("Please fill all fields");
            // setError("Please Fill all fields");
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email");
            // setError("Please enter a valid email");
            return;
        }

        if (formData.message.length < 10) {
            toast.error("Message should be at least 10 characters")
            // setError("Message should be at least 10 characters");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                formData
            );
            toast.success("Message sent successfully!");
            // setSuccess(response.data.message);
            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            toast.error("Something went wrong. Please try again.");
            // console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="bg-black text-white py-24 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                {/* Left Side */}
                <div className="space-y-8">

                    <div>
                        <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                            Contact
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Let’s Work Together
                        </h2>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Have a project idea or want to collaborate?
                        Feel free to send me a message.
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-5">

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <h3 className="font-semibold text-lg mb-1">
                                Email
                            </h3>

                            <p className="text-gray-400">
                                connect.shaktipada@gmail.com
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <h3 className="font-semibold text-lg mb-1">
                                Location
                            </h3>

                            <p className="text-gray-400">
                                Odisha, India
                            </p>
                        </div>

                    </div>

                </div>

                {/* Right Side Form */}
                <form onSubmit={handleSubmit} noValidate className="space-y-6">

                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300"
                        />
                    </div>

                    <div>
                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition duration-300 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
                    >
                        {loading ? "sending.." : "Send Message"}
                    </button>
                    {/* {error && (
                        <p className="text-red-400 font-medium">
                            {error}
                        </p>
                    )}
                    {success && (
                        <p className="text-green-400 font-medium">
                            {success}
                        </p>
                    )} */}


                </form>
            </div>
        </section>
    )
}
export default Contact;