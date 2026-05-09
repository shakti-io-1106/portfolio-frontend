import { useEffect, useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let current = "home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 120;

                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-white">
                    Shakti<span className="text-cyan-400">.</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-white font-medium">
                    <a
                        href="#home"
                        className={`transition duration-300 cursor-pointer ${activeSection === "home"
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                            }`}
                    >
                        Home
                    </a>

                    {/* <li className="hover:text-cyan-400 transition duration-300 cursor-pointer">
            About
          </li> */}
                    <a
                        href="#about"
                        className={`transition duration-300 cursor-pointer ${activeSection === "about"
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                            }`}
                    >
                        About
                    </a>

                    <a href="#skills"
                        className={`transition duration-300 cursor-pointer ${activeSection === "skills"
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                            }`}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={`transition duration-300 cursor-pointer ${activeSection === "projects"
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                            }`}
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className={`transition duration-300 cursor-pointer ${activeSection === "contact"
                            ? "text-cyan-400"
                            : "text-white hover:text-cyan-400"
                            }`}
                    >
                        Contact
                    </a>
                </ul>

                {/* Button */}
                <button onClick={() => scrollToSection("contact")} className="hidden md:block bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition duration-300">
                    Hire Me
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-black/95 border-t border-white/10">
                    <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
                        <a
                            href="#home"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-cyan-400 cursor-pointer"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-cyan-400 cursor-pointer"
                        >
                            About
                        </a>

                        <a href="#skills"
                            className="hover:text-cyan-400 curosr-pointer">
                            Skills
                        </a>

                        <a
                            href="#projects"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-cyan-400 cursor-pointer"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="hover:text-cyan-400 cursor-pointer"
                        >
                            Contact
                        </a>

                        <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold">
                            Hire Me
                        </button>

                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;