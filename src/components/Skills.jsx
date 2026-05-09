import { motion } from "framer-motion"
function Skills() {
    const skills = [
        "React",
        "Angular",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Git",
        "GitHub",
        "REST APIs",
        "Vercel",

    ];

    return (
        <section
            id="skills"
            className="bg-black text-white py-24 px-6 border-t border-white/10"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto text-center">

                <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
                    Skills
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Technologies I Work With
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    I use modern frontend and backend technologies to build
                    responsive, scalable and high-performance web applications.
                </p>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-3 hover:border-cyan-400 transition duration-300"
                        >
                            <h3 className="font-semibold text-lg">
                                {skill}
                            </h3>
                        </motion.div>
                    ))}

                </div>
            </motion.div>
        </section>
    );
}

export default Skills;