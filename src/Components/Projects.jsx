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
      title: "AI-CampusSpeak",
      description:
        "AI-powered campus grievance platform connecting students and administration.",
      image: "/Capture.PNG",
      tech: ["React", "OpenAI", "Express"],
      github: "https://github.com/developeromkarM1102/AI-CampusSpeak",
      live: "https://ai-campus-speak.vercel.app/"
    },
    {
      title: "Developer Portfolio",
      description:
        "Modern interactive portfolio with animations and responsive design.",
      image: "/p2.PNG",
      tech: ["React", "Tailwind","Motion"],
      github: "https://github.com/developeromkarM1102/Dev.omkar-Portfolio",
      live: "https://dev-omkar-portfolio.vercel.app/"
    },
    {
      title: "Hotel Ordering System",
      description:
        "Full-stack hotel ordering system with real-time order tracking.",
      image: "/HOS-img.PNG",
      tech: ["HTML","CSS","JS","Node", "MongoDB", "Express"],
      github: "https://github.com/developeromkarM1102/Hotel-Restoff-project",
      live: "https://hotel-restoff.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden">

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

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {projects.map((project, index) => (

            <motion.div onClick={() => setopenIndex(openIndex === index ? null : index)}
              key={index}
              variants={item}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5
              }}
              transition={{ type: "spring", stiffness: 120 }}
              className="group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: openIndex === index ? 1 : 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6"
              >

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mt-2">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex gap-2 mt-4 flex-wrap justify-center">

                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      className="text-xs px-3 py-1 border border-primary text-primary rounded-full"
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
                  >
                    <Github className="text-white hover:text-primary transition"/>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    href={project.live}
                  >
                    <ExternalLink className="text-white hover:text-primary transition"/>
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