import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Instagram } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">

      
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -top-20 -left-20"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
      >

        
        <motion.div variants={item} className="space-y-6">

          <p className="text-primary uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-muted-foreground text-lg max-w-lg">
            Have a project idea or collaboration in mind? I'm always open
            to discussing new opportunities and creative ideas.
          </p>

         
          <div className="flex justify-center gap-6 pt-4">

            <motion.a
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.5)"
              }}
              href="mailto:omkarmutal1102@gmail.com"
              className="p-4 border border-primary/20 rounded-lg"
            >
              <Mail />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.5)"
              }}
              href="https://github.com/developeromkarM1102"
              className="p-4 border border-primary/20 rounded-lg"
            >
              <Github />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.5)"
              }}
              href="https://www.linkedin.com/in/omkar-mutal-55b76335b/"
              className="p-4 border border-primary/20 rounded-lg"
            >
              <Linkedin />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.5)"
              }}
              href="https://www.instagram.com/mutal_omkar/"
              className="p-4 border border-primary/20 rounded-lg"
            >
              <Instagram />
            </motion.a>

          </div>

        </motion.div>

        
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-2xl border border-primary/20 backdrop-blur-md bg-background/40"
        >

          <form className="space-y-6">

            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0px 0px 10px rgba(99,102,241,0.6)"
              }}
              type="text"
              placeholder="Your Name"
              className="text-blue-400 w-full p-3 rounded-lg bg-transparent border border-primary/20"
            />

            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0px 0px 10px rgba(99,102,241,0.6)"
              }}
              type="email"
              placeholder="Your Email"
              className="text-blue-400 w-full p-3 rounded-lg bg-transparent border border-primary/20"
            />

            <motion.textarea
              whileFocus={{
                scale: 1.02,
                boxShadow: "0px 0px 10px rgba(99,102,241,0.6)"
              }}
              rows="5"
              placeholder="Your Message"
              className="text-blue-400 w-full p-3 rounded-lg bg-transparent border border-primary/20"
            />

          
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(99,102,241,0.7)"
              }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg"
            >
              Send Message
              <Send size={18}/>
            </motion.button>

          </form>

        </motion.div>

      </motion.div>

    </section>
  );
};

export default Contact;