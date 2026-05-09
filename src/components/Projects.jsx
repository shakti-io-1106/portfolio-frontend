import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import blogImage from "../assets/projects/blog.jpg";
import portfolioImage from "../assets/projects/portfolio.png";
import taskImage from "../assets/projects/taskmanager.webp";
function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/api/projects`
                );
                setProjects(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="bg-black text-white py-24 px-6 border-t border-white/10"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                        Projects
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured Work
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Some of the projects I’ve built using modern web technologies.
                    </p>

                </div>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 group rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                        >

                            {/* Image Placeholder */}
                            <div className="relative h-52 overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-5">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3">

                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="bg-cyan-400/10 text-cyan-400 px-4 py-1 rounded-full text-sm border border-cyan-400/20"
                                        >
                                            {item}
                                        </span>
                                    ))}

                                </div>

                                {/* Buttons */}
                                <div className="flex gap-4 pt-4">

                                    <button className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition duration-300">
                                        Live Demo
                                    </button>

                                    <button className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                                        GitHub
                                    </button>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </motion.div>
        </section>
    );
}

export default Projects;