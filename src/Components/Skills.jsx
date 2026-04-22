import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

import {FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaJava,FaPython,FaGithub, FaAws, FaDocker} from "react-icons/fa";

import {SiExpress,SiMongodb,SiC,SiCplusplus,SiTypescript,SiPostman, SiMysql} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500 dark:text-gray-300" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "Java", icon: <FaJava className="text-red-500" /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    ],
  },
  {
    title: "Languages & Tools",
    items: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-200" /> },  
      { name: "AWS", icon: <FaAws className="text-orange-400" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-600" /> },
    ],
  },
];

const SkillRow = ({ skills, direction = "left" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const speed = skills.length < 3 ? 8 : 20;

  return (
    <div
      className="relative overflow-hidden py-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      <motion.div
        className="flex gap-8 w-max"
        animate={
          isHovered
            ? {}
            : {
                x:
                  direction === "left"
                    ? ["0%", "-50%"]
                    : ["-50%", "0%"],
              }
        }
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-xl 
            border border-border bg-background/80 backdrop-blur-md 
            min-w-[140px] transition duration-300 
            hover:scale-110 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] dark:border-b-blue-500 dark:border-t-pink-500"
          >
            <div className="text-4xl mb-3">
              {skill.icon}
            </div>

            <p className="text-foreground/80 font-medium">
              {skill.name}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
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
        </div>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              {category.title}
            </h3>

            <SkillRow
              skills={category.items}
              direction={index % 2 === 0 ? "left" : "right"}
            />

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;