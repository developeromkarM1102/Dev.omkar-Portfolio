import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;

    setMouse({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >

      {/* Gradient background */}
      <motion.div
        animate={{
          x: mouse.x * 5,
          y: mouse.y * 5
        }}
        transition={{ type: "spring", stiffness: 50 }}
        className="absolute w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -top-20 -left-20"
      />

      {/* CENTERED CONTENT */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-center">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center space-y-6"
        >

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-primary font-medium tracking-wider uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-foreground font-[Raleway]">
              Omkar Mutal
            </span>
            <br />

            <span className="text-blue-500 font-[Lato]">
              Full Stack Developer building AI-powered web apps
            </span>

            <br />

            <span className="text-sm md:text-lg text-muted-foreground">
              <TypeAnimation
                sequence={[
                  "Building scalable web apps with MERN stack",
                  2000,
                  "Developing AI-powered solutions",
                  2000,
                  "Creating beautiful user interfaces",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          {/* Proof Line */}
          <motion.p
            variants={item}
            className="text-green-400 text-sm"
          >
          Built AI-powered projects | MERN Stack | Deployed Applications
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-muted-foreground text-lg max-w-xl leading-relaxed"
          >
            I build scalable full-stack applications and AI-powered systems that solve real-world problems. Currently focused on creating production-ready projects and looking for full stack internship opportunities.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >

            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 40px rgba(99,102,241,0.9)"
              }}
              whileTap={{ scale: 0.9 }}
              href="#projects"
              className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 40px rgba(34,197,94,0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              href="https://gen-ai-interview-preparation.vercel.app/"
              target="_blank"
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium"
            >
              Try AI Project 
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "#6366f1",
                color: "#fff"
              }}
              whileTap={{ scale: 0.9 }}
              href="/Omkar_Mutal_Resume.pdf"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium"
            >
              My Resume
            </motion.a>

          </motion.div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-sm text-muted-foreground"
      >
        ↓ Scroll to explore ↓
      </motion.div>

    </section>
  );
};

export default Hero;