import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, BrainCircuit, Cloud, Code2, Mail } from "lucide-react";
import { SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiReact, SiGithub } from "react-icons/si";
import { FaJava, FaLinkedin } from "react-icons/fa";

const featureRows = [
  {
    label: "MERN / Next.js",
    sublabel: "Full-Stack Development",
    icon: Code2,
    tone: "bg-sky-100 text-sky-700",
  },
  {
    label: "AI Developement",
    sublabel: "AI Integration",
    icon: BrainCircuit,
    tone: "bg-violet-100 text-violet-700",
  },
  {
    label: "Docker / AWS",
    sublabel: "Deploy & DevOps",
    icon: Cloud,
    tone: "bg-cyan-100 text-cyan-700",
  },
];

const stats = [
  { value: "4+", label: "AI-Powered Projects" },
  { value: "500+", label: "GitHub Contributions" },
  { value: "100+", label: "DSA Problems" },
];

const techPills = [
  { label: "React", icon: SiReact, color: "text-[#61dafb]" },
  { label: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { label: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { label: "MongoDB", icon: SiMongodb, color: "text-[#47a248]" },
  { label: "AI APIs", icon: SiOpenai, color: "text-[#8b5cf6]" },
  { label: "Java", icon: FaJava, color: "text-[#e76f00]" },
];

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/developeromkarM1102/",
    icon: SiGithub,
    iconStyle: "bg-slate-900 text-white dark:bg-white dark:text-slate-950",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/omkar-mutal-55b76335b/",
    icon: FaLinkedin,
    iconStyle: "bg-[#0a66c2] text-white",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:mailto@gmail.com",
    icon: Mail,
    iconStyle: "bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-300",
    external: false,
  },
];

const headingWords = {
  firstLine: ["FULL", "STACK"],
  secondLine: ["DEVELOPER"],
};

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".gsap-bg", { opacity: 0, duration: 0.7 })
        .from(
          ".gsap-heading-word-text",
          { yPercent: 110, opacity: 0, duration: 0.8, stagger: 0.11 },
          0.2
        )
        .from(
          ".gsap-rule",
          {
            scaleX: 0,
            opacity: 0,
            transformOrigin: "left center",
            duration: 0.8,
          },
          0.75
        )
        .from(".gsap-description", { y: 20, opacity: 0, duration: 0.7 }, 0.85)
        .from(
          ".gsap-connect-label",
          { y: 10, opacity: 0, duration: 0.4 },
          0.98
        )
        .from(
          ".gsap-social-link",
          { y: 10, opacity: 0, scale: 0.96, duration: 0.4, stagger: 0.08 },
          1.08
        )
        .from(
          ".gsap-button",
          { y: 18, opacity: 0, scale: 0.97, duration: 0.55, stagger: 0.12 },
          1.35
        )
        .from(
          ".gsap-portrait-card",
          { opacity: 0, scale: 0.94, y: 18, duration: 0.9 },
          1.1
        )
        .from(
          ".gsap-pill",
          { y: 14, opacity: 0, scale: 0.96, duration: 0.45, stagger: 0.08 },
          1.45
        )
        .from(
          ".gsap-stat",
          {
            y: 18,
            opacity: 0,
            scale: 0.95,
            duration: 0.55,
            stagger: 0.12,
          },
          1.7
        )
        .from(".gsap-panel", { y: 20, opacity: 0, duration: 0.8 }, 1.55)
        .from(
          ".gsap-availability",
          { y: 12, opacity: 0, duration: 0.45 },
          1.9
        )
        .from(
          ".gsap-feature-row",
          { y: 14, opacity: 0, duration: 0.45, stagger: 0.11 },
          2.05
        )
        .from(".gsap-quote", { opacity: 0, y: 16, duration: 0.6 }, 2.45);

      gsap.utils.toArray(".gsap-counter").forEach((counter, index) => {
        const count = { value: 0 };
        const target = Number(counter.dataset.target);

        counter.textContent = "0";
        tl.to(
          count,
          {
            value: target,
            duration: 1.2,
            ease: "power2.out",
            snap: { value: 1 },
            onUpdate: () => {
              counter.textContent = String(count.value);
            },
          },
          2.5 + index * 0.12
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen scroll-mt-20 overflow-hidden bg-transparent text-foreground transition-colors duration-300"
      style={{
        "--hero-accent":
          "color-mix(in srgb, #0891b2 76%, hsl(var(--foreground)))",
      }}
    >
      <div
        className="gsap-bg absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 52% 42%, rgba(12,202,255,0.22), transparent 29%), linear-gradient(135deg, color-mix(in srgb, hsl(var(--background)) 75%, #0b3157), hsl(var(--background)) 62%, hsl(var(--background)))",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, hsl(var(--foreground)) 16%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, hsl(var(--foreground)) 16%, transparent) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute left-1/2 top-[43%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[120px] sm:h-[560px] sm:w-[560px]" />

      <div className="relative z-10 mx-auto max-w-[1460px] px-5 pb-8 pt-24 md:px-8 md:pt-24 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-1 gap-y-7 lg:grid-cols-12 lg:items-stretch lg:gap-x-0 lg:gap-y-0">
          <div className="order-1 relative z-10 text-center lg:col-[1/7] lg:row-start-1 lg:self-end lg:pb-6 lg:text-left">
            <div className="gsap-heading">
              <h1
                aria-label="Full Stack Developer"
                className="text-[clamp(3.1rem,7.3vw,7.2rem)] font-black leading-[0.86] tracking-[-0.09em] lg:text-[clamp(3.1rem,4.7vw,6rem)]"
              >
                <span
                  aria-hidden="true"
                  className="gsap-heading-line block text-foreground"
                >
                  {headingWords.firstLine.map((word) => (
                    <span
                      key={word}
                      className="gsap-heading-word mr-[0.2em] inline-block overflow-hidden align-bottom"
                    >
                      <span className="gsap-heading-word-text inline-block">
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
                <span
                  aria-hidden="true"
                  className="gsap-heading-line block text-[var(--hero-accent)]"
                >
                  {headingWords.secondLine.map((word) => (
                    <span
                      key={word}
                      className="gsap-heading-word inline-block overflow-hidden align-bottom"
                    >
                      <span className="gsap-heading-word-text inline-block">
                        {word}
                      </span>
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            <div className="gsap-rule mt-3 h-1.5 w-[min(220px,55%)] rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-sky-400" />

            <p className="gsap-description mt-6 max-w-[31rem] text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl lg:mt-5 lg:max-w-[18rem] lg:text-lg xl:max-w-[27rem] xl:text-xl">
              I build end-to-end, AI-powered web applications that solve
              real-world problems through modern frontend engineering, scalable
              backend systems, and intelligent AI integrations.
            </p>

            <div className="mt-4 flex flex-col items-center gap-2 lg:items-start">
              <span className="gsap-connect-label text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/60 sm:text-xs">
                LET&apos;S CONNECT
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                {contactLinks.map(
                  ({ label, href, icon: Icon, iconStyle, external }) => (
                    <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="gsap-social-link inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-background/70 px-2.5 py-1.5 text-xs font-semibold text-foreground/80 shadow-sm transition-[transform,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-cyan-400/70 hover:text-[var(--hero-accent)] hover:shadow-[0_8px_20px_rgba(14,165,233,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-lg ${iconStyle}`}
                      aria-hidden="true"
                    >
                      {React.createElement(Icon, { size: 14 })}
                    </span>
                    <span>{label}</span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="gsap-portrait-wrap order-2 relative mx-auto flex h-[min(58svh,500px)] w-full max-w-[360px] items-end justify-center sm:h-[min(62svh,560px)] sm:max-w-[390px] lg:col-[5/9] lg:row-start-1 lg:row-span-2 lg:mx-0 lg:h-[min(64svh,560px)] lg:max-w-none lg:self-center xl:h-[min(78svh,720px)]">
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[78%] w-[105%] -translate-x-1/2 rounded-full bg-cyan-400/25 blur-[55px] sm:blur-[75px]" />
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 aspect-square w-[94%] -translate-x-1/2 rounded-full border border-cyan-400/35 bg-[radial-gradient(circle,_rgba(14,165,233,0.24),_rgba(14,165,233,0.07)_55%,_transparent_72%)]" />
            <div className="gsap-portrait-card group relative z-10 h-full aspect-[853/1280] overflow-hidden rounded-[48%_48%_2rem_2rem] border border-cyan-300/70 bg-slate-200 shadow-[0_0_0_5px_rgba(34,211,238,0.08),0_24px_60px_rgba(14,116,190,0.3)] transition-transform duration-500 ease-out hover:scale-[1.015] motion-reduce:transition-none lg:hover:-translate-y-1">
              <img
                src="/portfolio.jpeg"
                alt="Omkar Mutal"
                className="h-full w-full object-cover object-[50%_50%]"
              />
            </div>
          </div>

          <div className="order-3 relative z-10 lg:col-[1/6] lg:row-start-2 lg:self-start lg:pr-4">
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="gsap-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cyan-300 bg-cyan-400 px-6 py-3 text-sm font-semibold text-sky-950 shadow-[0_0_26px_rgba(34,211,238,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-cyan-300 active:scale-[0.98] sm:text-base"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="gsap-button inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.03] hover:border-cyan-500 hover:text-[var(--hero-accent)] active:scale-[0.98] sm:text-base"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {techPills.map(({ label, icon: Icon, color }) => (
                <span
                  key={label}
                  className="gsap-pill inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-3 py-2 text-xs font-semibold text-foreground shadow-[0_0_16px_rgba(14,165,233,0.08)] transition-[transform,border-color,box-shadow] duration-200 hover:scale-105 hover:border-cyan-400/70 hover:shadow-[0_8px_20px_rgba(14,165,233,0.14)]"
                >
                  {React.createElement(Icon, {
                    size: 15,
                    className: `shrink-0 ${color}`,
                    "aria-hidden": true,
                  })}
                  <span>{label}</span>
                </span>
              ))}
            </div>

            <div className="mt-6 grid max-w-[31rem] grid-cols-3 gap-2.5 text-left sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="gsap-stat rounded-2xl border border-border bg-background/65 px-3 py-3 backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_12px_28px_rgba(14,165,233,0.12)] sm:px-4 sm:py-4"
                >
                  <div className="text-2xl font-black tracking-[-0.08em] text-foreground sm:text-3xl md:text-4xl">
                    <span
                      className="gsap-counter"
                      data-target={Number.parseInt(stat.value, 10)}
                    >
                      {stat.value.slice(0, -1)}
                    </span>
                    <span>{stat.value.slice(-1)}</span>
                  </div>
                  <div className="mt-1.5 text-[0.65rem] leading-snug text-foreground/70 sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="gsap-panel order-4 relative z-0 rounded-[2rem] border border-border bg-background/95 p-5 text-left text-foreground shadow-[0_24px_70px_rgba(15,45,75,0.12)] sm:p-7 lg:col-[7/13] lg:row-start-1 lg:row-span-2 lg:ml-0 lg:p-7 lg:pl-[42%] xl:pl-[37%]">
            <div className="gsap-availability flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-foreground/70 sm:text-xs">
              <span>Available for</span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500">
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-60 motion-reduce:hidden" />
              </span>
            </div>
            <h2 className="mt-3 max-w-[16rem] text-3xl font-black leading-[0.98] tracking-[-0.07em] sm:text-4xl lg:text-[clamp(2rem,3vw,3rem)]">
              <span className="block">Internships &</span>
              <span className="block text-[var(--hero-accent)]">
                Full-Stack
              </span>
              <span className="block text-[var(--hero-accent)]">
                Projects
              </span>
            </h2>

            <div className="mt-6 space-y-3">
              {featureRows.map(({ label, sublabel, icon: Icon, tone }) => (
                <div
                  key={label}
                  className="gsap-feature-row flex items-center gap-3 rounded-2xl border border-border bg-background/75 p-3 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:shadow-[0_10px_24px_rgba(14,165,233,0.1)] sm:gap-4 sm:p-3.5"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${tone}`}
                  >
                    {React.createElement(Icon, { size: 22 })}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold tracking-[-0.04em] text-foreground sm:text-base">
                      {label}
                    </div>
                    <div className="text-xs text-foreground/70 sm:text-sm">
                      {sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="gsap-quote mt-6 rounded-[1.5rem] border border-cyan-400/35 bg-background p-4 shadow-[0_8px_24px_rgba(14,165,233,0.08)] sm:p-5">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-3xl font-black leading-none text-cyan-700">
                  “
                </div>
                <p className="pt-1 text-left text-sm font-semibold leading-snug text-foreground sm:text-base">
                  Turn ideas into real, scalable products with code and AI.
                </p>
              </div>
              <div className="mt-4 pl-12 text-sm font-bold text-[var(--hero-accent)] sm:text-base">
                — Omkar Mutal
              </div>
            </div>
          </aside>
        </div>

        <div className="relative px-2 pb-2 pt-8 text-center sm:pt-10">
          <div className="mx-auto h-px w-[40%] max-w-[420px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <h3 className="mt-4 text-[var(--hero-accent)] text-[clamp(2rem,3vw,5.5rem)] font-black tracking-[-0.07em]">
            "{"You're the {CSS} to my </HTML>"}"
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
