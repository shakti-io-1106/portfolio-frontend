import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/profile/self3-bgrmv3.PNG";

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8 text-center md:text-left"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 text-sm h-6">
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "MERN Stack Developer",
                "Frontend Developer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I’m{" "}
            <span className="text-cyan-400">
              Shakti
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            I build modern, responsive and scalable web applications
            using React, Node.js and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <button onClick={() => scrollToSection("projects")} className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">
              View Projects
            </button>

            <button onClick={() => scrollToSection("contact")} className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Contact Me
            </button>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                10+
              </h2>

              <p className="text-gray-400 text-sm">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                2+
              </h2>

              <p className="text-gray-400 text-sm">
                Years Learning
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                100%
              </h2>

              <p className="text-gray-400 text-sm">
                Passion
              </p>
            </div>

          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center"
        >

          <div className="relative group">

            {/* Rotating Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-spin-slow blur-sm opacity-80"></div>

            {/* Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-black bg-zinc-900">

              <img
                src={profileImage}
                alt="profile"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom Animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </section >
  );
}

export default Hero;    