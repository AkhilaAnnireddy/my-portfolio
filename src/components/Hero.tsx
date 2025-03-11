"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import profilephoto from "../public/profile_pic.png";
import developerAssociate from "../public/developer_assciate.png";
import cloudPractioner from "../public/cloud_practioner.png";
import {
  Globe,
  Server,
  Database,
  Cpu,
  Code2,
  BrainCircuit,
  Braces,
  Wrench,
  PenTool,
  Award,
  Lightbulb,
  HeartHandshake,
  Brain,
  Users,
  Book,
  Rocket,
  Code,
} from "lucide-react";

export default function Hero() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skills = [
    // Frontend Development
    {
      name: "Frontend Development",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Globe className="h-8 w-8" />
        </motion.div>
      ),
      details: ["React", "Vue", "Angular", "TypeScript"],
    },

    // Backend Development
    {
      name: "Backend Development",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Server className="h-8 w-8" />
        </motion.div>
      ),
      details: ["Node.js", "Nest.js", "Python", "Java"],
    },

    // Database Management
    {
      name: "Database Management",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Database className="h-8 w-8" />
        </motion.div>
      ),
      details: ["PostgreSQL", "SQLite", "MongoDB", "Firebase", "Redis"],
    },

    // System Architecture
    {
      name: "System Architecture",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Cpu className="h-8 w-8" />
        </motion.div>
      ),
      details: ["AWS", "Docker", "Kubernetes", "OAuth 2.0"],
    },

    // API Development
    {
      name: "API Development",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Code2 className="h-8 w-8" />
        </motion.div>
      ),
      details: ["REST", "FastAPI", "GraphQL", "Express"],
    },

    // AI/ML Integration
    {
      name: "AI/ML Integration",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <BrainCircuit className="h-8 w-8" />
        </motion.div>
      ),
      details: ["TensorFlow", "PyTorch", "Keras", "YOLO", "Pandas"],
    },

    // Programming Languages
    {
      name: "Programming Languages",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Braces className="h-8 w-8" />
        </motion.div>
      ),
      details: ["Python", "C++", "Java", "JavaScript", "SQL", "C", "R", "Perl"],
    },

    // Dev Tools & Methodologies
    {
      name: "Dev Tools & Methodologies",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Wrench className="h-8 w-8" />
        </motion.div>
      ),
      details: ["Jira", "Selenium", "Agile Development", "CI/CD"],
    },

    // UI/UX Design
    {
      name: "UI/UX Design",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <PenTool className="h-8 w-8" />
        </motion.div>
      ),
      details: ["UI/UX Design Principles"],
    },
  ];

  // Scroll to About Section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300 overflow-y-auto scrollbar-blue">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left p-8 bg-gradient-to-b from-black to-blue-900 text-white relative -mt-4"
      >
        {/* Profile Picture */}
        <motion.div
          className="relative lg:w-1/3 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src={profilephoto}
            alt="Profile"
            width={300}
            height={300}
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-2/3 mt-6 lg:mt-0 flex flex-col items-center lg:items-start"
        >
          <h1 className="text-5xl font-bold text-blue-400">
            Hi, I'm <span className="text-blue-300">Akhila Annireddy</span>
            <br />
            <span className="text-blue-400">Full Stack Engineer</span> with
            <span className="text-blue-400"> AI expertise</span>
          </h1>

          <p className="mt-4 text-lg text-blue-200 max-w-xl">
            "I craft elegant solutions to complex problems with code and
            creativity, driven by a passion for building scalable,
            business-oriented applications that prioritize customer needs and
            deliver impactful results."
          </p>

          {/* Button to Scroll Down */}
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Learn More About Me
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.section
        ref={aboutRef}
        className="py-20 px-8 bg-gradient-to-b from-blue-200 to-blue-400 text-blue-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">
            Work Experience
          </h2>

          <div className="space-y-8 border-l-4 border-blue-400 pl-6">
            {/* Backend Developer - CU Boulder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold text-blue-900">
                Backend Developer
              </h3>
              <p className="text-blue-700 text-lg">
                Center for Innovation and Creativity - CU Boulder
              </p>
              <p className="text-blue-600 text-sm">Jan 2025 – Present</p>
              <ul className="list-disc text-blue-800 text-base leading-relaxed ml-6 mt-2">
                <li>
                  Designed and implemented a video-to-text conversion model
                  using OpenAI Whisper.
                </li>
                <li>
                  Integrated model with LEVI HAT server to enable tutoring
                  insights extraction.
                </li>
                <li>
                  Optimized AWS architecture to enhance cost efficiency and
                  scalability.
                </li>
              </ul>
            </motion.div>

            {/* Software Development Engineer - JP Morgan Chase */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold text-blue-900">
                Software Development Engineer
              </h3>
              <p className="text-blue-700 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-600 text-sm">Aug 2022 – Aug 2024</p>
              <ul className="list-disc text-blue-800 text-base leading-relaxed ml-6 mt-2">
                <li>
                  Designed & implemented 50+ user stories for an internet-facing
                  client service app.
                </li>
                <li>
                  Migrated 4 applications from a private cloud to AWS ensuring
                  zero downtime.
                </li>
                <li>
                  Architected & developed a REST API for Transfer Agency Portal
                  onboarding.
                </li>
                <li>
                  Managed 20+ production releases using Blue-Green deployment.
                </li>
                <li>Resolved 70+ production issues with comprehensive RCA.</li>
                <li>
                  Developed a feature-rich NGO website integrating OTP
                  authentication & WhatsApp notifications.
                </li>
              </ul>
            </motion.div>

            {/* Software Developer Intern - JP Morgan Chase */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold text-blue-900">
                Software Developer Intern
              </h3>
              <p className="text-blue-700 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-600 text-sm">Feb 2022 – Aug 2022</p>
              <ul className="list-disc text-blue-800 text-base leading-relaxed ml-6 mt-2">
                <li>Developed a Maker-Checker feature using React & Spring.</li>
                <li>
                  Integrated Jenkins CI/CD pipelines with S3 & Raven
                  vulnerability scans.
                </li>
                <li>
                  Handled version upgrades and resolved conflicts ensuring
                  smooth deployments.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-8 bg-gradient-to-b from-blue-300 to-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-700">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-blue-300 rounded-xl shadow-lg">
                {skill.icon}
                <h3 className="text-xl font-semibold text-blue-800">
                  {skill.name}
                </h3>
                <p className="text-blue-900 mt-2">{skill.details.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 px-8 bg-gradient-to-b from-blue-500 to-blue-700 text-blue-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AWS Developer Associate */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all"
            >
              <Image
                src={developerAssociate}
                alt="AWS Certified Developer Associate"
                width={320} // Larger for better visibility
                height={200}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mt-6 text-blue-300">
                AWS Certified Developer Associate
              </h3>
              <a
                href="https://aws.amazon.com/verification" // Replace with actual certification link
                target="_blank"
                className="mt-3 inline-block px-5 py-2 text-sm font-medium text-blue-500 bg-blue-300 rounded-lg shadow-md hover:bg-blue-200 transition"
              >
                Verify Certification
              </a>
            </motion.div>

            {/* AWS Cloud Practitioner */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-8 flex flex-col items-center text-center transition-all"
            >
              <Image
                src={cloudPractioner}
                alt="AWS Certified Cloud Practitioner"
                width={320}
                height={200}
                className="rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mt-6 text-blue-300">
                AWS Certified Cloud Practitioner
              </h3>
              <a
                href="https://aws.amazon.com/verification" // Replace with actual certification link
                target="_blank"
                className="mt-3 inline-block px-5 py-2 text-sm font-medium text-blue-500  bg-blue-300 rounded-lg shadow-md hover:bg-blue-200 transition"
              >
                Verify Certification
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    {/* Passion & Goals Section */}
<motion.section
  className="py-20 px-8 bg-gradient-to-b from-blue-500 to-blue-700 text-white"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16">
      My Passion & Professional Vision
    </h2>

    {/* Passion & Goal Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 bg-blue-400 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Code2 className="w-8 h-8 text-white" />
          <h3 className="text-xl font-semibold">Full Stack + AI</h3>
        </div>
        <p className="text-gray-100">
          Passionate about merging AI with full-stack development to create scalable,
          data-driven, and intelligent applications that enhance user experiences.
        </p>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 bg-blue-500 rounded-xl shadow-lg"
      >
        <div className="flex items-center space-x-4 mb-4">
          <Brain className="w-8 h-8 text-white" />
          <h3 className="text-xl font-semibold">AI & Problem Solving</h3>
        </div>
        <p className="text-gray-100">
          Exploring the intersection of machine learning and real-world applications to drive 
          innovation, optimize processes, and solve complex business challenges.
        </p>
      </motion.div>
    </div>

    {/* What I Bring to a Team */}
    <h3 className="text-3xl font-bold text-center mt-20">
      What I Bring to a Team
    </h3>
    <p className="text-lg text-center text-gray-200 mt-4 max-w-3xl mx-auto">
      I believe in **building with impact**—bringing technical expertise, problem-solving, and a 
      collaborative spirit to every project. Here’s what sets me apart:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
      {/* Problem-Solving */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-300 rounded-xl shadow-lg"
      >
        <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Analytical Thinking</h3>
        <p className="text-gray-100">
          I approach challenges with a data-driven mindset, identifying patterns and optimizing 
          solutions for real-world impact.
        </p>
      </motion.div>

      {/* Leadership & Ownership */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-400 rounded-xl shadow-lg"
      >
        <Users className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Leadership & Initiative</h3>
        <p className="text-gray-100">
          I take ownership of projects, drive team collaboration, and ensure tasks are executed 
          with excellence.
        </p>
      </motion.div>

      {/* Technical Expertise */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-500 rounded-xl shadow-lg"
      >
        <Code className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Technical Excellence</h3>
        <p className="text-gray-100">
          With expertise in **AI, full-stack development, and cloud solutions**, I deliver 
          high-quality, scalable applications.
        </p>
      </motion.div>
    </div>

    {/* Core Values */}
    <h3 className="text-3xl font-bold text-center mt-20">
      Why Having Me on a Team Matters
    </h3>
    <p className="text-lg text-center text-gray-200 mt-4 max-w-3xl mx-auto">
      My approach is simple: **blend technology with purpose**. I bring passion, efficiency, 
      and creativity to every team I work with.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
      {/* Collaboration */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-300 rounded-xl shadow-lg"
      >
        <HeartHandshake className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Team-First Mentality</h3>
        <p className="text-gray-100">
          I thrive in collaborative environments, ensuring seamless communication 
          and efficient teamwork.
        </p>
      </motion.div>

      {/* Innovation & Learning */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-400 rounded-xl shadow-lg"
      >
        <BrainCircuit className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Innovative Mindset</h3>
        <p className="text-gray-100">
          I constantly push boundaries, experimenting with **emerging technologies** to drive innovation.
        </p>
      </motion.div>

      {/* Adaptability */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="p-6 bg-blue-500 rounded-xl shadow-lg"
      >
        <Rocket className="w-12 h-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white">Adaptability & Growth</h3>
        <p className="text-gray-100">
          Fast-paced environments excite me—I adapt, **learn quickly**, and 
          contribute meaningfully from day one.
        </p>
      </motion.div>
    </div>
  </div>
</motion.section>


    </div>
  );
}
