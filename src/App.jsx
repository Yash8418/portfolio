import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import FeedbackPopup from './FeedbackPopup';
import { SpeedInsights } from "@vercel/speed-insights/react"

const projects = [
  { title: "Estate Hub Real Estate Web App", desc: "MERN stack real estate platform with listing management, JWT authentication, and real-time chat via Socket.io.", github: "https://github.com/Yash8418/EstateHub", demo: "https://dummy-estatehub.com" },
  { title: "Tasty Table Recipe Discovery Platform", desc: "Global recipe platform using MealDB API. Search/filter by cuisine, ingredients, dietary needs.", github: "https://github.com/Yash8418/Tasty-Table-", demo: "https://tastytable.demo.com" },
  { title: "Time Tracking Application (Internship Project)", desc: "Full-stack app (FastAPI, React.js, MySQL) with role-based access, real-time task tracking and data visualization.", github: "https://github.com/Yash8418/TimeTracker-Fullstack", demo: "https://dummy-timetracking.com" },
];

const everythingUsed = [
  { name: "HTML", icon: "/icons/HTML5.svg" }, { name: "CSS", icon: "/icons/CSS3.svg" },
  { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" }, { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "Nodejs", icon: "/icons/Nodejs.svg" }, { name: "Java", icon: "/icons/Java.svg" },
  { name: "C", icon: "/icons/C.svg" }, { name: "PHP", icon: "/icons/PHP.svg" },
  { name: "React", icon: "/icons/React.svg" }, { name: "Express", icon: "/icons/Express.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" }, { name: "MongoDB", icon: "/icons/MongoDB.svg" },
  { name: "Figma", icon: "/icons/Figma.svg" }, { name: "GitHub", icon: "/icons/GitHub.svg" },
  { name: "Postman", icon: "/icons/Postman.svg" }, { name: "VS Code", icon: "/icons/Vscode.svg" },
  { name: "ChatGPT", icon: "/icons/Chatgpt.svg" }, { name: "Perplexity", icon: "/icons/perplexity.svg" },
];

const skills = [
  { name: "Full-stack development", level: 95 },
  { name: "Python programming", level: 90 },
  { name: "Database management", level: 85 },
  { name: "Project management", level: 85 },
  { name: "Team collaboration", level: 90 },
  { name: "Problem solving", level: 92 }
];

// Navbar
const Navbar = () => (
  <nav className="navbar">
    <div className="logo" aria-label="homepage">YP</div>
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#everything-used">Tech Stack</a>
      <a href="#projects">Projects</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>
);

// Hero
const Hero = () => (
  <section id="home" className="hero container">
    <img src="/profile.jpg" alt="Profile" className="hero-photo" />
    <motion.h1 initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
      Hi, I'm <span>Yash Prajapati</span>.
    </motion.h1>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .2, duration: .9 }}>
      Turning ideas into scalable, real-world tech solutions.
    </motion.p>
    <motion.h6 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .9 }}>
      I support lifelong learning and creative activities.<br />Always seeking new workflows and best practices.
    </motion.h6>
    <div className="hero-btns">
      <a href="#contact" className="btn-main">Hire Me</a>
      <a href="#about" className="btn-main" onClick={(e) => {
        e.preventDefault();
        const about = document.getElementById("about");
        if (about) about.scrollIntoView({ behavior: "smooth" });
      }}>Find out more <span className="arrow">→</span></a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section container">
    <h2>About</h2>
    <p>
      Motivated Computer Engineering student with full-stack experience in Python, React.js, Node.js, MySQL.<br />
      Built scalable apps with real-time features, authentication, and data visualization. Passionate problem solver, eager to leverage tech in new domains.
    </p>
  </section>
);

const Skills = () => (
  <section id="skills" className="section container">
    <h2>Skills</h2>
    <div className="skill-bars">
      {skills.map(skill => (
        <div className="skill-bar" key={skill.name}>
          <div className="skill-label">{skill.name}</div>
          <div className="skill-bar-bg">
            <motion.div className="skill-bar-fg" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.2 }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EverythingUsed = () => {
  const scrollRef = useRef();
  useEffect(() => {
    const scrollArea = scrollRef.current;
    let speed = 1;
    function scrollFunc() {
      if (scrollArea) {
        if (scrollArea.scrollLeft >= scrollArea.scrollWidth / 2) {
          scrollArea.scrollLeft = 0;
        } else scrollArea.scrollLeft += speed;
      }
      requestAnimationFrame(scrollFunc);
    }
    if (scrollArea) requestAnimationFrame(scrollFunc);
  }, []);
  const duplicatedList = [...everythingUsed, ...everythingUsed];
  return (
    <section id="everything-used" className="section container">
      <h2>Tech Stack</h2>
      <div className="tech-scroll" ref={scrollRef}>
        {duplicatedList.map((tool, idx) => (
          <div className="tech-item" key={tool.name + idx}>
            <img src={tool.icon} alt={tool.name} title={tool.name} />
            <div>{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="section container">
    <h2>Projects</h2>
    <div className="project-cards">
      {projects.map(proj => (
        <div className="project-card" key={proj.title}>
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
          <div className="project-links">
            <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            {/* <a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo</a> */}
          </div>
        </div>
      ))}
    </div>
  </section>
);

function ResumeSection() {
  return (
    <section id="resume" className="section container" aria-label="Resume and Contact Information">
      <h2 tabIndex="0">Resume</h2>
      <h3 className="resume-title">Interested in working with me?</h3>
      <div className="resume-card">
        <p>
          Feel free to reach out to discuss opportunities or request my professional resume.
        </p>
        <div className="resume-actions">
          <a href="/Resume.pdf" download className="btn-main-outline" aria-label="Download Resume PDF">↓ Download CV</a>
          <a href="#contact" className="btn-main" aria-label="Contact Me via Form">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const form = useRef();
  const [status, setStatus] = useState({ sent: false, error: false });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (status.sent || status.error) {
      const timeout = setTimeout(() => setStatus({ sent: false, error: false }), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const message = formData.get("message")?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      setStatus({ sent: false, error: true });
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setStatus({ sent: false, error: true });
      return;
    }

    // 1️⃣ Send the main email (to you)
    emailjs
      .sendForm("service_k160kl7", "template_rcytrkr", form.current, "ajSJMAWyjkJPo_H_5")
      .then(() => {
        setStatus({ sent: true, error: false });
        form.current.reset();

        // 2️⃣ Send automatic reply email to user
        emailjs
          .send(
            "service_k160kl7",        // same service ID
            "template_amfpq1e",     // your auto-reply template ID
            {
              name: name,
              email: email,
              // reply_message: "Thank you for reaching out! I'll get back to you soon.", // optional variable
            },
            "ajSJMAWyjkJPo_H_5"       // same public key
          )
          .catch((error) => console.error("Auto-reply error:", error));
      })
      .catch(() => setStatus({ sent: false, error: true }));
  };

  return (
    <section id="contact" className="section container contact-section">
      <h2 className="section-title">Contact</h2>
      <p className="contact-description">
        Please fill out the form with your details, and I will respond to you as soon as I can.<br />
        As an alternative, you can find me on the platforms listed below.
      </p>
      <div className="contact-layout">
        <form ref={form} className="contact-form card" onSubmit={sendEmail} noValidate>
          <div className="contact-input-row">
            <input type="text" name="user_name" placeholder="Your name" autoComplete="name" />
            <input type="email" name="user_email" placeholder="Your email address" autoComplete="email" />
          </div>
          <textarea name="message" placeholder="Your message for me" required rows={6} />
          {status.sent && <p className="form-status success">✅ Message sent!</p>}
          {status.error && <p className="form-status error">❌ Please fill all fields and try again.</p>}
          <button type="submit" className="submit-btn">Submit</button>
        </form>


          {/* Right Card - Social Links */}
          <div className="contact-social card">
            <div>
              <a
                href="https://www.linkedin.com/in/yash-prajapati-65326222b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <i className="fab fa-linkedin-in" aria-hidden="true"></i> LinkedIn
              </a>
              <a
                href="https://github.com/Yash8418"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <i className="fab fa-github" aria-hidden="true"></i> GitHub
              </a>
              <a
                href="https://medium.com/@y.d.prajapati04"
                className="social-btn medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-dribbble" aria-hidden="true"></i> Medium
              </a>
              <a
                // href="#"
                // className="social-btn behance"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                {/* <i className="fab fa-behance" aria-hidden="true"></i> Behance */}
              </a>
            </div>
           <button
              className="copy-btn"
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("yashprajapati8424@gmail.com");
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Revert after 2 seconds
              }}
            >
              {copied ? "Copied!" : "Copy my email"}
            </button>
                        
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

const Footer = () => (
  <footer className="footer" role="contentinfo">
    © {new Date().getFullYear()} Yash Prajapati • All Rights Reserved.
  </footer>
);

export default function Portfolio() {
  return (
    <div style={{ background: "#fff", color: "#161f35" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EverythingUsed />
      <Projects />
      <ResumeSection />
      <ContactSection />
      <FeedbackPopup />
      <Footer />
    </div>
  );
}