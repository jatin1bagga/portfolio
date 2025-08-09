"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "contact"];
      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen font-sans`}>
      
      {/* ===== NAVBAR ===== */}
      <header className={`fixed top-0 left-0 w-full z-50 shadow-md ${darkMode ? "bg-gray-800" : "bg-gray-200"} transition`}>
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Jatin's Portfolio</h1>
          <div className="flex items-center gap-6">
            {["home", "projects", "skills", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`${activeSection === section ? "text-blue-400" : ""} hover:text-blue-400 capitalize transition`}
              >
                {section}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Jatin Bagga
        </motion.h1>
        <motion.p
          className="text-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Machine Learning | IoT | Embedded Systems
        </motion.p>
        <motion.a
          href="#projects"
          className="bg-blue-500 px-5 py-2 rounded hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="p-6 max-w-6xl mx-auto pt-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Glove Gesture Recognition",
              desc: "A machine learning model that detects hand gestures using glove-based sensors.",
              tech: "Python, TensorFlow, Arduino",
              link: "https://github.com/yourusername/glove-gesture",
            },
            {
              title: "Food Spoilage Detection",
              desc: "ESP32-CAM based system that uses image processing to detect spoiled food.",
              tech: "Python, OpenCV, ESP32-CAM",
              link: "https://github.com/jatin1bagga/Food-Spoilage-Detection",
            },
            {
              title: "Virtual Personal Assistant",
              desc: "Controls laptop, sends WhatsApp messages, plays music, and more.",
              tech: "Python, OpenCV",
              link: "https://github.com/jatin1bagga/Personal-Assistant",
            },
            {
              title: "Hand Pointer Volume Adjuster",
              desc: "Tracks hand movement to control volume using OpenCV.",
              tech: "Python, OpenCV",
              link: "https://github.com/jatin1bagga/Hand_pointer_vloume",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-4 rounded-lg shadow-md hover:shadow-xl transition`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="mt-2">{p.desc}</p>
              <p className="mt-2"><span className="font-bold">Tech Stack:</span> {p.tech}</p>
              <a href={p.link} className="mt-3 inline-block text-blue-400 hover:underline">GitHub Repo</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section id="skills" className="p-6 max-w-6xl mx-auto pt-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "Python", "C++", "JavaScript", "HTML & CSS", "SQL", "Flask",
            "PyTorch", "Scikit-learn", "ResNet", "OpenCV", "MediaPipe",
            "ESP32", "Raspberry Pi", "Data Structures & Algorithms"
          ].map((skill, i) => (
            <motion.div
              key={i}
              className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} p-3 rounded-lg text-center hover:scale-105 transition`}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="p-6 max-w-6xl mx-auto text-center pt-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Contact Me</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:jatinbagga@example.com" className="hover:text-blue-400 transition"><FaEnvelope /></a>
          <a href="https://github.com/jatin1bagga" className="hover:text-blue-400 transition"><FaGithub /></a>
          <a href="https://linkedin.com/in/jatinbagga" className="hover:text-blue-400 transition"><FaLinkedin /></a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-200"} p-4 text-center mt-10`}>
        <p>© {new Date().getFullYear()} Jatin Bagga. All rights reserved.</p>
      </footer>
    </main>
  );
}
