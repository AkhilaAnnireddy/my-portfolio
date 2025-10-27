"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import profilephoto from "../public/profile_pic.png";
import da from "../public/da.png";
import cp from "../public/cp.png";
import ml from "../public/ml.png";
import Skills from "./Skills";
import Link from "next/link";
import {
  Code2,
  HeartHandshake,
  Brain,
  Cloud,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
export default function Hero() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
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
        className="py-10 px-8 bg-black text-blue-200"
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
            <Link
              href="/workexp"
              className="inline-block px-6 py-2 text-blue-100 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
            >
              Know more about my work →
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="bg-black text-blue-100 py-10 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Skills Section */}
          <Skills />
        </div>
      </section>
      {/* Certifications Section */}
      <motion.section
        className="py-10 px-8 bg-black text-blue-200"
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
        className="py-10 px-8 bg-black text-blue-200"
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
      {/* Recommendations Section */}
      <motion.section
        className="py-10 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
            Recommendations
          </h2>
          <p className="text-blue-300 text-center text-lg mb-16">
            Words from managers and colleagues who’ve seen my journey and impact
            firsthand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Lan Wang",
                role: "Executive Director, J.P. Morgan Chase & Co.",
                linkedin: "https://www.linkedin.com/in/lan-wang-03501832/",
                text: "Akhila is one of the most capable graduates I’ve worked with in my 20-year career. Beyond her strong technical competency, she showed exceptional ownership and professional maturity — rare qualities in someone early in their career.",
              },
              {
                name: "Ajay Agrawal",
                role: "Vice President, J.P. Morgan Chase & Co.",
                linkedin: "https://www.linkedin.com/in/agrawalajay/",
                text: "Akhila consistently delivered high-quality, scalable solutions and managed her work end-to-end. Her quick learning ability, collaboration skills, and problem-solving mindset made her a highly dependable member of the team.",
              },
              {
                name: "Unnati Sorathi",
                role: "Software Engineer, J.P. Morgan Chase & Co.",
                linkedin:
                  "https://www.linkedin.com/in/unnati-sorathi-8516941b1/",
                text: "Working with Akhila was a privilege. She was always approachable, shared knowledge generously, and led by example. Her deep technical understanding and supportive nature make her an invaluable asset to any team.",
              },
            ].map((rec) => (
              <motion.div
                key={rec.name}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-2xl shadow-xl text-left flex flex-col items-start"
              >
                {/* Profile Header */}
                <div className="flex items-center mb-4 w-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-200">
                      {rec.name}
                    </h3>
                    <p className="text-sm text-blue-400">{rec.role}</p>
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${rec.name}'s LinkedIn`}
                    className="text-blue-400 hover:text-blue-500 transition"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>

                {/* Quote */}
                <p className="text-blue-200 text-sm leading-relaxed italic">
                  “{rec.text}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        aria-labelledby="passion-heading"
        className="py-10 px-6 bg-black text-blue-200"
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
        </div>
      </motion.section>
      {/* Why Hire Me Section */}
      <motion.section
        className="py-10 px-8 bg-black text-blue-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            Why Should You Hire Me?
          </h2>
          <p className="text-blue-300 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            Because I combine the precision of an engineer, the curiosity of a
            researcher, and the empathy of a teammate. I build systems that not
            only scale — but truly serve people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <Code2
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "End-to-End Ownership",
                text: "From design to deployment, I take full responsibility for shipping production-ready systems that just work.",
              },
              {
                icon: (
                  <Cloud
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Cloud + ML Expertise",
                text: "I bring hands-on experience across AWS, distributed systems, and ML pipelines — ensuring solutions that scale securely.",
              },
              {
                icon: (
                  <HeartHandshake
                    className="w-10 h-10 text-blue-200 mx-auto mb-4"
                    aria-hidden="true"
                  />
                ),
                title: "Collaborative Mindset",
                text: "I thrive in high-trust teams — balancing technical depth with communication, mentorship, and empathy.",
              },
            ].map(({ icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-gray-900 border border-blue-900/40 rounded-2xl shadow-lg transition"
              >
                {icon}
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  {title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
