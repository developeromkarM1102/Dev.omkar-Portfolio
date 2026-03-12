import { Github, Linkedin, Mail, ArrowUp, Instagram , SmileIcon} from "lucide-react";

const Footer = () => {

  return (
    <footer className="border-t border-primary/20 py-10 px-6 mt-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-primary">
            Omkar's Portfolio
          </h3>
          <p className="text-sm text-muted-foreground mt-2 mb-5">
            Building modern web experiences with passion and creativity.
          </p>
          <p className="flex items-center gap-2 sm:align-middle justify-center md:justify-start text-sm text-muted-foreground">
            Made with <SmileIcon className="w-5 h-5 fill-yellow-500 text-black" /> by
            <span className="text-primary font-bold">Me</span>
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">

          <a
            href="https://github.com/developeromkarM1102"
            className="p-3 border border-primary/20 rounded-lg hover:border-primary transition"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/omkar-mutal-55b76335b/"
            className="p-3 border border-primary/20 rounded-lg hover:border-primary transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="mailto:omkarmutal1102@gmail.com"
            className="p-3 border border-primary/20 rounded-lg hover:border-primary transition"
          >
            <Mail size={18} />
          </a>

          <a
            href="https://www.instagram.com/mutal_omkar/"
            className="p-3 border border-primary/20 rounded-lg hover:border-primary transition"
          >
            <Instagram size={18} />
          </a>

        </div>

      </div>


      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">

        <p>
          © {new Date().getFullYear()} Omkar's Portfolio. All rights reserved.
        </p>


        <a
          onClick={() =>
            document.getElementById("hero").scrollIntoView({
              behavior: "smooth"
            })
          } className="mt-10 flex items-center gap-1 hover:text-primary cursor-pointer transition sm:align-middle justify-center md:mr-25"
        >
          Back to Top
          <ArrowUp size={16} />
        </a>

      </div>

    </footer>
  );
};

export default Footer;