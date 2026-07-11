import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { credentials, profile, projects, skills } from "./content";

const reveal = {
  hidden: { opacity: 0, y: 45 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="nav">
      <a className="logo" href="#top">
        {profile.shortName}
        <i>.</i>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, href], i) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            <span>0{i + 1}</span>
            {label}
          </a>
        ))}
        <a className="nav-cta" href={`mailto:${profile.email}`}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 700], [0, 170]);
  return (
    <section className="hero" id="top">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <motion.div className="hero-content" style={{ y: titleY }}>
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span /> {profile.location}
        </motion.div>
        <h1 aria-label={profile.role}>
          <span className="line">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              AI AUTOMATION
            </motion.span>
          </span>
          <span className="line outline">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              ENGINEER
            </motion.span>
          </span>
        </h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          I build AI-powered web applications, OCR pipelines, and scalable cloud
          systems that turn complex workflows into useful products.
        </motion.p>
      </motion.div>
      <a className="scroll" href="#work">
        <span>Explore work</span>
        <ArrowDown size={18} />
      </a>
      <div className="hero-index">PORTFOLIO / 2026</div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="project-number">{project.number}</div>
      <div className="project-info">
        <div>
          <span className="mono">{project.type}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <span className="nda-note">DESCRIPTION ONLY · NDA SAFE</span>
    </motion.article>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <motion.div
        className="section-label"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <span>02</span> ABOUT ME
      </motion.div>
      <div className="about-grid">
        <motion.div
          className="portrait-wrap"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {profile.photo ? (
            <img src={profile.photo} alt={profile.fullName} />
          ) : (
            <div className="portrait-placeholder">
              <span>YOUR</span>
              <span>PHOTO</span>
              <small>Add your portrait later</small>
            </div>
          )}
          <div className="available">
            <i /> AVAILABLE FOR COLLABORATION
          </div>
        </motion.div>
        <motion.div
          className="about-copy"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>
            Building intelligent
            <br />
            systems with <em>impact.</em>
          </h2>
          <p>
            I'm {profile.fullName}, an AI Automation Engineer and Full-Stack
            Developer at WPH Digital. I build production-ready AI web
            applications that connect document intelligence to real business
            workflows.
          </p>
          <p>
            My work spans LLMs, OCR pipelines, REST APIs, React, Next.js,
            Python, and AWS. I focus on reliable extraction, clean user
            experiences, scalable cloud architecture, and measurable reductions
            in manual work.
          </p>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            CONNECT ON LINKEDIN <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="credentials"
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {credentials.map((item) => (
          <div className="credential" key={`${item.label}-${item.title}`}>
            <span className="mono">{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <Nav />
      <main>
        <Hero />
        <section className="work section" id="work">
          <motion.div
            className="section-head"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="section-label">
              <span>01</span> SELECTED WORK
            </div>
            <h2>
              Things I've <em>made.</em>
            </h2>
          </motion.div>
          <div className="projects">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </section>
        <section className="marquee">
          <div>
            {[...skills, ...skills].map((s, i) => (
              <span key={`${s}-${i}`}>
                {s} <i>✦</i>
              </span>
            ))}
          </div>
        </section>
        <About />
        <section className="contact" id="contact">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="mono">HAVE AN AI OR WEB PROJECT IN MIND?</span>
            <h2>
              LET'S BUILD
              <br />
              <em>SOMETHING</em> SMART.
            </h2>
            <a className="contact-button" href={`mailto:${profile.email}`}>
              START A CONVERSATION <ArrowUpRight />
            </a>
          </motion.div>
          <footer>
            <span>© 2026 {profile.fullName}</span>
            <div>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <ExternalLink size={17} /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} /> Email
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                {profile.phone}
              </a>
            </div>
            <a href="#top">BACK TO TOP ↑</a>
          </footer>
        </section>
      </main>
    </>
  );
}

export default App;
