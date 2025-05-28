import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 section"
    >
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="text-xl md:text-2xl uppercase tracking-wider text-foreground/70">
            Hello, I'm
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="glow-text">Soumojit Gon</span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8 text-xl md:text-2xl text-foreground/90 h-16"
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "MERN Stack Developer",
                "Web3 Enthusiast",
                "Blockchain Developer",
                "Open Source Contributor",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "text-glow-primary",
              cursorClassName: "text-glow-primary",
            }}
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          I craft immersive digital experiences by combining cutting-edge
          technologies with innovative thinking and a deep passion for
          beautiful, functional design. My work focuses on creating seamless,
          engaging interfaces that not only look stunning but also deliver
          intuitive user journeys. By blending creativity with technical
          expertise, I transform ideas into vibrant digital realities that
          resonate with users and drive meaningful interactions. Every project I
          take on is fueled by a commitment to quality, responsiveness, and
          accessibility — ensuring that each experience is as inclusive as it is
          impactful. Whether building sleek web applications, interactive
          platforms, or dynamic mobile experiences, I aim to push the boundaries
          of what's possible and make technology truly human-centered.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex space-x-4 justify-center mb-16"
        >
          <a href="#projects" className="button-primary">
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 border border-white/10 rounded-md 
              hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a
            href="#skills"
            className="flex flex-col items-center text-foreground/50 hover:text-foreground/80 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
