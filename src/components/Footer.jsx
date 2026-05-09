import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 py-10 px-6">

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <div>
                    <h2 className="text-2xl font-bold">
                        Shakti<span className="text-cyan-400">.</span>
                    </h2>

                    <p className="text-gray-400 mt-2">
                        Full Stack Developer
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-6 text-gray-400">

                    <a
                        href="#home"
                        className="hover:text-cyan-400 transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="hover:text-cyan-400 transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#projects"
                        className="hover:text-cyan-400 transition duration-300"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="hover:text-cyan-400 transition duration-300"
                    >
                        Contact
                    </a>

                </div>

                {/* Socials */}
                <div className="flex gap-4">

                    <a
                        href="https://github.com/shakti-io-1106"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://in.linkedin.com/in/shaktipada-sahoo-075619321"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition duration-300"
                    >
                        <FaXTwitter />
                    </a>

                </div>


            </div>

            {/* Bottom */}
            <div className="text-center text-gray-500 text-sm mt-10">
                © 2026 Shakti. All rights reserved.
            </div>


        </footer>
    );
}

export default Footer;