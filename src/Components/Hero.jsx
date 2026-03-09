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

  const [mouse, setMouse] = useState({x:0,y:0});

  const handleMove = (e)=>{
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width/2)/20;
    const y = (e.clientY - rect.top - rect.height/2)/20;

    setMouse({x,y});
  }

  return (
    <section
      id="hero"
      onMouseMove={handleMove}
      className="min-h-screen flex items-center px-6 relative overflow-hidden scroll-mt-5"
    >

      {/* Gradient background */}
      <motion.div
        animate={{
          x: mouse.x * 5,
          y: mouse.y * 5
        }}
        transition={{ type:"spring", stiffness:50 }}
        className="absolute w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -top-20 -left-20"
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center space-y-6 text-center md:text-left md:ml-5"
        >

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
  <span className="text-foreground">Omkar</span>
  <br />

  <span className="text-cyan-400">
    <TypeAnimation
      sequence={[
        "AI-Enthusiast",
        3000,
        "Full Stack Developer",
        2000,
        "React Developer",
        2000,
        "Backend Developer",
        2000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I’m a Information Technology student building my path toward becoming a Full-Stack Developer with AI integration skills.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
          >

            <motion.a
              whileHover={{
                scale:1.1,
                boxShadow:"0px 0px 30px rgba(99,102,241,0.6)"
              }}
              whileTap={{ scale:0.9 }}
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{
                scale:1.1,
                backgroundColor:"#6366f1",
                color:"#fff"
              }}
              whileTap={{ scale:0.9 }}
              href="#contact"
              className="px-6 py-3 border border-primary text-primary rounded-lg font-medium"
            >
              Contact Me
            </motion.a>

          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{
            rotateX: mouse.y,
            rotateY: mouse.x
          }}
          transition={{ type:"spring", stiffness:120 }}
          className="hidden md:flex justify-end md:mr-25"
        >

          <div className="relative">

            {/* Glow */}
            <motion.div
              animate={{ scale:[1,1.2,1] }}
              transition={{ duration:4, repeat:Infinity }}
              className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
            />

            <motion.img
              src="/portfolio.jpeg"
              alt="Omkar"
              className="relative w-80 h-80 object-cover rounded-4xl border-4 border-primary shadow-xl"
              whileHover={{ scale:1.05 }}
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y:[0,12,0] }}
        transition={{ duration:1.5, repeat:Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted-foreground"
      >
        Scroll ↓
      </motion.div>

    </section>
  );
};

export default Hero;