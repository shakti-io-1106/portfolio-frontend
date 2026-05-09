import { motion } from "framer-motion";
import sideImage from "../assets/profile/2ndimage.jpg"


function About() {
  return (
    <section id="about" className="bg-black text-white py-24 px-6 border-t border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

          {/* Image */}
          <div className="relative w-80 h-96 rounded-3xl overflow-hidden border border-white/10">
            <img
              src={sideImage}
              alt="about"
              className="w-full h-full object-cover hover:scale-160 transition duration-500 scale-150"
            />
          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8">

          <div>
            <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Passionate About Building Modern Web Experiences
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a Full Stack Developer focused on creating responsive,
            interactive and scalable web applications. I enjoy building
            clean user interfaces and solving backend challenges using
            modern technologies.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My current stack includes React, Node.js, Express and MongoDB.
            I love learning new technologies and improving my development
            skills every day.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Frontend
              </h3>

              <p className="text-gray-400">
                React, Tailwind CSS, Responsive UI, Animations
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                Backend
              </h3>

              <p className="text-gray-400">
                Node.js, Express, MongoDB, REST APIs
              </p>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;