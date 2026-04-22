import React from "react";
import { Github, ExternalLink } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

const container = {

  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const Projects = () => {

  const [openIndex, setopenIndex] = useState(null);

  const projects = [

    {
      title: "AI Interview Prep Platform",
      description:
        "An AI-powered interview preparation platform that creates personalized mock interviews based on your resume, self-description, and target job role. It simulates real interview scenarios and provides intelligent feedback to improve performance.",
      image: "/p1.png",
      tech: ["React", "Gemini API", "Express", "Node.js"],
      github: "https://github.com/developeromkarM1102/GEN-AI-Interview-Preparation-Project",
      live: "https://gen-ai-interview-preparation.vercel.app/",
      features: [
        "Personalized interview questions using LLM",
        "Resume & job description-based customization",
        "Real-time AI feedback and suggestions",
        "Simulated interview experience"
      ]
    },
    {
      title: "AI-CampusSpeak",
      description:
        "AI-powered campus grievance platform that enables students to raise issues and receive intelligent responses while helping administration manage and resolve complaints efficiently.AI-powered campus grievance platform connecting students and administration.",
      image: "/Capture.PNG",
      tech: ["React", "OpenAI", "Express"],
      github: "https://github.com/developeromkarM1102/AI-CampusSpeak",
      live: "https://ai-campus-speak.vercel.app/",
      features: [
        "AI-assisted complaint classification and routing",
        "Real-time communication between students and admin",
        "Smart response suggestions using LLM",
        "Centralized dashboard for issue tracking"
      ]
    },
    {
      title: "Developer Portfolio",
      description:
        "A modern, responsive portfolio website designed to showcase full-stack and AI projects with interactive UI, smooth animations, and optimized performance.",
      image: "/p2.PNG",
      tech: ["React", "Tailwind", "Motion"],
      github: "https://github.com/developeromkarM1102/Dev.omkar-Portfolio",
      live: "https://dev-omkar-portfolio.vercel.app/",
      features: [
        "Interactive project showcase with animations",
        "Responsive design across all devices",
        "Optimized performance and fast loading",
        "Clean UI focused on user experience"
      ]
    },
    {
      title: "Hotel Ordering System",
      description:
        "Full-stack hotel ordering system with real-A full-stack web application that enables customers to order food and reserve tables online, while providing admins with a real-time dashboard to manage orders and reservations efficiently.",
      image: "/HOS-img.PNG",
      tech: ["HTML", "CSS", "JS", "Node", "MongoDB", "Express"],
      github: "https://github.com/developeromkarM1102/Hotel-Restoff-project",
      live: "https://hotel-restoff.onrender.com/",
      features: [
        "Online food ordering and table reservation",
        "Admin dashboard for efficient order handling",
        "Responsive design for all devices"
      ]

    }
  ];

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden mt-0">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold font-[Lato] mt-2">
            Featured Work
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some projects where I applied modern technologies to
            build real-world solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (

            <motion.div
              key={index}
              onClick={() => setopenIndex(openIndex === index ? null : index)}
              variants={item}
              whileHover={{
                scale: 1.03,
                rotateX: 3,
                rotateY: -3
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary min-h-auto flex flex-col"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay (Mobile + Desktop Fix) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                className="absolute inset-0 bg-black/85 flex flex-col justify-center items-center overflow-y-auto text-center p-4 sm:p-6 transition-all"
              >

                <h3 className="text-lg sm:text-xl mt-5 font-semibold text-white ">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                {project.features && (
                  <ul className="text-gray-300 text-xs mt-3 space-y-1">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-1">
                        ⚡ <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech */}
                <div className="flex gap-2 mt-4 flex-wrap justify-center">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="text-[10px] sm:text-xs px-2 py-1 border border-primary text-primary rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-6 mt-5">
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.github}
                    target="_blank"
                  >
                    <Github className="text-white hover:text-primary transition w-5 h-5" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.live}
                    target="_blank"
                  >
                    <ExternalLink className="text-white hover:text-primary transition w-5 h-5" />
                  </motion.a>
                </div>

              </motion.div>

            </motion.div>

          ))}
        </motion.div>

      </div>

    </section>
  );
};

export default Projects;