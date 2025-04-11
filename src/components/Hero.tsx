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
  Lightbulb,
  HeartHandshake,
  Brain,
  Users,
  Rocket,
  Code,
} from "lucide-react";

export default function Hero() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skills = [
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
      details: [
        "Java",
        "Python",
        "JavaScript",
        "C",
        "C++",
        "SQL",
        "HTML",
        "CSS",
      ],
    },
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
      details: ["ReactJS", "Jest", "NextJS"],
    },
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
      details: [
        "Spring Boot",
        "Flask",
        "Django",
        "RESTful APIs",
        "SCIM API",
        "MyBatis",
      ],
    },
    {
      name: "Cloud & DevOps",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Cpu className="h-8 w-8" />
        </motion.div>
      ),
      details: ["AWS", "Terraform", "Docker", "Jenkins", "Git", "Linux"],
    },
    {
      name: "Testing & QA",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Wrench className="h-8 w-8" />
        </motion.div>
      ),
      details: ["JUnit", "Mockito", "Selenium", "Cucumber"],
    },
    {
      name: "Data Science & ML",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <BrainCircuit className="h-8 w-8" />
        </motion.div>
      ),
      details: [
        "Machine Learning",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "Matplotlib",
        "Feature Engineering",
      ],
    },
    {
      name: "Monitoring & Logging",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Database className="h-8 w-8" />
        </motion.div>
      ),
      details: ["Splunk"],
    },
    {
      name: "Project & Workflow Tools",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Code2 className="h-8 w-8" />
        </motion.div>
      ),
      details: ["Git", "Jira", "Bitbucket", "Confluence"],
    },
    {
      name: "Software Development Concepts",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Lightbulb className="h-8 w-8" />
        </motion.div>
      ),
      details: ["OOP", "System Design", "SDLC", "Agile"],
    },
  ];

  // Scroll to About Section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 text-center p-8 bg-gradient-to-b from-black to-blue-900 text-white -mt-14"
      >
        {/* Profile Picture */}
        <motion.div
          className="flex justify-center"
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
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0"
        >
          <h1 className="text-5xl font-bold text-blue-400">
            Hi, I'm <span className="text-blue-300">Akhila Annireddy</span>
            <br />
            <span className="text-4xl text-blue-400">
              Full Stack Developer
            </span>{" "}
            |
            <span className="text-4xl text-blue-400">
              {" "}
              Aspiring ML Engineer
            </span>
          </h1>

          <p className="mt-4 text-lg text-blue-200">
            I build intelligent, end-to-end systems that merge full stack
            engineering with AI. With a solid foundation in modern frameworks
            and cloud platforms, I develop scalable, future-ready applications.
            As I deepen my expertise in machine learning, my focus is on
            crafting solutions that are both code-driven and data-smart—designed
            for real-world impact.
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
                  Implemented video-to-transcript conversion using
                  Faster-Whisper and integrated it with AWS data pipeline for
                  further textual analysis.
                </li>
                <li>
                  Optimized AWS architecture by integrating Lambda, S3, and SQS,
                  reducing cloud expenses and improving scalability.
                </li>
                <li>
                  Supported development of the tutoring platform to enhance
                  student engagement and learning outcomes through transcript
                  classification.
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
                  Designed and implemented 50+ user stories for a client service
                  application within the Corporate Investment Banking division,
                  adhering to Agile principles.
                </li>
                <li>
                  Led the migration of 4 applications from a private cloud to
                  AWS using a production-parallel approach to ensure
                  uninterrupted operations.
                </li>
                <li>
                  Architected a REST application for onboarding operations users
                  to the Transfer Agency Portal using SCIM 2.0 API protocol.
                </li>
                <li>
                  Managed 20+ production releases using Blue-Green deployment to
                  ensure zero downtime.
                </li>
                <li>
                  Delivered Level 3 support, resolving 70+ production issues
                  through in-depth RCA using Splunk and performance analysis
                  tools.
                </li>
                <li>
                  Created a JMX script for 200+ application endpoints and
                  integrated it with BlazeMeter for performance testing.
                </li>
                <li>
                  Developed a secure website for Prem Samriddhi Foundation using
                  Wix with OTP authentication and WhatsApp notifications.
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
                <li>
                  Developed a Maker-Checker feature for transaction approval
                  using React and Spring.
                </li>
                <li>
                  Integrated CI/CD pipeline using Jenkins with S3 and Raven to
                  manage deployments and perform vulnerability scans.
                </li>
                <li>
                  Led backend dependency upgrades and resolved versioning issues
                  to enable successful deployment in QA/Production.
                </li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2"></div>
              <h3 className="text-xl font-semibold text-blue-900">
                Summer Intern
              </h3>
              <p className="text-blue-700 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-600 text-sm">May 2021 – July 2021</p>
              <ul className="list-disc text-blue-800 text-base leading-relaxed ml-6 mt-2">
                <li>
                  Developed a Maker-Checker feature for transaction approval
                  using React and Spring.
                </li>
                <li>
                  Integrated CI/CD pipeline using Jenkins with S3 and Raven to
                  manage deployments and perform vulnerability scans.
                </li>
                <li>
                  Led backend dependency upgrades and resolved versioning issues
                  to enable successful deployment in QA/Production.
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
        className="py-20 px-6 bg-gradient-to-b from-blue-400 to-blue-700 text-blue-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Certificate Card */}
            {[
              {
                title: "AWS Certified Developer Associate",
                image: developerAssociate,
                alt: "AWS Developer Associate",
                verifyLink:
                  "https://cp.certmetrics.com/amazon/en/public/verify/credential/02fcacee78034c37ba5f6cbf3a210abe",
              },
              {
                title: "AWS Certified Cloud Practitioner",
                image: cloudPractioner,
                alt: "AWS Cloud Practitioner",
                verifyLink:
                  "https://www.credly.com/badges/64977c05-7f1d-4bb6-b9ae-1729ebf943d4/linked_in_profile",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300"
              >
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-md"
                />
                <h3 className="text-2xl font-semibold mt-6 text-blue-200">
                  {cert.title}
                </h3>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block px-5 py-2 text-sm font-medium text-blue-600 bg-blue-200 rounded-md shadow hover:bg-blue-100 transition"
                >
                  Verify Certification
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-24 px-6 bg-gradient-to-b from-blue-400 to-blue-800 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Passion & Purpose-Driven Development
          </h2>

          {/* Passion Goals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl border border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Full Stack + AI
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                I’m driven by the synergy between full stack development and AI.
                I aim to build future-ready systems that are not only
                technically robust but intelligently responsive—designed to
                scale and adapt.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white/10 rounded-2xl shadow-xl border border-white/10 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-blue-600 rounded-full">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  AI for Real-World Impact
                </h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                I thrive at the intersection of machine learning and real-world
                problem solving—where technology translates into measurable
                outcomes and smarter decisions.
              </p>
            </motion.div>
          </div>

          {/* Team Traits */}
          <h3 className="text-3xl font-bold text-center mt-20">
            How I Strengthen a Team
          </h3>
          <p className="text-lg text-center text-blue-200 mt-4 max-w-3xl mx-auto leading-relaxed">
            I combine curiosity, accountability, and engineering discipline to
            craft solutions that serve users, scale with business, and support
            teams with reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            {/* Analytical Thinking */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-500/30 rounded-xl shadow-lg"
            >
              <Lightbulb className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Analytical Thinking</h4>
              <p className="text-blue-100 mt-2">
                I bring clarity to complexity, breaking down challenges and
                delivering data-driven solutions with measurable impact.
              </p>
            </motion.div>

            {/* Leadership */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-600/30 rounded-xl shadow-lg"
            >
              <Users className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Leadership & Initiative</h4>
              <p className="text-blue-100 mt-2">
                I lead with intention—taking ownership, collaborating deeply,
                and championing quality in every sprint.
              </p>
            </motion.div>

            {/* Engineering Excellence */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-700/30 rounded-xl shadow-lg"
            >
              <Code className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Engineering Excellence</h4>
              <p className="text-blue-100 mt-2">
                My code is clean, scalable, and secure—built to empower teams
                and solve for the future.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <h3 className="text-3xl font-bold text-center mt-20">
            Why I’m a Great Fit
          </h3>
          <p className="text-lg text-center text-blue-200 mt-4 max-w-3xl mx-auto leading-relaxed">
            I engineer with empathy and purpose—blending emerging tech with
            business goals and delivering experiences that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-400/30 rounded-xl shadow-lg"
            >
              <HeartHandshake className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Collaborative Spirit</h4>
              <p className="text-blue-100">
                I thrive in team-driven cultures where diverse voices fuel
                innovation.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-500/30 rounded-xl shadow-lg"
            >
              <BrainCircuit className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Creative Curiosity</h4>
              <p className="text-blue-100">
                I'm always learning—exploring new tools, approaches, and ideas
                that push boundaries.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-blue-600/30 rounded-xl shadow-lg"
            >
              <Rocket className="w-10 h-10 text-white mx-auto mb-4" />
              <h4 className="text-xl font-semibold">Agile & Adaptable</h4>
              <p className="text-blue-100">
                I adjust quickly, learn fast, and thrive in environments that
                evolve with user needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
