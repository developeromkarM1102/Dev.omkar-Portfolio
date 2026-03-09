import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython,} from "react-icons/fa";
import { SiExpress, SiMongodb, SiC, SiCplusplus, SiTypescript } from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Skills = () => {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "TypeScript", icon: <SiTypescript/> },
  ];

  return (
    <section id="skills" className="py-24 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technologies I Work With
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I work with modern technologies to build scalable web applications
            and solve real-world problems efficiently.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale:1.1,
                rotateX:10,
                rotateY:-10,
                boxShadow:"0px 0px 25px rgba(99,102,241,0.5)"
              }}
              transition={{ type:"spring", stiffness:120 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl border border-primary/20 hover:border-primary bg-background/40 backdrop-blur-md"
            >

              <motion.div
                whileHover={{ rotate:360 }}
                transition={{ duration:0.8 }}
                className="text-4xl text-primary mb-3"
              >
                {skill.icon}
              </motion.div>

              <p className="text-foreground font-medium">
                {skill.name}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
};

export default Skills;