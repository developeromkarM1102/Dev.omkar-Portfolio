import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: <i className="ri-home-9-line text-2xl"></i>, href: "#home" },
    { name: "About", icon: <i className="ri-user-line text-2xl"></i>, href: "#about" },
    { name: "Projects", icon: <i className="ri-code-line text-2xl"></i>, href: "#projects" },
    { name: "Skills", icon: <i className="ri-lightbulb-line text-2xl"></i>, href: "#skills" },
    { name: "Contact", icon: <i className="ri-mail-line text-2xl"></i>, href: "#contact" }
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled
          ? "backdrop-blur-lg bg-background/70 border-b border-border shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="text-glow text-foreground">Omkar's</span>
          <span className="ml-1">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
  {navItems.map((item, index) => (
    <a
      key={index}
      href={item.href}
      className="relative group text-foreground hover:text-primary transition-colors duration-300"
    >
      {item.icon}

      <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 
      opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100
      bg-none text-green-500 text-xs px-2 py-1 rounded transition">
        {item.name}
      </span>

    </a>
  ))}
</div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-foreground hover:text-primary relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden
          ${isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none -translate-y-full"
            }`}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name} {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;