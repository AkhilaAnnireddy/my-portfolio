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

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    {
      name: "Programming Languages",
      icon: (
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          <Braces className="h-8 w-8 text-blue-400" />
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
          <Globe className="h-8 w-8 text-blue-400" />
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
          <Server className="h-8 w-8 text-blue-400" />
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
          <Cpu className="h-8 w-8 text-blue-400" />
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
          <Wrench className="h-8 w-8 text-blue-400" />
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
          <BrainCircuit className="h-8 w-8 text-blue-400" />
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
          <Database className="h-8 w-8 text-blue-400" />
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
          <Code2 className="h-8 w-8 text-blue-400" />
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
          <Lightbulb className="h-8 w-8 text-blue-400" />
        </motion.div>
      ),
      details: ["OOP", "System Design", "SDLC", "Agile"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-blue-200">
      {/* Hero Banner */}
      <motion.section
        className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 text-center p-8 bg-black text-blue-200 -mt-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left px-4 lg:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
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
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            Learn More About Me
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Work Experience */}
      <motion.section
        ref={aboutRef}
        className="py-20 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">
            Work Experience
          </h2>
          <div className="space-y-8 border-l-4 border-blue-700 pl-6">
            {/* Backend Developer - CU Boulder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-700"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2" />
              <h3 className="text-xl font-semibold text-blue-200">
                Backend Developer
              </h3>
              <p className="text-blue-300 text-lg">
                Center for Innovation and Creativity – CU Boulder
              </p>
              <p className="text-blue-400 text-sm">Jan 2025 – Present</p>
              <ul className="list-disc text-blue-300 text-base leading-relaxed ml-6 mt-2 space-y-1">
                <li>
                  Architected a Python-based microservices video &
                  speaker-diarization platform—built on an event-driven
                  architecture, containerized with Docker, deployed on AWS via
                  Terraform modules, and integrated end-to-end CI/CD with GitHub
                  Actions.
                </li>
                <li>
                  Refactored talk-move classification into GPU-accelerated
                  Python microservices on AWS Batch with SQS-triggered parallel
                  execution— reducing inference cost by 30%.
                </li>
              </ul>
            </motion.div>

            {/* Software Development Engineer - JP Morgan Chase */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-700"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2" />
              <h3 className="text-xl font-semibold text-blue-200">
                Software Development Engineer
              </h3>
              <p className="text-blue-300 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-400 text-sm">Feb 2022 – Aug 2024</p>
              <ul className="list-disc text-blue-300 text-base leading-relaxed ml-6 mt-2 space-y-1">
                <li>
                  Led end-to-end delivery of 50+ features in Agile
                  sprints—partnering with product and design to build full-stack
                  solutions using React and Spring Boot microservices;
                  implemented comprehensive unit & integration test suites.
                </li>
                <li>
                  Orchestrated migration of four core applications from on-prem
                  to AWS using Terraform, blue/green deployments, Auto Scaling
                  groups, and health checks—ensuring seamless cutovers, 99.9%
                  availability, and 30% reduction in infrastructure costs.
                </li>
                <li>
                  Built a SCIM 2.0-compliant REST microservice with Spring Boot—
                  integrating Spring Security, JWT authorization, and audit
                  logging to automate access certification and enforce PII
                  compliance, reducing manual reviews by 65%.
                </li>
                <li>
                  Developed custom authorization filters and entitlement-driven
                  access control across microservices—integrating corporate SSO
                  and periodic token re-validation to strengthen system
                  security.
                </li>
                <li>
                  Spearheaded 20+ blue/green production releases via Jenkins and
                  Spinnaker pipelines—automated rollback, alerting, and
                  Prometheus/Grafana dashboards for observability, cutting MTTR
                  by 45% and maintaining 99.99% uptime.
                </li>
                <li>
                  Managed Java platform upgrades (8→11→17), refactoring legacy
                  code to remove deprecated APIs, leveraging new JVM features
                  for performance gains, and validating stability through
                  automated regression and load tests.
                </li>
              </ul>
            </motion.div>

            {/* Software Developer Intern - JP Morgan Chase */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-700"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2" />
              <h3 className="text-xl font-semibold text-blue-200">
                Software Developer Intern
              </h3>
              <p className="text-blue-300 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-400 text-sm">Feb 2022 – Aug 2022</p>
              <ul className="list-disc text-blue-300 text-base leading-relaxed ml-6 mt-2 space-y-1">
                <li>
                  Built and maintained Web UI and REST APIs using React and
                  Spring Boot, implementing Maker-Checker with audit logging and
                  enhancing test coverage with non-snapshot Selenium tests.
                </li>
                <li>
                  Ensured ADA compliance by integrating accessibility testing
                  tools and addressing 90% of flagged issues, significantly
                  enhancing usability for assistive technology users and
                  reducing security review time by 35%.
                </li>
              </ul>
            </motion.div>

            {/* Summer Intern - JP Morgan Chase */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-blue-700"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-blue-600 rounded-full transform -translate-x-1/2" />
              <h3 className="text-xl font-semibold text-blue-200">
                Summer Intern
              </h3>
              <p className="text-blue-300 text-lg">JP Morgan Chase & Co.</p>
              <p className="text-blue-400 text-sm">May 2021 – July 2021</p>
              <ul className="list-disc text-blue-300 text-base leading-relaxed ml-6 mt-2 space-y-1">
                <li>
                  Implemented an AutoMonitor scheduler using the Akka framework
                  to continuously monitor deal statuses and trigger automated
                  alerts for anomalies.
                </li>
                <li>
                  Created a Jenkins pipeline to automate execution of
                  non-snapshot UI, API, and Selenium tests, integrating it with
                  Bitbucket Actions for seamless CI/CD and improved test
                  reliability.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="py-20 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 16, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-6 bg-gray-950/90 border border-blue-900/40 shadow-lg hover:shadow-blue-900/40 transition-all"
              >
                {/* Title row with icon and name */}
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                    className="text-blue-300"
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-200">
                    {skill.name}
                  </h3>
                </div>

                {/* badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.details.map((d: string) => (
                    <span
                      key={d}
                      className="inline-flex items-center rounded-full px-3 py-1 text-sm
                           bg-blue-950/60 text-blue-300 border border-blue-800/60
                           hover:bg-blue-900/60 hover:border-blue-700/60 transition-colors"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        className="py-20 px-6 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="certifications-heading"
            className="text-4xl font-bold text-center mb-16 text-blue-400"
          >
            Certifications
          </h2>
          <ul
            role="list"
            className="list-none grid gap-12 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center"
          >
            {[
              {
                title: "AWS Certified Machine Learning Engineer",
                image: developerAssociate,
                alt: "AWS Certified Machine Learning Engineer badge",
                verifyLink:
                  "https://cp.certmetrics.com/amazon/en/public/verify/credential/02fcacee78034c37ba5f6cbf3a210abe",
              },
              {
                title: "AWS Certified Developer Associate",
                image: developerAssociate,
                alt: "AWS Certified Developer Associate badge",
                verifyLink:
                  "https://cp.certmetrics.com/amazon/en/public/verify/credential/02fcacee78034c37ba5f6cbf3a210abe",
              },
              {
                title: "AWS Certified Cloud Practitioner",
                image: cloudPractioner,
                alt: "AWS Certified Cloud Practitioner badge",
                verifyLink:
                  "https://www.credly.com/badges/64977c05-7f1d-4bb6-b9ae-1729ebf943d4/linked_in_profile",
              },
            ].map((cert) => (
              <li key={cert.title} className="w-full max-w-xs">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900 border border-blue-900/40 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-center transition duration-300"
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={280}
                    height={160}
                    placeholder="blur"
                    loading="lazy"
                    className="rounded-lg shadow-md"
                  />
                  <h3 className="mt-6 text-2xl font-semibold text-blue-300">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${cert.title}`}
                    className="mt-4 inline-block px-5 py-2 text-sm font-medium text-blue-900 bg-blue-200 rounded-md shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  >
                    Verify Certification
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Passion & Purpose-Driven Development */}
      <motion.section
        className="py-24 px-6 bg-black text-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
            Passion &amp; Purpose-Driven Development
          </h2>

          {/* Passion Goals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: <Code2 className="w-6 h-6 text-blue-200" />,
                heading: "Full Stack + AI",
                text: `I’m driven by the synergy between full stack development and AI. I aim to build future-ready systems that are not only technically robust but intelligently responsive—designed to scale and adapt.`,
              },
              {
                icon: <Brain className="w-6 h-6 text-blue-200" />,
                heading: "AI for Real-World Impact",
                text: `I thrive at the intersection of machine learning and real-world problem solving—where technology translates into measurable outcomes and smarter decisions.`,
              },
            ].map(({ icon, heading, text }) => (
              <motion.div
                key={heading}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-2xl shadow-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-blue-700/30 rounded-full">{icon}</div>
                  <h3 className="text-xl font-bold text-blue-300">{heading}</h3>
                </div>
                <p className="text-blue-200 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Team Traits */}
          <h3 className="text-3xl font-bold text-center mt-20 text-blue-400">
            How I Strengthen a Team
          </h3>
          <p className="text-lg text-center text-blue-200 mt-4 max-w-3xl mx-auto leading-relaxed">
            I combine curiosity, accountability, and engineering discipline to
            craft solutions that serve users, scale with business, and support
            teams with reliability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            {[
              {
                icon: (
                  <Lightbulb className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                title: "Analytical Thinking",
                text: `I bring clarity to complexity, breaking down challenges and delivering data-driven solutions with measurable impact.`,
              },
              {
                icon: (
                  <Users className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                title: "Leadership & Initiative",
                text: `I lead with intention—taking ownership, collaborating deeply, and championing quality in every sprint.`,
              },
              {
                icon: <Code className="w-10 h-10 text-blue-200 mx-auto mb-4" />,
                title: "Engineering Excellence",
                text: `My code is clean, scalable, and secure—built to empower teams and solve for the future.`,
              },
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              >
                {icon}
                <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
                <p className="text-blue-200 mt-2">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <h3 className="text-3xl font-bold text-center mt-20 text-blue-400">
            Why I’m a Great Fit
          </h3>
          <p className="text-lg text-center text-blue-200 mt-4 max-w-3xl mx-auto leading-relaxed">
            I engineer with empathy and purpose—blending emerging tech with
            business goals and delivering experiences that matter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            {[
              {
                icon: (
                  <HeartHandshake className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                title: "Collaborative Spirit",
                text: `I thrive in team-driven cultures where diverse voices fuel innovation.`,
              },
              {
                icon: (
                  <BrainCircuit className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                title: "Creative Curiosity",
                text: `I'm always learning—exploring new tools, approaches, and ideas that push boundaries.`,
              },
              {
                icon: (
                  <Rocket className="w-10 h-10 text-blue-200 mx-auto mb-4" />
                ),
                title: "Agile & Adaptable",
                text: `I adjust quickly, learn fast, and thrive in environments that evolve with user needs.`,
              },
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              >
                {icon}
                <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
                <p className="text-blue-200">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
