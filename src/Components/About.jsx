import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1 }
  }
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          variants={imageAnimation}
          whileHover={{
            rotateY: 10,
            rotateX: -10,
            scale: 1.05
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="flex justify-center"
        >

          <div className="relative">

            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
            />

            <img
              src="/portfolio2.jpeg"
              alt="Omkar"
              className="relative w-80 h-80 object-cover rounded-2xl border border-primary/30 shadow-2xl"
            />

          </div>

        </motion.div>

        <motion.div
          variants={container}
          className="space-y-6"
        >

          <motion.p
            variants={item}
            className="text-primary font-medium tracking-widest uppercase"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold text-foreground font-[Lato]"
          >
            Full Stack Developer<br /> & <br/><span className="text-primary">AI Builder</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl"
          >
            I'm <span className="text-primary font-semibold">Omkar</span>, a full stack developer focused on building scalable web applications and AI-powered solutions. I specialize in creating real-world products that combine clean UI with intelligent backend systems.
          </motion.p>

          <motion.p
            variants={item}
            className="text-muted-foreground text-lg leading-relaxed max-w-xl"
          >
            I have built and deployed multiple projects including AI-based platforms and full-stack systems. Currently pursuing IT while actively preparing for full stack developer internship opportunities.
          </motion.p>

          <motion.div
            variants={container}
            className="grid grid-cols-2 gap-6 pt-6"
          >

            {[
              { number: "4+", label: "Projects Built" },
              { number: "2+", label: "AI Projects" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Deployment Focus" }
            ].map((stat, index) => (

              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 25px rgba(99,102,241,0.5)"
                }}
                className="p-4 rounded-xl border border-primary/20 text-center"
              >
                <h3 className="text-2xl font-bold text-primary">
                  {stat.number}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>

            ))}

          </motion.div>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default About;