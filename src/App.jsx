import React, { useRef, useEffect , useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import React, { useRef, useState } from "react";


const projects = [
  { title: "Estate Hub Real Estate Web App", desc: "MERN stack real estate platform with listing management, JWT authentication, and real-time chat via Socket.io.", github: "https://github.com/Yash8418/EstateHub", demo: "https://dummy-estatehub.com" },
  { title: "Tasty Table Recipe Discovery Platform", desc: "Global recipe platform using MealDB API. Search/filter by cuisine, ingredients, dietary needs.", github: "https://github.com/Yash8418/Tasty-Table-", demo: "https://tastytable.demo.com" },
  { title: "Time Tracking Application (Internship Project)", desc: "Full-stack app (FastAPI, React.js, MySQL) with role-based access, real-time task tracking and data visualization.", github: "https://github.com/Yash8418/TimeTracker-Fullstack", demo: "https://dummy-timetracking.com" },
];

const everythingUsed = [
  { name: "HTML", icon: "/icons/HTML5.svg" },      { name: "CSS", icon: "/icons/CSS3.svg" },
  { name: "Tailwind CSS", icon: "/icons/Tailwind CSS.svg" }, { name: "JavaScript", icon: "/icons/JavaScript.svg" },
  { name: "Nodejs", icon: "/icons/Nodejs.svg" },
  { name: "Java", icon: "/icons/Java.svg" },            { name: "C", icon: "/icons/C.svg" },
  { name: "PHP", icon: "/icons/PHP.svg" },              
  { name: "React", icon: "/icons/React.svg" },          { name: "Express", icon: "/icons/Express.svg" },
  { name: "MySQL", icon: "/icons/MySQL.svg" },          
  { name: "MongoDB", icon: "/icons/MongoDB.svg" },      { name: "Figma", icon: "/icons/Figma.svg" },
  { name: "GitHub", icon: "/icons/GitHub.svg" },        { name: "Postman", icon: "/icons/Postman.svg" },
  { name: "VS Code", icon: "/icons/Vscode.svg" },       { name: "ChatGPT", icon: "/icons/Chatgpt.svg" },
  { name: "Perplexity", icon: "/icons/perplexity.svg" }];


const skills = [
  { name: "Full-stack development", level: 95 },
  { name: "Python programming", level: 90 },
  { name: "Database management", level: 85 },
  { name: "Project management", level: 85 },
  { name: "Team collaboration", level: 90 },
  { name: "Problem solving", level: 92 }
];

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">YP</div>
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#everything-used">Everything I Use</a>
      <a href="#projects">Projects</a>
      {/* <a href="#education">Education</a> */}
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
    </div>
    <style>{`
      .navbar {
        position: sticky; top: 0; z-index: 999;
        display: flex; align-items: center; justify-content: space-between;
        padding: 14px 7vw;
        backdrop-filter: blur(14px);
        background: #fff;
        border-bottom: 1.5px solid #dbe6fa;
        box-shadow: 0 1.5px 22px #bcdef824;
      }
      .logo { font-weight: 800; font-size: 1.4rem; letter-spacing: 2px; color: #247be7;}
      .nav-links { display: flex; gap: 2vw;}
      .nav-links a { color: #222; font-weight: 600; text-decoration: none; letter-spacing:.5px; font-size: 1rem; border-radius: 18px; padding: 2px 11px;}
      .nav-links a:hover { background: #edeffd; color: #1672fa; }
    `}</style>
  </nav>
);

const Hero = () => (
  <section id="home" className="hero container">
    <img src="/profile.jpg" alt="Profile" className="hero-photo"/>
    <motion.h1 initial={{ opacity: 0, y: -25 }} animate={{ opacity:1, y:0}} transition={{duration:.7}}>
      Hi, I'm <span>Yash Prajapati</span>.
    </motion.h1>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.2, duration:.9}} align="center">
      Turning ideas into scalable, real-world tech solutions.
    </motion.p>
    <motion.h6 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4, duration:.9}} align="center" >
      I support both lifelong learning and creative activities. <br/>
      I'm constantly looking for new workflows and best practices. 
    </motion.h6>
    
   <div className="hero-btns">
      <a href="#contact" className="btn-main">Hire Me</a>
      <a href="#about" className="findout-btn" onClick={scrollToAbout}>
        Find out more <span className="arrow">→</span>
      </a>
    </div>

    {/* <style>{`
      .hero { padding: 80px 0 60px 0; display:flex; flex-direction:column; align-items:center; background: #fff;
        color:#0a0a0a; min-height: 67vh;
      }
      .hero-photo {
        width: 128px; height: 128px; border-radius: 50%; margin-bottom: 19px; box-shadow: 0 8px 38px #24224312;
        background: #fff; object-fit: cover; border:4px solid #fff;
      }
      .hero h1 { font-size: 2.3rem; letter-spacing:.5px; margin-bottom:.4rem;}
      .hero h1 span { color:#207ee5;}
      .hero p { font-size: 1.18rem; margin-bottom:20px;}
      .hero-btns { display: flex; gap: 16px;}
      .btn-main, .btn-main-outline { padding: .8em 2em; border-radius:24px; font-size:.98rem; font-weight:700; text-decoration:none; letter-spacing:.7px; transition:all.18s;}
      .btn-main { color: #fff; background: linear-gradient(90deg, #207ee6 0%, #13cfea 100%);}
      .btn-main-outline {border:2px solid #207ee6; color: #207ee6; background: none;}
      .btn-main-outline:hover { background: #d5edff;}
      .btn-main:hover { background: #0353ca;}
      @media (max-width: 600px) { .hero h1{ font-size: 1.5rem;} }
    `}</style> */}
  </section>
);

const About = () => (
  <section id="about" className="section container">
    <h2>About</h2>
    <p>
      Motivated and skilled Computer Engineering student with full-stack experience (Python, React.js, Node.js, MySQL). Built scalable applications (estate and time-tracking platforms) with real-time features, authentication, and data visualization.<br/>
      Quick learner with a passion for solving real-world problems through technology.
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
            <div className="skill-bar-fg" style={{ width: `${skill.level}%` }}/>
          </div>
        </div>
      ))}
    </div>
    {/* <style>{`
      .skill-bars { max-width: 510px; margin:0 auto; display:flex; flex-direction:column; gap:22px;}
      .skill-label { font-weight:700; color:#211e43; min-width:140px;}
      .skill-bar-bg { flex: 1; background:#eef4fa; height:11px; border-radius:5px;}
      .skill-bar-fg { height:100%; background: linear-gradient(90deg, #207ee6 15%, #1de3f6 100%); border-radius: 5px;}
      .skill-bar { display:flex; align-items:center; gap:12px;}
    `}</style> */}
  </section>
);


const EverythingUsed = () => {
  const scrollRef = useRef();
  const reqIdRef = useRef(null); // keep latest requestAnimationFrame ID
  const isScrollingRef = useRef(false); // track if loop is running

  useEffect(() => {
    const scrollArea = scrollRef.current;
    let speed = 1; // scroll speed (tweak as needed)

    function scrollFunc() {
      if (scrollArea) {
        if (scrollArea.scrollLeft >= scrollArea.scrollWidth / 2) {
          scrollArea.scrollLeft = 0;
        } else {
          scrollArea.scrollLeft += speed;
        }
      }
      reqIdRef.current = requestAnimationFrame(scrollFunc);
    }

    // ✅ start loop only once
    function startScrolling() {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        reqIdRef.current = requestAnimationFrame(scrollFunc);
      }
    }

    // ✅ stop loop safely
    function stopScrolling() {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
        reqIdRef.current = null;
        isScrollingRef.current = false;
      }
    }

    startScrolling(); // start when mounted

    scrollArea.addEventListener("mouseenter", stopScrolling);
    scrollArea.addEventListener("mouseleave", startScrolling);

    return () => {
      stopScrolling();
      scrollArea.removeEventListener("mouseenter", stopScrolling);
      scrollArea.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  const duplicatedList = [...everythingUsed, ...everythingUsed];

  return (
    <section id="everything-used" className="section container">
      <h2>Everything I Use</h2>
      <div className="tech-scroll" ref={scrollRef} tabIndex="0">
        {duplicatedList.map((tool, index) => (
          <div className="tech-item" key={tool.name + index}>
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
    <style>{`
      .project-cards { display: flex; flex-wrap:wrap; gap:32px;}
      .project-card { background:#fff; border-radius:11px; padding:22px 19px; min-width:250px; max-width:340px; flex:1 1 240px; box-shadow:0 4px 22px #bde0fa1a; transition:transform .14s; color: #212121;}
      .project-card:hover { transform: translateY(-4px) scale(1.03); }
      .project-card h3 { color:#1972aa; font-size:1.13rem; margin-bottom:7px;}
      .project-links a { padding:5px 14px; border-radius:19px; text-decoration:none; margin-right:7px; font-weight:600; background:#1972aa; color:#fff;}
      .project-links a:hover { background: #23bdeb; color: #fff;}
    `}</style>
  </section>
);

// const Education = () => (
//   <section id="education" className="section container">
//     <h2>Education & Certifications</h2>
//     <ul>
//       <li><b>Bachelor of Technology in Computer Engineering (2021–2025)</b><br />U.V.Patel College of Engineering, Kherva, Mehsana</li>
//       <li><b>Internship:</b> Python Developer Intern, Grownited Pvt Ltd (Jan–May 2025)<br />Built time tracking app (FastAPI, React, MySQL)</li>
//       <li><b>Level 3: GenAI – Google Cloud Arcade (Sep 2023):</b> Generative AI, Prompt Engineering, AI model deployment</li>
//     </ul>
//     <style>{`
//       .section ul { margin:0; padding-left:18px; }
//       .section li { margin-bottom:14px; }
//     `}</style>
//   </section>
// );

function ResumeSection() {
  return (
    <section id="resume" style={{
      maxWidth: 700,
      margin: "0 auto",
      padding: "100px 0 60px 0",
      background: "#fff"
    }}>
      <h2 style={{
        fontSize: "2rem",
        color: "#323232",
        fontWeight: "600",
        marginBottom: 30,
        letterSpacing: "1px",
        textAlign: "center"
      }}>Resume</h2>
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: 42,
        color: "#181828",
        textAlign: "center",
        lineHeight: 1.1
      }}>Interested in<br />working with me?</h1>
      <div style={{
        background: "linear-gradient(90deg, #247be7 0%, #26e4ef 100%)",
        borderRadius: 22,
        boxShadow: "0 4px 24px #bde0fa33",
        padding: "38px 26px",
        maxWidth: 450,
        margin: "0 auto",
        color: "#fff",
        textAlign: "center"
      }}>
        <p style={{
          margin: 0,
          fontWeight: 500,
          fontSize: "1.07rem",
          marginBottom: 32
        }}>
          Please do not hesitate to get in touch with me if you have any questions. <br />
          You can also get my resume by downloading it below.
        </p>
        <div style={{
          display: "flex", justifyContent: "center", gap: 22
        }}>
          <a
            href="/Resume.pdf"
            download
            style={{
              background: "#fff",
              color: "#1b75d0",
              border: "2px solid #fff",
              borderRadius: 26,
              fontWeight: 600,
              boxShadow: "0 1px 9px #0071fd13",
              textDecoration: "none",
              padding: "12px 28px",
              fontSize: "1rem",
              transition: "0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#ecf5fd"}
            onMouseOut={e => e.currentTarget.style.background = "#fff"}
          >
            <span style={{
              display: "inline-block", marginRight: 9, fontWeight: 700
            }}>↓</span>
            Download CV
          </a>
          <a
            href="#contact"
            style={{
              background: "#167efc",
              color: "#fff",
              border: "none",
              borderRadius: 26,
              fontWeight: 600,
              textDecoration: "none",
              padding: "12px 28px",
              fontSize: "1rem",
              boxShadow: "0 1px 9px #1b75d012",
              transition: ".17s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#15b8dd"}
            onMouseOut={e => e.currentTarget.style.background = "#167efc"}
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // 🕐 Automatically hide messages after 10 seconds
   useEffect(() => {
    if (isSent || error) {
      const timer = setTimeout(() => {
        setIsSent(false);
        setError(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [isSent, error]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k160kl7", // 🔹 replace with your EmailJS Service ID
        "template_rcytrkr", // 🔹 replace with your Template ID
        form.current,
        "ajSJMAWyjkJPo_H_5" // 🔹 replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setError(true);
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="contact-description">
        Please fill out the form with your details, and I will respond to you as soon as I can.
        <br />
        As an alternative, you can find me on the platforms listed below.
      </p>

      <div className="contact-form-social">
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="contact-input-row">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              style={{ width: "45%" }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your email address"
              required
              style={{ width: "45%" }}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your message for me"
            required
            style={{ minHeight: "150px", resize: "none" }}
          />
          <div className="contact-actions">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>

          {isSent && <p style={{ color: "green", marginTop: "10px" }}>✅ Message sent successfully!</p>}
          {error && <p style={{ color: "red", marginTop: "10px" }}>❌ Failed to send message. Try again.</p>}
        </form>
    


   <div className="contact-social">
  <a className="social-btn linkedin" href="https://www.linkedin.com/in/yash-prajapati-65326222b" target="_blank" rel="noreferrer">
    <i className="fab fa-linkedin-in"></i> LinkedIn
  </a>
  <a className="social-btn github" href="https://github.com/Yash8418" target="_blank" rel="noreferrer">
    <i className="fab fa-github"></i> GitHub
  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>
  <a>  </a>

  {/* <a className="social-btn dribbble" href="#" target="_blank" rel="noreferrer">
    <i className="fab fa-dribbble"></i> Dribbble
  </a>
  <a className="social-btn behance" href="#" target="_blank" rel="noreferrer">
    <i className="fab fa-behance"></i> Behance
  </a> */}
  {/* <button
    className="copy-btn"
    type="button"
    onClick={() => navigator.clipboard.writeText('y.d.prajapati04@gmail.com')}
  >
    Copy my email
  </button> */}
   <div style={{ flex: "0 0 20px" }}></div>
  
  <button className="copy-btn" type="button"
    onClick={() => navigator.clipboard.writeText('y.d.prajapati04@gmail.com')}
  >
    Copy my email
  </button>
                  
  

</div>

      </div>
    </section>
  );
}

function socialBtnStyle(bg) {
  return {
    borderRadius: 12,
    padding: "10px 16px",
    background: bg,
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
    fontSize: "1rem",
    letterSpacing: ".5px",
    textAlign: "center",
    cursor: "pointer"
  };
}

function scrollToAbout(e) {
  e.preventDefault();
  const about = document.getElementById("about");
  if (about) about.scrollIntoView({ behavior: "smooth" });
}


// Footer
const Footer = () => (
  <footer className="footer">
    © {new Date().getFullYear()} Yash Prajapati • All Rights Reserved.
    <style>{`.footer { text-align:center; color:#181828; padding:25px 0 6px 0; font-size:.92rem; background: #fff;}`}</style>
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
      {/* <Education /> */}
      <ResumeSection />
      <ContactSection />
      <Footer />
      <style>{`
        html, body { font-family: 'Montserrat', sans-serif;}
        .container { max-width: 990px; margin: 0 auto; padding: 0 10px; width: 100%; }
        .section {max-width:900px; margin: 0 auto; padding: 60px 0 40px 0;}
        .section h2 {font-size:2rem; color:#247be7; font-weight:800; margin-bottom:18px;}
        body {background: #fff;}
        @media(max-width: 700px) { .container,.section {max-width: 100vw; padding: 24px 4px;}}
      `}</style>
    </div>
  );
}
