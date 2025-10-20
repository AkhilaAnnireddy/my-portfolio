"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import profilephoto from "../public/profile_pic.png";
import da from "../public/da.png";
import cp from "../public/cp.png";
import ml from "../public/ml.png";
import Link from "next/link";
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
  Calendar,
  Briefcase,
  Cloud,
  Boxes,
  GitBranch,
  ShieldCheck,
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
export default function Hero() {
  const aboutRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  type HeroSkill = { label: string; proof: string; href?: string }; // href -> links to a case study
  type SkillItem = { label: string; usedIn?: string }; // “Used in” = proof tag

  const HERO_SKILLS: HeroSkill[] = [
    {
      label: "AWS",
      proof: "Cut GPU inference cost ~30% (Batch • SQS)",
      href: "/work/cognitive-science",
    },
    {
      label: "Next.js",
      proof: "App Router • ISR • RSC (migrated from SPA)",
      href: "/work/cognitive-science",
    },
    {
      label: "Python",
      proof: "Pipelines & services powering analytics",
      href: "/work/cognitive-science",
    },
    {
      label: "Terraform",
      proof: "Modular IaC across prod/dev with CI/CD",
      href: "/work/jpmc-sde",
    },
    {
      label: "React",
      proof: "50+ features shipped (enterprise apps)",
      href: "/work/jpmc-sde",
    },
    {
      label: "Spring Boot",
      proof: "SCIM 2.0 • JWT • audit logging",
      href: "/work/jpmc-sde",
    },
  ];

  const GROUPS: {
    name: string;
    icon: React.ReactNode;
    items: SkillItem[];
  }[] = [
    {
      name: "Cloud & Infrastructure",
      icon: <Cloud className="h-5 w-5 text-blue-400" />,
      items: [
        {
          label: "AWS (Lambda, SQS, Batch, Cognito, S3, DynamoDB)",
          usedIn: "CU Boulder platform",
        },
        {
          label: "Terraform (modules, env separation)",
          usedIn: "JPMC + CU Boulder",
        },
        {
          label: "CI/CD (GitHub Actions, Jenkins)",
          usedIn: "JPMC releases • research pipelines",
        },
        { label: "Docker • Linux • CloudWatch", usedIn: "All projects" },
      ],
    },
    {
      name: "Backend Development",
      icon: <Server className="h-5 w-5 text-blue-400" />,
      items: [
        {
          label: "Python (FastAPI/Flask)",
          usedIn: "CU Boulder analytics services",
        },
        { label: "Java • Spring Boot", usedIn: "JPMC investor portal" },
        { label: "REST APIs • SCIM 2.0", usedIn: "JPMC access governance" },
        { label: "SQL (query optimization)", usedIn: "JPMC performance fixes" },
      ],
    },
    {
      name: "Frontend Development",
      icon: <Globe className="h-5 w-5 text-blue-400" />,
      items: [
        { label: "Next.js (App Router • ISR)", usedIn: "CU Boulder dashboard" },
        { label: "React • TypeScript • Tailwind", usedIn: "JPMC + CU Boulder" },
        { label: "Jest (unit tests)", usedIn: "JPMC quality" },
      ],
    },
    {
      name: "Data & ML",
      icon: <BrainCircuit className="h-5 w-5 text-blue-400" />,
      items: [
        {
          label: "NLP • diarization • transcription",
          usedIn: "Student–tutor analytics",
        },
        {
          label: "Pandas • NumPy • scikit-learn",
          usedIn: "Data processing pipelines",
        },
        {
          label: "Feature engineering • analytics",
          usedIn: "Session insights",
        },
      ],
    },
    {
      name: "Quality & Practices",
      icon: <Wrench className="h-5 w-5 text-blue-400" />,
      items: [
        {
          label: "Testing (JUnit • Mockito • Selenium)",
          usedIn: "JPMC release confidence",
        },
        {
          label: "Agile/Scrum • release mgmt",
          usedIn: "JPMC cross-team delivery",
        },
        { label: "Security • RBAC • audit logging", usedIn: "JPMC compliance" },
        {
          label: "Maker–Checker • DLQ/retries",
          usedIn: "JPMC • AWS pipelines",
        },
      ],
    },
    {
      name: "Tooling & Workflow",
      icon: <Code2 className="h-5 w-5 text-blue-400" />,
      items: [
        { label: "Git • Bitbucket • Jira • Confluence", usedIn: "All teams" },
        {
          label: "Splunk / CloudWatch logging",
          usedIn: "Prod troubleshooting",
        },
        { label: "System design • SDLC", usedIn: "Architecture decisions" },
      ],
    },
  ];
  const reduceMotion = useReducedMotion();
  const hoverScale = reduceMotion ? {} : { scale: 1.03 };
  const appear = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 };

  const containerInitial = reduceMotion ? { opacity: 1 } : { opacity: 0 };
  const photoInitial = reduceMotion
    ? { x: 0, opacity: 1 }
    : { x: -40, opacity: 0 };
  const copyInitial = reduceMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24 };

  const roleChips = [
    "Full-Stack Developer",
    "Cloud / AWS",
    "ML Platforms (NLP • diarization)",
  ];

  const openToRoles = [
    "Software Engineer (Backend)",
    "Full-Stack Engineer",
    "Cloud / Platform Engineer (AWS)",
    "Machine Learning Engineer (Platform)",
    "DevOps / SRE ",
  ];

  return (
    <div className="min-h-screen bg-black text-blue-200">
      {/* Hero Banner */}
      <motion.section
        aria-labelledby="hero-heading"
        className="min-h-[100vh] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-12 text-center p-8 bg-black text-blue-200 -mt-14"
        initial={containerInitial}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Photo */}
        <motion.div
          className="flex justify-center"
          initial={photoInitial}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Image
            src={profilephoto}
            alt="Portrait of Akhila Annireddy"
            width={320}
            height={320}
            priority
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-xl shadow-2xl ring-1 ring-blue-900/50"
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left px-1 sm:px-2 lg:px-0"
          initial={copyInitial}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-bold text-blue-400 leading-tight"
          >
            Hi, I’m <span className="text-blue-300">Akhila Annireddy</span>
          </h1>
          {/* Tagline */}
          <p className="mt-2 text-lg text-blue-300 italic font-medium">
            Engineering with empathy, powered by cloud + AI
          </p>

          {/* Brand line (value prop) */}
          <p className="mt-3 text-base sm:text-lg text-blue-200/90 max-w-2xl">
            I build production-grade products at the intersection of{" "}
            <strong>full-stack</strong>, <strong>cloud</strong>, and{" "}
            <strong>ML</strong>—shipping scalable, secure systems that drive
            real outcomes.
          </p>
          {/* Open to roles */}
          <div className="mt-5">
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              <span>Open to roles</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {openToRoles.map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 text-xs rounded-full bg-blue-950/50 border border-blue-800/60 text-blue-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mt-7">
            <Link
              href="/workexp"
              className="inline-block"
              aria-label="Go to Work Experience"
            >
              <motion.span
                whileHover={reduceMotion ? {} : { scale: 1.03 }}
                whileTap={reduceMotion ? {} : { scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Learn More About My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        ref={aboutRef}
        className="py-20 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-400">
            Work Experience
          </h2>
          <p className="text-center text-blue-300 text-lg mb-12">
            3+ years engineering production-grade systems—bridging research and
            industry with scalable cloud platforms, full-stack applications, and
            ML-powered analytics.
          </p>

          <div className="relative border-l-4 border-blue-700 pl-6 space-y-10">
            {/* CU Boulder */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative pl-6">
              <span className="absolute -left-[9px] top-2 block w-3 h-3 rounded-full bg-blue-600" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-blue-200">
                  Software Developer
                </h3>
                <span className="text-sm text-blue-400">~9 months</span>
              </div>
              <p className="text-blue-300">
                Institute of Cognitive Science – CU Boulder
              </p>
              <p className="text-blue-400 text-sm">Jan 2025 – Present</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  Cloud Infra
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  ML Eng
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  Full-stack
                </span>
              </div>
              <p className="mt-2 text-blue-300 text-sm">
                I bridge research and production by turning advanced ML models
                into scalable, production-ready platforms. My work enables
                researchers and clients to analyze thousands of student–tutor
                interactions—unlocking insights through diarization,
                transcription, and automated educational feedback delivered via
                a secure, modern UI.
              </p>
            </motion.div>

            {/* JP Morgan SDE */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative pl-6">
              <span className="absolute -left-[9px] top-2 block w-3 h-3 rounded-full bg-blue-600" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-blue-200">
                  Software Development Engineer
                </h3>
                <span className="text-sm text-blue-400">~2.5 years</span>
              </div>
              <p className="text-blue-300">JP Morgan Chase & Co.</p>
              <p className="text-blue-400 text-sm">Feb 2022 – Aug 2024</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  Full-stack
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  Cloud Infra
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  DevOps/SRE
                </span>
              </div>
              <p className="mt-2 text-blue-300 text-sm">
                I engineered and delivered critical features for a global
                investor portal, collaborating with operational, release
                management, and testing teams in an Agile environment. Alongside
                developing new capabilities and maintaining existing
                applications, I owned production releases, resolved
                high-priority issues under pressure, and mentored interns
                through structured knowledge transfers. My contributions
                improved platform reliability, accelerated feature delivery, and
                reinforced client trust in a mission-critical financial system.
              </p>
            </motion.div>

            {/* JP Morgan Summer Intern */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative pl-6">
              <span className="absolute -left-[9px] top-2 block w-3 h-3 rounded-full bg-blue-600" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-blue-200">
                  Software Summer Intern
                </h3>
                <span className="text-sm text-blue-400">~3 months</span>
              </div>
              <p className="text-blue-300">JP Morgan Chase & Co.</p>
              <p className="text-blue-400 text-sm">May 2021 – Jul 2021</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  Backend
                </span>
                <span className="px-2 py-1 text-xs rounded-full bg-blue-900/40 border border-blue-700">
                  DevOps
                </span>
              </div>
              <p className="mt-2 text-blue-300 text-sm">
                As a Software Developer Intern, I gained hands-on experience
                delivering features for a global banking application while
                learning how large-scale systems are built and operated. I
                contributed to critical workflows that improved compliance and
                reliability, optimized performance for smoother client usage,
                and helped resolve production issues in real time. This role
                gave me a strong foundation in building secure, resilient
                systems while contributing to business-critical software.
              </p>
            </motion.div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/workexp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 text-blue-100 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
            >
              Know more about my work →
            </a>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20 px-8 bg-black text-blue-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
            Skills
          </h2>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-40">
            {/* Left Column */}
            <div className="space-y-10">
              {/* Cloud & DevOps */}
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  ☁️ Cloud & DevOps
                </h3>
                {[
                  { label: "AWS", level: 90 },
                  { label: "Terraform", level: 80 },
                  { label: "CI/CD (GitHub Actions, Docker)", level: 85 },
                ].map((skill) => (
                  <div key={skill.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-950/50 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Backend */}
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  💻 Backend Development
                </h3>
                {[
                  { label: "Java & Spring Boot", level: 90 },
                  { label: "Node.js & Express", level: 75 },
                  { label: "REST APIs & Microservices", level: 85 },
                  { label: "PostgreSQL / DynamoDB", level: 80 },
                ].map((skill) => (
                  <div key={skill.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-950/50 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Machine Learning */}
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  🤖 Machine Learning & Data
                </h3>
                {[
                  { label: "Python", level: 90 },
                  { label: "SageMaker", level: 80 },
                  { label: "Scikit-learn / TensorFlow", level: 75 },
                  { label: "Data Pipelines", level: 85 },
                ].map((skill) => (
                  <div key={skill.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-950/50 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Frontend */}
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  🎨 Frontend Development
                </h3>
                {[
                  { label: "React & TypeScript", level: 85 },
                  { label: "Tailwind CSS / UI Design", level: 80 },
                  { label: "JavaScript / HTML / CSS", level: 90 },
                ].map((skill) => (
                  <div key={skill.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-950/50 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  🧰 Tools & Practices
                </h3>
                {[
                  { label: "Git / GitHub", level: 90 },
                  { label: "VS Code / Linux", level: 85 },
                  { label: "Agile / Jira / Confluence", level: 80 },
                ].map((skill) => (
                  <div key={skill.label} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.label}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-blue-950/50 rounded-full h-2">
                      <div
                        className="h-2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <motion.section
        className="py-20 px-6 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        aria-labelledby="certifications-heading"
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
                image: ml,
                alt: "Badge: AWS Certified Machine Learning Engineer",
                verifyLink:
                  "https://cp.certmetrics.com/amazon/en/public/verify/credential/02fcacee78034c37ba5f6cbf3a210abe",
                verifyText: "Verify on AWS Certmetrics",
              },
              {
                title: "AWS Certified Developer Associate",
                image: da,
                alt: "Badge: AWS Certified Developer Associate",
                verifyLink:
                  "https://cp.certmetrics.com/amazon/en/public/verify/credential/02fcacee78034c37ba5f6cbf3a210abe",
                verifyText: "Verify on AWS Certmetrics",
              },
              {
                title: "AWS Certified Cloud Practitioner",
                image: cp,
                alt: "Badge: AWS Certified Cloud Practitioner",
                verifyLink:
                  "https://www.credly.com/badges/64977c05-7f1d-4bb6-b9ae-1729ebf943d4/linked_in_profile",
                verifyText: "Verify on Credly",
              },
            ].map((cert) => (
              <li key={cert.title} className="w-full max-w-xs">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-gray-900 border border-blue-900/40 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition duration-300"
                >
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    width={280}
                    height={160}
                    placeholder="blur"
                    loading="lazy"
                    decoding="async"
                    className="rounded-lg shadow-md"
                  />
                  <h3 className="mt-6 text-2xl font-semibold text-blue-300">
                    {cert.title}
                  </h3>
                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${cert.verifyText} — ${cert.title}`}
                    className="mt-4 inline-block px-5 py-2 text-sm font-medium text-blue-900 bg-blue-200 rounded-md shadow hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  >
                    {cert.verifyText}
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
      {/* Volunteer Experience */}
      <motion.section
        className="py-20 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-400">
            Volunteer Experience
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative pl-8 border-l-4 border-blue-700"
          >
            <div className="absolute left-5 top-2 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2" />
            <h3 className="text-xl font-semibold text-blue-200">
              Web Developer – Force for Good, JP Morgan
            </h3>
            <p className="text-blue-300 text-lg">
              Prem Samriddhi Foundation (Farmer-led NGO)
            </p>
            <p className="text-blue-400 text-sm">2021</p>
            <ul className="list-disc text-blue-300 text-base leading-relaxed ml-6 mt-2 space-y-1">
              <li>
                Partnered with <strong>Force for Good</strong> initiative to
                design and launch a multilingual, low-cost website for Prem
                Samriddhi Foundation, an NGO run by farmers promoting organic
                and endangered crops.
              </li>
              <li>
                Enabled farmers to showcase products, share cultivation
                knowledge through a blog, and engage with customers via email
                subscriptions.
              </li>
              <li>
                Delivered training sessions and comprehensive documentation so
                the NGO team could self-manage updates and content long-term.
              </li>
            </ul>
            <a
              href="https://www.premsamriddhifoundation.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300 text-sm underline"
            >
              View Website →
            </a>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        aria-labelledby="passion-heading"
        className="py-24 px-6 bg-black text-blue-200"
        initial={appear}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="passion-heading"
            className="text-4xl font-bold text-center mb-4 text-blue-400"
          >
            Passion &amp; Purpose-Driven Development
          </h2>

          {/* Passion Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: (
                  <Code2 className="w-6 h-6 text-blue-200" aria-hidden="true" />
                ),
                heading: "Full-Stack + AI",
                text: "I build systems that pair solid engineering with intelligent behavior—scalable, reliable, and responsive to real users.",
              },
              {
                icon: (
                  <Brain className="w-6 h-6 text-blue-200" aria-hidden="true" />
                ),
                heading: "AI with Real Impact",
                text: "I turn research models into products—surfacing insights that speed decisions and improve outcomes.",
              },
            ].map(({ icon, heading, text }) => (
              <motion.div
                key={heading}
                whileHover={hoverScale}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-2xl shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-3">
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
            Curiosity, ownership, and engineering rigor—so solutions serve
            users, scale with business, and stay reliable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            {[
              {
                icon: (
                  <Lightbulb
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Analytical Thinking",
                text: "I simplify complex problems and deliver measurable wins.",
              },
              {
                icon: (
                  <Users
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Leadership & Initiative",
                text: "I take ownership, collaborate deeply, and raise the quality bar every sprint.",
              },
              {
                icon: (
                  <Code
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Engineering Excellence",
                text: "Clean, secure, scalable code that teams can build on.",
              },
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={hoverScale}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg transition"
              >
                {icon}
                <h4 className="text-xl font-semibold text-blue-300">{title}</h4>
                <p className="text-blue-200 mt-2">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Values / Fit */}
          <h3 className="text-3xl font-bold text-center mt-20 text-blue-400">
            Why I’m a Great Fit
          </h3>
          <p className="text-lg text-center text-blue-200 mt-4 max-w-3xl mx-auto leading-relaxed">
            I align emerging tech with business goals—shipping experiences that
            matter to users and move metrics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 text-center">
            {[
              {
                icon: (
                  <HeartHandshake
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Collaborative Spirit",
                text: "I thrive in diverse, high-trust teams.",
              },
              {
                icon: (
                  <BrainCircuit
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Creative Curiosity",
                text: "I learn fast and experiment responsibly to find better paths.",
              },
              {
                icon: (
                  <Rocket
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Agile & Adaptable",
                text: "I adapt quickly as requirements evolve—without sacrificing quality.",
              },
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={hoverScale}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-xl shadow-lg transition"
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
